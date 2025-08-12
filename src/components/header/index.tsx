"use client";

import { whatsappLink } from "@/lib/utils";
import { Calendar, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const Header = () => {
  return (
    <header className="flex flex-col justify-between w-full">
      <div className="flex items-center justify-between h-16">
        <Link href="/" className="flex items-center" prefetch={false}>
          <Image
            src={"/assets/logo.png"}
            alt="Bianca Vieira"
            width={250}
            height={250}
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
  const handleWhatsAppClick = () => {
    window.open(whatsappLink, "_blank");
  };

  const router = useRouter();

  return (
    <div className="flex md:flex-row md:items-center flex-col items-start gap-6 ">
      <Button
        onClick={() => router.push("/")}
        className="text-sm font-medium hover:underline"
        variant={"link"}
      >
        Página inicial
      </Button>

      <Button
        onClick={() => router.push("/contato")}
        className="text-sm font-medium hover:underline"
        variant={"link"}
      >
        Contato
      </Button>

      <Button variant={"default"} onClick={handleWhatsAppClick}>
        <Calendar className="mr-2 h-4 w-4" /> Agendar um encontro
      </Button>
    </div>
  );
};

export default Header;
