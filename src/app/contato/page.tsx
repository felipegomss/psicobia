"use client";

import BackgroundBlur from "@/components/ui/backgound-blur";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { Instagram, Linkedin, Loader, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { emailLink, whatsappLink } from "@/lib/utils";
import Email from "next-auth/providers/email";
import Social from "@/components/social";

export default function Contato() {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [loading, setLoading] = useState(false);

  function sendEmail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const emailTemplate = `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            padding: 20px;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          .header {
            background-color: #451a03;
            color: #fff;
            padding: 10px;
            text-align: center;
            border-radius: 8px 8px 0 0;
          }
          .content {
            padding: 20px;
            color: #333;
          }
          .footer {
            background-color: #f0f0f0;
            padding: 10px;
            text-align: center;
            border-radius: 0 0 8px 8px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>Novo Contato Recebido</h2>
          </div>
          <div class="content">
            <p><strong>Nome:</strong> ${nome} ${sobrenome}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>WhatsApp:</strong> ${telefone}</p>
            <p><strong>Mensagem:</strong></p>
            <p>${mensagem}</p>
          </div>
          <div class="footer">
            <p>Este email foi gerado automaticamente pelo formulário de contato do site.</p>
          </div>
        </div>
      </body>
    </html>
  `;

    setLoading(true);

    fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "psicobiancavieira@gmail.com",
        subject: `Novo contato recebido pelo site - ${nome} ${sobrenome}`,
        html: emailTemplate,
      }),
    }).then(() => {
      toast.success("Obrigada pelo contato! Já já retorno seu contato.");
      setEmail("");
      setNome("");
      setSobrenome("");
      setTelefone("");
      setMensagem("");
      setLoading(false);
    });
  }

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <BackgroundBlur top="-10rem" left="0" rotate="45deg" />

      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Entre em contato
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Estou aqui para ajudar você. Entre em contato sobre qualquer assunto
          que precisar.
        </p>
      </div>
      <form className="mx-auto mt-6 max-w-xl sm:mt-8" onSubmit={sendEmail}>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <Label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Nome
            </Label>
            <div className="mt-2.5">
              <Input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <Label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Sobrenome
            </Label>
            <div className="mt-2.5">
              <Input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                value={sobrenome}
                onChange={(e) => setSobrenome(e.target.value)}
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <Label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </Label>
            <div className="mt-2.5">
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <Label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              WhatsApp
            </Label>
            <div className="mt-2.5">
              <Input
                id="phone-number"
                name="phone-number"
                type="tel"
                autoComplete="tel"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <Label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Mensagem
            </Label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="flex justify-center items-center w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-amber-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            disabled={loading}
          >
            {loading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Loader />
              </motion.div>
            ) : (
              "Enviar"
            )}{" "}
          </button>
        </div>
      </form>
      <Toaster />

      <div className="space-y-6">
        <p className="mt-16 text-center text-gray-600">
          Você pode entrar em contato diretamente comigo por email, WhatsApp ou
          pelas redes sociais.
        </p>
        <Social />
      </div>
    </div>
  );
}
