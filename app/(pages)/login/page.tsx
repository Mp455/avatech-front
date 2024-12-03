"use client";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { api } from "@/middleware/auth";

const FormSchema = z.object({
  email: z.string().email("Por favor, insira um e-mail válido").min(2, {
    message: "E-mail é obrigatório",
  }),
  password: z.string().min(2, {
    message: "Senha é obrigatória",
  }),
});

export default function LoginFormPage() {
  const { push } = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      const response = await api.post("/login", data);

      const token = response.data.token;
      localStorage.setItem("token", token);

      push("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="grid grid-cols-2 min-h-screen">
      <div className="mx-auto flex h-full w-full sm:w-[550px] flex-col justify-center p-8">
        {/* ESQUERDA */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6 mx-auto"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite seu e-mail..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Digite sua senha..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full space-y-6 mx-auto">
              Entrar
            </Button>
          </form>
          <Button variant={"link"} asChild className="w-full space-y-6 mx-auto">
            <Link href={"/cadastro"}>
              Não tem cadastro? Clique aqui para criar sua conta.
            </Link>
          </Button>
        </Form>
      </div>
      <div className="relative h-full w-full">
        {/* DIREITA */}
        <Image src="/logo.jpg" fill className="object-cover" alt="Faça login" />
      </div>
    </div>
  );
}
