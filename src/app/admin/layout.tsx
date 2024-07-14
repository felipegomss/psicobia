"use client";

import { doc, getDoc, getFirestore } from "firebase/firestore";
import { app } from "@/lib/firebase";
import { signOut, useSession } from "next-auth/react";
import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import MockAdmin from "@/components/mock-admin";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const db = getFirestore(app);
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login");
    },
  });

  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdminStatus = async () => {
      if (session?.user?.email) {
        const userId = session.user.email;
        const docRef = doc(db, "usuarios", userId);
        try {
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const userData = docSnap.data();
            setIsAdmin(userData.isAdmin || false);
          } else {
            setIsAdmin(false);
          }

          setLoading(false);
        } catch (error) {
          console.error("Erro ao buscar dados do usuário:", error);
          setIsAdmin(false);
        }
      } else {
        setIsAdmin(false);
      }
    };

    fetchAdminStatus();
  }, [session, db]);

  if (loading) {
    return (
      <div className="h-screen inset-0 flex items-center justify-center bg-zinc-100/5 bg-opacity-50">
        <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="h-screen overflow-hidden relative p-20">
        <div className="absolute top-0 bottom-0 left-0 right-0 backdrop-blur-md bg-white/30">
          <AlertDialog open={true}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Ops! Acesso Restrito</AlertDialogTitle>
                <AlertDialogDescription>
                  Parece que você tentou acessar uma página restrita para
                  administradores. Você pode tentar entrar com outra conta ou
                  fazer um agendamento.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction onClick={() => signOut()}>
                  Entrar com outra conta
                </AlertDialogAction>
                <AlertDialogAction onClick={() => router.push("/agendamento")}>
                  Fazer agendamento
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <MockAdmin />
      </div>
    );
  }

  return <div className="min-h-screen">{children}</div>;
}

AdminLayout.requireAuth = true;
