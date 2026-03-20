import { useState } from "react";
import { useRouter } from "expo-router";

export function useVerifyCode() {
  const [error, setError] = useState("");
  const router = useRouter();

  const validateCode = async (value: string, phone: string) => {
    setError("");

    const codeValue = value;

    if (!codeValue || codeValue.length !== 6) {
      return;
    }

    const payload = {
      phone: phone,
      code: codeValue,
    };

    try {
      const response = await fetch(
        `http://localhost:3000/whatsapp/verifyCodeAuthenticator`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        setError("Erro ao validar o código");
        return { success: false, message: "Erro ao validar o código" };
      }

      if (!result.success) {
        setError(result.message || "Código inválido");
        return { success: false, message: result.message };
      }

      if (result?.success) {
        router.push({ pathname: "/novasenha" });
      }
      return { success: true, message: "Código válido" };
    } catch (error) {
      setError("Não foi possível verificar o código");
      return { success: false, message: "Não foi possível verificar o código" };
    }
  };

  return { error, validateCode };
}
