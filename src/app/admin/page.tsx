"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Signup from "./signup";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Plus, RefreshCcw } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface Paciente {
  id: string;
  nome: string;
  email: string;
  isAtivo: boolean;
  isAdmin?: boolean;
}

export default function Admin() {
  const [pacientes, setPacientes] = useState<Paciente[]>([]);

  const db = getFirestore();

  const fetchPacientes = async () => {
    const pacientesCollection = collection(db, "usuarios");

    const pacientesSnapshot = await getDocs(pacientesCollection);

    const pacientesData = pacientesSnapshot.docs
      .map((doc) => ({ id: doc.id, ...doc.data() } as Paciente))
      .filter((paciente) => !paciente.isAdmin);
    setPacientes(pacientesData);
  };

  useEffect(() => {
    fetchPacientes();
  }, [db, fetchPacientes]);

  async function handleAtiveChange(id: string) {
    const user = pacientes.find((paciente) => paciente.id === id);
    if (user) {
      const userRef = doc(db, "usuarios", id);
      try {
        await updateDoc(userRef, {
          isAtivo: !user.isAtivo,
        });
        setPacientes((prevPacientes) =>
          prevPacientes.map((paciente) =>
            paciente.id === id
              ? { ...paciente, isAtivo: !paciente.isAtivo }
              : paciente
          )
        );
        toast.success(
          "A conta de " +
            user.nome +
            " foi " +
            (user.isAtivo ? "desativada" : "ativada")
        );
      } catch (error) {
        console.error("Erro ao atualizar documento: ", error);
        toast.error("Erro ao atualizar paciente");
      }
    } else {
      toast.error("Usuário não encontrado");
    }
  }

  return (
    <div>
      <ul role="list" className="divide-y divide-gray-100">
        <li className="flex justify-between items-center gap-x-6 py-5">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Pacientes{" "}
          </h3>
          <div className="space-x-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">
                  <RefreshCcw className="mr-2 h-4 w-4" />
                  Trocar conta
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Esta ação irá deslogar você da conta atual.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancelar</AlertDialogCancel>
                  <AlertDialogAction onClick={() => signOut()}>
                    Continuar
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Plus className="mr-2 h-4 w-4" />
                  Paciente
                </Button>
              </DialogTrigger>
              <Signup />
            </Dialog>
          </div>
        </li>
        {pacientes.length > 0 &&
          pacientes.map((paciente) => (
            <li key={paciente.id} className="flex justify-between gap-x-6 py-5">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {paciente.nome}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {paciente.email}
                </p>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <div className="flex items-center space-x-2">
                  <Label htmlFor={paciente.id}>Ativo?</Label>
                  <Switch
                    id={paciente.id}
                    checked={paciente.isAtivo}
                    onCheckedChange={() => handleAtiveChange(paciente.id)}
                  />
                </div>
              </div>
            </li>
          ))}
      </ul>
      <Toaster />
    </div>
  );
}
