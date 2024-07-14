"use client";
import { Toaster } from "@/components/ui/sonner";
import { whatsappLink } from "@/lib/utils";
import { Flower2 } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import React, { use, useState } from "react";
import { toast } from "sonner";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async (event: any) => {
    event.preventDefault();

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      switch (result.error) {
        case "Firebase: Error (auth/invalid-credential).":
          setError("auth/invalid-credential");
          toast.error("Email ou senha incorreta");
          break;
        default:
          toast.error("Erro ao fazer login, tente novamente em instantes");
          break;
      }
    } else {
      email === "psicobiancavieira@gmail.com"
        ? router.push("/admin")
        : router.push("/agendamento");
    }
  };

  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Flower2 className="m-auto h-12 w-12" />
          <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-zinc-900">
            Faça login para agendar
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-zinc-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full px-3 py-1.5 rounded-md border-0 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-amber-800 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-zinc-900"
                >
                  Senha
                </label>
                <div className="text-sm">
                  <a
                    href="/nova-senha"
                    className="font-semibold text-primary hover:text-amber-800"
                  >
                    Esqueceu a senha?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => {
                    setError("");
                    setPassword(e.target.value);
                  }}
                  className={`block w-full px-3 py-1.5 rounded-md border-0 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-amber-800 sm:text-sm sm:leading-6 ${
                    error === "auth/invalid-credential"
                      ? "ring-2 ring-amber-800"
                      : ""
                  }`}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={() => handleSignIn(event)}
                disabled={!email || !password}
                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-amber-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800"
              >
                Entrar
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-zinc-500">
            Não tem uma conta?{" "}
            <a
              href={whatsappLink}
              className="font-semibold leading-6 text-primary hover:text-amber-800"
              target="_blank"
            >
              Solicite seu acesso
            </a>
          </p>
        </div>
      </div>
      <Toaster />
    </>
  );
}
