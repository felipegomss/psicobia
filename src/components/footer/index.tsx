import Link from "next/link";
import Social from "../social";

export default function Footer() {
  return (
    <footer className="bg-primary p-4 md:p-6 xl:p-8 text-white">
      <div className="max-w-7xl m-auto space-y-6">
        <div className=" md:flex md:items-center md:justify-between ">
          <ul className="flex items-center flex-wrap mb-6 md:mb-0">
            <li>
              <Link
                href="/agendamento"
                className="text-sm font-normal  hover:underline mr-4 md:mr-6"
              >
                Agendar
              </Link>
            </li>
            <li>
              <Link
                href="/contato"
                className="text-sm font-normal  hover:underline"
              >
                Contato
              </Link>
            </li>
          </ul>
          <Social variant="footer" />
        </div>
        <div className="flex flex-col items-center justify-center gap-1 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Bianca Vieira — CRP 03/31679. Todos os
            direitos reservados.
          </p>
          <p className="text-sm">
            Desenvolvido por{" "}
            <Link
              href="https://voidcc.com.br"
              target="_blank"
              className="text-white hover:underline"
            >
              Void Creative Code.
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
