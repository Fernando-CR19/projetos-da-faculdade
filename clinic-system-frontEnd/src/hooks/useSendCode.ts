import { useState } from "react";
import { useRouter } from "expo-router";

export function useSendCode() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleVerificationCode = async (phone: string) => {
    setError("");
    try {
      const response = await fetch(
        `http://localhost:3000/whatsapp/sendVerificationCode`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phone: phone }),
        }
      );

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      if (response.ok) {
        router.push({
          pathname: "/recuperar",
          params: { phone: phone },
        });
      } else {
        throw new Error(
          "We were unable to send the code to the provided mobile phone number."
        );
      }
    } catch (error) {
      throw new Error(
        "We were unable to send the code to the provided mobile phone number." +
          `${error}`
      );
    }
  };

  return { error, handleVerificationCode };
}
