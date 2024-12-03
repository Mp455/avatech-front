"use client";
import { api } from "@/middleware/auth";
import { useEffect, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOutIcon } from "lucide-react";
type User = {
  id: string;
  email: string;
  username: string;
};

export default function ProtectedPage() {
  const [userAuth, setUserAuth] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { push } = useRouter();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get("/protected");
        setUserAuth(response.data.user);
      } catch (error) {
        console.error("Acesso negado ou token inválido", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    push("/login");
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!userAuth) {
    redirect("/login");
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div>
        <p>Bem-vindo, {userAuth.username}!</p>
        <Button onClick={handleLogout} className="w-full">
          <LogOutIcon />
          Sair
        </Button>
      </div>
    </div>
  );
}
