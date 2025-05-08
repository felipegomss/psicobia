"use client";

import { Calendar, Flower2, MenuIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex flex-col justify-between w-full">
      <div className="flex items-center justify-between h-16">
        <Link href="/" className="flex items-center" prefetch={false}>
          <Image
            src={"/assets/horizontal.png"}
            alt=""
            height={250}
            width={250}
          />
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
        href="/contato"
        className="text-sm font-medium hover:underline"
        prefetch={false}
      >
        Contato
      </Link>

      <Button variant={"outline"} onClick={() => router.push("/agendamento")}>
        <Calendar className="mr-2 h-4 w-4" /> Agendar um encontro
      </Button>
    </div>
  );
};

export default Header;
