export const maskPhone = (phone: string) => {
  const unmaskPhone = phone.replace(/\D/g, "");
  const { length } = unmaskPhone;
  if (length <= 11) {
    return unmaskPhone
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(length === 11 ? /(\d{5})(\d)/ : /(\d{4})(\d)/, "$1-$2");
  }

  return phone;
};
