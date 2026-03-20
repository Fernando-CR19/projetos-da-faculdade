import { useState } from "react";

export function useExams() {
  const [error, setError] = useState("");

  const exams = async (formData: any) => {
    setError("");

    try {
      const response = await fetch(`http://localhost:3000/scheduling/exams`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const json = await response.json();
      if (response.ok) {
      } else {
        setError("Erro agendar consulta");
      }
    } catch (e) {
      setError("Erro ao agendar consulta");
    }
  };

  return { error, exams };
}
