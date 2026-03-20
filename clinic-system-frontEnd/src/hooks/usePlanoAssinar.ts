import { useState } from "react";
import { PlanosType } from "../utils/authPlanos";

export default function usePlanoAssinar(router: any) {
  const [error, setError] = useState("");

  const handleAssinarPlano = async (plano: PlanosType) => {
    setError("");
    const token = await localStorage.getItem("token");

    if (!token) {
      setError("Usuário não autenticado");
      return;
    }
    try {
      const response = await fetch(
        `http://localhost:3000/plans/subscribePlans`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ planoId: plano.id, planoNome: plano.nome }),
        }
      );

      if (!response.ok) {
        setError("Erro ao assinar o plano");
      }
    } catch {
      setError("Erro no servidor, tente novamente mais tarde");
    }
  };

  return { error, handleAssinarPlano };
}
