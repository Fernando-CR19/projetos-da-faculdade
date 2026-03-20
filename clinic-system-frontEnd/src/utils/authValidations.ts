export const verifyCode = (code: string) => {
  if (!code) return "Código obrigatório";
  if (!/^[0-9]{6}$/.test(code)) {
    return "O código deve ter exatamente 6 dígitos numéricos";
  }
  return "";
};
