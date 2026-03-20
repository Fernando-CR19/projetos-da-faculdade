import { useState } from "react";

export function useUpdateInfoUser() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleUpdateUser = async (
    cpf: string,
    email: string,
    phone: string,
    address: string,
    phoneHelp?: string | null
  ) => {
    setError("");
    setSuccess("");
    try {
      const response = await fetch(
        `http://localhost:3000/user/updateUserProfile`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cpf, email, phone, address, phoneHelp }),
        }
      );

      const json = await response.json();

      if (response.ok) {
        setSuccess("Informações atualizadas com sucesso!");
        setTimeout(() => {
          setSuccess("");
        }, 3000);
      } else {
        setError("Erro ao atualizar informações do usuário");
      }
    } catch (error) {
      setError("Erro de conexão");
    }
  };

  return { error, success, handleUpdateUser };
}
