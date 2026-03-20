import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function useFetchExams() {
  const [loading, setLoading] = useState(true);
  const [exams, setExams] = useState([]);
  const [error, setError] = useState("");

  const load = async () => {
    try {
      setLoading(true);
      const token = await AsyncStorage.getItem("token");
      if (!token) throw new Error("Token não encontrado");

      const [, payload] = token.split(".");
      const decoded = JSON.parse(atob(payload));
      const userId = decoded.sub;

      const response = await fetch(
        `http://localhost:3000/scheduling/${userId}`
      );

      const json = await response.json();
      setExams(json);
    } catch (e) {
      setError("Erro ao carregar agendamentos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return { exams, loading, error, reload: load };
}
