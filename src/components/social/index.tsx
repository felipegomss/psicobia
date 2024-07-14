import { emailLink, whatsappLink } from "@/lib/utils";
import { Instagram, Mail, Phone } from "lucide-react";
import React from "react";

export default function Social() {
  return (
    <div className="flex justify-center space-x-6">
      <a
        href={emailLink}
        target="_blank"
        className="text-gray-600 hover:text-gray-900"
      >
        <span className="sr-only">Email</span>
        <Mail className="h-6 w-6" />
      </a>
      <a
        href={whatsappLink}
        target="_blank"
        className="text-gray-600 hover:text-gray-900"
      >
        <span className="sr-only">WhatsApp</span>
        <Phone className="h-6 w-6" />
      </a>
      <a
        href="https://instagram.com/psicobiia"
        target="_blank"
        className="text-gray-600 hover:text-gray-900"
      >
        <span className="sr-only">Instagram</span>
        <Instagram className="h-6 w-6" />
      </a>
    </div>
  );
}
