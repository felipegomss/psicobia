"use client";

import { Flower2, MenuIcon } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { useRouter } from "next/navigation";

const Header = () => {
  return (
    <header className="flex flex-col justify-between w-full">
      <div className="flex items-center justify-between h-16">
        <Link href="/" className="flex items-center" prefetch={false}>
          <Flower2 className="h-10 w-10" />
          <span className="leading-none">
            Bianca
            <br />
            Vieira
          </span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <ListLinks />
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div>
              <ListLinks />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

const ListLinks = () => {
  const session = useSession();
  const router = useRouter();

  return (
    <div className="flex md:flex-row md:items-center flex-col items-start gap-6 ">
      <Link
        href="/"
        className="text-sm font-medium hover:underline"
        prefetch={false}
      >
        Página inicial
      </Link>
      <Link
        href="/"
        className="text-sm font-medium hover:underline"
        prefetch={false}
      >
        Quem sou?
      </Link>
      <Link
        href="/agendamento"
        className="text-sm font-medium hover:underline"
        prefetch={false}
      >
        Agendar encontro
      </Link>

      <Link
        href="/"
        className="text-sm font-medium hover:underline"
        prefetch={false}
      >
        Contato
      </Link>
      {session?.status !== "authenticated" ? (
        <Button
          // variant={"primary"}
          onClick={() => router.push("/login")}
          className="text-sm font-medium hover:underline"
        >
          Entrar
        </Button>
      ) : (
        <Button variant={"outline"} onClick={() => signOut()}>
          Sair
        </Button>
      )}
    </div>
  );
};

export default Header;
