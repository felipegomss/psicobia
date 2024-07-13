"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function Agendamento() {
  const [iframeCarregando, setIframeCarregando] = useState(true);

  const handleLoad = () => {
    const timer = setTimeout(() => {
      setIframeCarregando(false);
    }, 1000);

    return () => clearTimeout(timer);
  };
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login");
    },
  });

  return (
    <div className="h-auto my-4 relative">
      <Image
        src={"/assets/booking-bg.jpeg"}
        alt=""
        width={1920}
        height={1080}
      />
      <h2 className="md:absolute scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl md:top-16 md:left-12 md:bg-gradient-text md:bg-clip-text md:text-transparent">
        Reserve seu
        <br /> tempo para
        <br /> cuidar de você.
      </h2>
      <div className="mt-16 md:-translate-y-44 w-11/12 m-auto h-screen flex items-center justify-center">
        {iframeCarregando && (
          <div className="absolute inset-0 flex items-center justify-center bg-zinc-100/5 bg-opacity-50">
            <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        )}
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2kkK7Teuug1rjjTJeuVGkoxhVCdWSnw91csk7gZZ67qAxRdVV3RRUFqis5k3nDXt11i2j_Ispm?gv=true"
          className="w-full h-full border-0 bg-white rounded-xl"
          onLoad={handleLoad}
        ></iframe>
      </div>
    </div>
  );
}

Agendamento.requireAuth = true;
