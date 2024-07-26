"use client";
import { Button } from "@/components/ui/button";
import { app } from "@/lib/firebase";
import { whatsappLink } from "@/lib/utils";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { Annoyed, ChevronRight, Frown, Info, Phone } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { act, useEffect, useState } from "react";

interface User {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
}

export default function Agendamento() {
  const router = useRouter();
  const db = getFirestore(app);

  const [user, setUser] = useState<User>();
  const [iframeCarregando, setIframeCarregando] = useState(true);
  const [active, setActive] = useState(true);

  const handleLoad = () => {
    const timer = setTimeout(() => {
      fetchAdminStatus();
      setIframeCarregando(false);
    }, 1000);

    return () => clearTimeout(timer);
  };
  const session = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login");
    },
  });

  const fetchAdminStatus = async () => {
    if (session?.data?.user?.email) {
      const userEmail = session.data.user.email;
      const q = query(
        collection(db, "usuarios"),
        where("email", "==", userEmail)
      );
      try {
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const userData = querySnapshot.docs[0].data();
          setActive(userData.isAtivo || false);
        } else {
          setActive(false);
        }
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
        setActive(false);
      }
    }
  };

  useEffect(() => {
    setUser(session?.data?.user);
  }, [session]);

  console.log("Usuário ativo?", active);

  return (
    <div className="h-auto my-4 relative">
      <Image
        src="/assets/booking-bg.jpeg"
        alt="Topo de uma árvore com folhas verdes e flores roxas, com um céu azul ao fundo"
        width={1920}
        height={1080}
      />
      <h2 className="md:absolute  scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl md:top-16 md:left-12 md:bg-gradient-text md:bg-clip-text md:text-transparent">
        Reserve seu
        <br /> tempo para
        <br /> cuidar de você.
      </h2>
      <div className="mt-16 md:-translate-y-44 w-11/12 m-auto h-screen bg-white rounded-xl flex flex-col">
        {iframeCarregando && (
          <div className="absolute inset-0 flex items-center justify-center bg-zinc-100/5 bg-opacity-50">
            <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        )}
        {user && active ? (
          <>
            <div className="p-4 flex justify-between items-center">
              <p>Olá, {user.name}! Vamos agendar sua próxima sessão?</p>
              <Button variant="ghost" onClick={() => signOut()}>
                <ChevronRight className="mr-2 h-4 w-4" />
                Sair
              </Button>
            </div>
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2kkK7Teuug1rjjTJeuVGkoxhVCdWSnw91csk7gZZ67qAxRdVV3RRUFqis5k3nDXt11i2j_Ispm?gv=true"
              className="w-full h-full"
              onLoad={handleLoad}
            ></iframe>
            <p className="text-sm text-muted-foreground p-4 flex items-center gap-2">
              <Info /> Para acessar seus agendamentos, acesse seu calendário,
              email ou entre diretamente em contato comigo.
            </p>
          </>
        ) : (
          <div className="relative w-full h-full flex flex-col justify-center items-center gap-4">
            <div className="text-lg font-semibold">Ops! Sinto muito.</div>
            <p>
              Parece que tivemos um problema ao resgatar seus dados.
              <br />
              Se você acredita que isso é um erro, entre em contato comigo.
            </p>
            <div className="space-x-4">
              <Button
                variant="outline"
                onClick={() => window.open(whatsappLink, "_blank")}
              >
                <Phone className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
              <Button onClick={() => signOut()}>
                <ChevronRight className="mr-2 h-4 w-4" />
                Sair
              </Button>
            </div>

            <Annoyed
              stroke="#e4e4e4"
              className="absolute w-full h-1/2 opacity-25 -z-10"
            />
          </div>
        )}
      </div>
    </div>
  );
}

Agendamento.requireAuth = true;
