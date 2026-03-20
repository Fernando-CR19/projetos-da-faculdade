import { useState } from "react";

export default function bot(message: any) {
  const [error, setError] = useState("");

  const handleChatBot = async (message: any) => {
    setError("");

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/bot/fast_agent_llama`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message }),
        }
      );

      const json = await response.json();

      if (response.ok && json.reply) {
        return json.reply;
      } else {
        setError("Erro ao receber mensagem");
        return "Erro ao processar sua solicitação";
      }
    } catch (err) {
      setError("Erro no servidor, tente novamente mais tarde");
      return "Erro ao processar sua solicitação";
    }
  };

  return { error, handleChatBot };
}
