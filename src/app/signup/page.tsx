"use client";

import { Toaster } from "@/components/ui/sonner";
import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Flower2 } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const changePasswordURL = "http://localhost:3000/change-password";
  const pagePassword = process.env.NEXT_PUBLIC_PROTECTED_PAGE_PASSWORD;

  function generateRandomPassword() {
    var length = 6,
      charset =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }

  function sendEmail(password: String) {
    fetch("api/send-email", {
      method: "POST",
      body: JSON.stringify({
        to: email,
        subject: "Agora você tem acesso a nossa plataforma de agendamentos!",
        html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4; padding: 20px;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
            <h2 style="text-align: center; color: #1a73e8;">Bem-vindo à sua jornada de autocuidado</h2>
            <p>Olá, ${nome}!</p>
            <p>Estamos felizes em tê-lo(a) conosco. Aqui estão suas informações de login:</p>
            <ul style="list-style-type: none; padding: 0;">
              <li><strong>Email:</strong> ${email}</li>
              <li><strong>Senha:</strong> ${password}</li>
            </ul>
            <p>Se preferir, você pode trocar sua senha clicando <a href="${changePasswordURL}" style="color: #1a73e8;">aqui</a>.</p>
            <p>Para agendar uma sessão, siga as instruções abaixo:</p>
            <ol style="padding-left: 20px;">
              <li>Faça login no nosso site usando suas credenciais.</li>
              <li>Vá para a seção de agendamento.</li>
              <li>Escolha uma data e horário disponíveis para sua sessão.</li>
              <li>Confirme seu agendamento.</li>
            </ol>
            <h3 style="color: #1a73e8;">Sobre o Serviço:</h3>
            <ul style="list-style-type: none; padding: 0;">
              <li><strong>Duração da Sessão:</strong> Cada sessão tem a duração de 50 minutos, um tempo dedicado exclusivamente a você.</li>
              <li><strong>Disponibilidade:</strong> As vagas disponíveis são atualizadas em tempo real para que você possa escolher o horário que melhor se adapta à sua rotina.</li>
              <li><strong>Sessões Online:</strong> Nossas sessões são realizadas online, pelo Google Meet, proporcionando conforto e privacidade. O link para a sessão será gerado no momento do agendamento e enviado para você no e-mail de confirmação.</li>
              <li><strong>Confirmação de Agendamento:</strong> Após agendar, você receberá um e-mail com todos os detalhes da sessão, incluindo o link para a reunião online.</li>
              <li><strong>Cancelamento/Reagendamento:</strong> Entendemos que imprevistos acontecem. Se precisar cancelar ou reagendar, siga as instruções no e-mail de confirmação ou entre em contato diretamente conosco. Estamos aqui para ajudar.</li>
            </ul>
            <p>Se tiver qualquer dúvida ou precisar de assistência, por favor, não hesite em nos contatar. Estamos aqui para garantir que você tenha a melhor experiência possível em sua jornada de autocuidado e bem-estar.</p>
            <p>Atenciosamente,<br>Bianca Vieira</p>
          </div>
        </div>
      `,
      }),
    });
  }

  const signUp = (event: any) => {
    event.preventDefault();
    const password = generateRandomPassword();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        sendEmail(password);

        toast.success("Paciente Cadastrado com sucesso");
      })
      .catch((error) => {
        const errorMessage =
          error.code === "auth/email-already-in-use"
            ? "Email já cadastrado"
            : "Erro ao cadastrar paciente";
        toast.error(errorMessage);
      });
    setNome("");
    setEmail("");
  };

  const handlePasswordSubmit = (event: any) => {
    event.preventDefault();
    if (password === pagePassword) {
      setIsAuthenticated(true);
    } else {
      toast.error("Senha incorreta");
    }
    setPassword("");
  };

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-zinc-900">
            Proteção de Página
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-zinc-900"
              >
                Senha
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-3 py-1.5 rounded-md border-0 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-amber-800 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                onClick={(e) => handlePasswordSubmit(e)}
                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-amber-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800"
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Flower2 className="m-auto h-12 w-12" />
          <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-zinc-900">
            Adicionar novo paciente
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="nome"
                className="block text-sm font-medium leading-6 text-zinc-900"
              >
                Nome do paciente
              </label>
              <div className="mt-2">
                <input
                  id="nome"
                  name="nome"
                  type="nome"
                  required
                  autoComplete="nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="block w-full px-3 py-1.5 rounded-md border-0 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-amber-800 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
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
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-amber-800 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                onClick={signUp}
                disabled={!email}
                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-amber-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800"
              >
                Cadastrar paciente
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </>
  );
}
