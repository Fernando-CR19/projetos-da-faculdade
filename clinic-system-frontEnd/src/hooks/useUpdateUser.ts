import { useState } from "react";
import { useRouter } from "expo-router";

export function useUpdateUser() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleUpdateUser = async (data: any) => {
    setError("");

    try {
      const { confirmPassword, ...userData } = data;

      const response = await fetch(
        `http://localhost:3000/user/updatePassword`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (!response.ok) {
        throw new Error(`ERROR HTTP: ${response.status}`);
      }

      if (response.ok) {
        router.replace("/login");
      }
    } catch (error) {
      throw new Error("Não foi possível atulizar seus dados: " + error);
    }
  };

  return { error, handleUpdateUser };
}
