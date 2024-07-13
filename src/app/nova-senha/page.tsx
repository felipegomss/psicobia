"use client";

import { Toaster } from "@/components/ui/sonner";
import { auth } from "@/lib/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { Flower2 } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

export default function NovaSenha() {
  const [email, setEmail] = useState("");
  const resetSenha = (event: any) => {
    event.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Email enviado com sucesso!");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Erro ao enviar email");
      });
    setEmail("");
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Flower2 className="m-auto h-12 w-12" />
          <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-zinc-900">
            Esqueci minha senha
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
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
              <button
                type="submit"
                onClick={() => resetSenha(event)}
                disabled={!email}
                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-amber-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800"
              >
                Enviar email
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-zinc-500">
            Não tem uma conta?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-primary hover:text-amber-800"
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
