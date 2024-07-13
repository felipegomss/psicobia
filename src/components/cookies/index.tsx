"use client";

import { Cookie } from "lucide-react";
import { Toaster } from "../ui/sonner";
import { toast } from "sonner";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Cookies() {
  if (localStorage.getItem("cookies") !== "true")
    setTimeout(() => {
      toast(
        <div className="space-y-4">
          <Cookie />
          <div>
            Utilizamos cookies para oferecer a melhor experiência possível. Ao
            continuar navegando, você concorda com nossa{" "}
            <Link
              href={"/politica-de-privacidade"}
              rel="noopener noreferrer"
              className="text-amber-800 hover:underline"
            >
              política de privacidade
            </Link>
            .
          </div>
          <div className="flex justify-end">
            <Button
              onClick={() => {
                localStorage.setItem("cookies", "true");
                toast.dismiss();
              }}
            >
              Aceito
            </Button>
          </div>
        </div>,
        {
          duration: 1000000,
        }
      );
    });

  return <Toaster />;
}
