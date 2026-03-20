export const isValidCPF = (cpf?: string): string => {
  if (!cpf) return "Informe um CPF";

  const digits = cpf.replace(/\D/g, "");

  if (digits.length !== 11) return "CPF deve conter onze (11) dígitos";

  if (/^(\d)\1{10}$/.test(digits)) return "CPF inválido";

  const calcCheckDigit = (base: string, factor: number): number => {
    let sum = 0;
    for (let i = 0; i < base.length; i++) {
      sum += parseInt(base.charAt(i)) * factor--;
    }
    const result = (sum * 10) % 11;
    return result === 10 ? 0 : result;
  };

  const firstCheck = calcCheckDigit(digits.substring(0, 9), 10);
  if (firstCheck !== parseInt(digits.charAt(9))) return "CPF inválido";

  const secondCheck = calcCheckDigit(digits.substring(0, 10), 11);
  if (secondCheck !== parseInt(digits.charAt(10))) return "CPF inválido";

  return "";
};

export const unmaskCPF = (value?: string) =>
  value ? value.replace(/\D/g, "") : "";

export const maskCPF = (value?: string) => {
  const digits = unmaskCPF(value).substring(0, 11);

  if (!digits) return "";

  return digits
    .replace(/^(\d{3})(\d)/, "$1.$2")
    .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d{1,2})$/, ".$1-$2");
};

export const validatePassword = (password?: string) => {
  if (!password) return "Informe uma senha";
  if (password.length < 8) return "A senha deve ter 8 caracteres";
  if (!/^[A-Za-z0-9]+$/.test(password))
    return "Senha deve conter apenas letras e números";
  return "";
};

export const validateConfirmPassword = (
  password?: string,
  confirmPassword?: string
) => {
  if (!confirmPassword) return "Confirme a senha";
  if (password !== confirmPassword) return "As senhas não são iguais";
  return "";
};

export const validateName = (name?: string) => {
  if (!name) return "Informe um nome";
  if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]{3,50}$/.test(name)) {
    return "Digite um nome válido";
  }
  if (/\s{2,}/.test(name)) {
    return "Evite espaços em excesso";
  }
  if (name.trim().split(" ").length < 2) {
    return "Informe nome e sobrenome";
  }
  return "";
};

export const unmaskPhone = (text?: string) =>
  text ? text.replace(/\D/g, "") : "";

export const maskPhone = (text?: string) => {
  let cleaned = unmaskPhone(text);
  if (!cleaned) return "";

  if (cleaned.length > 11) cleaned = cleaned.substring(0, 11);

  if (cleaned.length <= 2) return `(${cleaned}`;
  if (cleaned.length <= 6)
    return `(${cleaned.substring(0, 2)}) ${cleaned.substring(2)}`;
  if (cleaned.length <= 10)
    return `(${cleaned.substring(0, 2)}) ${cleaned.substring(
      2,
      6
    )}-${cleaned.substring(6)}`;

  return `(${cleaned.substring(0, 2)}) ${cleaned.substring(
    2,
    7
  )}-${cleaned.substring(7)}`;
};

export const validatePhone = (phone?: string) => {
  const value = unmaskPhone(phone);
  if (!value) return "Informe um celular";
  if (!/^[0-9]+$/.test(value)) return "Digite apenas números";
  if (value.length !== 10 && value.length !== 11)
    return "Telefone deve ter 10 ou 11 dígitos (com DDD)";
  const ddd = parseInt(value.substring(0, 2));
  if (ddd < 11 || ddd > 99) return "DDD inválido";
  if (value.length === 11 && value[2] !== "9")
    return "O número deve começar com 9 após o DDD";
  return "";
};

export const validateEmail = (email?: string) => {
  if (!email) return "Informe um email";
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) return "Email inválido";
  return "";
};

export const validateAddress = (address?: string) => {
  if (!address || address.trim().length === 0) return "Informe um endereço";
  if (address.trim().length < 8) return "Endereço muito curto";
  if (!/\d/.test(address)) return "Inclua o número do endereço";
  if (!/[a-zA-ZÀ-ÿ]/.test(address)) return "Inclua o nome da rua";
  return "";
};
