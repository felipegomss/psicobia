import React from "react";
import Social from "../social";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F3EEEA] p-4 md:p-6 xl:p-8">
      <div className="max-w-7xl m-auto space-y-6">
        <div className=" md:flex md:items-center md:justify-between ">
          <ul className="flex items-center flex-wrap mb-6 md:mb-0">
            <li>
              <Link
                href="/politica-de-privacidade"
                className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6"
              >
                Politica de privacidade
              </Link>
            </li>

            <li>
              <Link
                href="/agendamento"
                className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6"
              >
                Agendar
              </Link>
            </li>
            <li>
              <Link
                href="/contato"
                className="text-sm font-normal text-gray-500 hover:underline"
              >
                Contato
              </Link>
            </li>
          </ul>
          <Social />
        </div>
        <div>
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Bianca Vieira - CRP XX/XXXXX | Ideias
            transformadas em código por{" "}
            <Link
              href="https://felipegomes.me"
              target="_blank"
              className="text-primary hover:underline"
            >
              Felipe Gomes
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
