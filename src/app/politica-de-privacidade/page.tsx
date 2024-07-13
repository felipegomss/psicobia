import { emailLink, whatsappLink } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function PoliticaPrivacidade() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="scroll-m-20 pb-4 text-3xl font-bold text-gray-900">
        Política de Privacidade
      </h2>
      <p className="leading-7 mt-4 text-gray-700">
        Sua privacidade é importante para nós. Nesta política, explicamos como
        coletamos, usamos e protegemos suas informações pessoais.
      </p>
      <p className="leading-7 mt-6 text-gray-700">
        Ao acessar nossos serviços de agendamento de sessões de psicologia, você
        nos fornece as seguintes informações:
      </p>
      <ul className="ml-6 list-disc text-gray-700">
        <li>Email e senha para cadastro/login.</li>
        <li>Nome, email e telefone para agendamento.</li>
      </ul>
      <p className="leading-7 mt-6 text-gray-700">
        Utilizamos essas informações para verificar sua identidade, permitir o
        acesso à área de agendamento e gerenciar suas sessões de psicologia.
        Suas informações são protegidas com medidas de segurança adequadas para
        evitar acessos não autorizados, alterações, divulgações ou destruições.
      </p>
      <p className="leading-7 mt-6 text-gray-700">
        Não compartilhamos suas informações pessoais com terceiros, exceto
        quando exigido por lei.
      </p>
      <p className="leading-7 mt-6 text-gray-700">
        Você tem o direito de acessar, corrigir ou excluir suas informações
        pessoais. Para isso, entre em contato conosco.
      </p>
      <p className="leading-7 mt-6 text-gray-700">
        Podemos atualizar esta política de privacidade periodicamente e
        notificaremos sobre quaisquer mudanças significativas no nosso site.
      </p>
      <p className="leading-7 mt-6 text-gray-700">
        Se tiver alguma dúvida sobre nossa política de privacidade, entre em
        contato conosco:
      </p>
      <ul className="ml-6 list-disc text-gray-700">
        <li>
          Email:{" "}
          <Link
            href={emailLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-800 hover:underline"
          >
            psicobiancaveira@gmail.com
          </Link>
        </li>
        <li>
          WhatsApp:{" "}
          <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-800 hover:underline"
          >
            +55 (71) 99675-5965
          </Link>
        </li>
      </ul>
    </div>
  );
}
