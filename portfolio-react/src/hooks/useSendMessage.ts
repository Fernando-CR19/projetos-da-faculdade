import { useState } from "react";
import { MY_PHONE } from "@env";

export function useSendMessage() {
  const [error, setError] = useState("");

  const handleSendMessage = async (phone: string, message: string) => {
    setError("");
    try {
      const response = await fetch(
        `http://localhost:3000/whatsapp/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phone: MY_PHONE,
            message: `Mensagem de: ${phone}:\n${message}`,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        console.log("Mensagem enviada com sucesso!");
      } else {
        throw new Error(result.message || "Erro ao enviar mensagem");
      }
    } catch (err: any) {
      console.log(err.message);
      setError(err.message);
    }
  };

  return { error, handleSendMessage };
}
