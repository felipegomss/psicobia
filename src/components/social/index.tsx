import { cn, emailLink, whatsappLink } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Instagram, Mail, Phone } from "lucide-react";

const socialLinkVariants = cva("transition-colors", {
  variants: {
    variant: {
      default: "text-primary hover:text-gray-900",
      footer: "text-white hover:text-gray-900",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface SocialProps extends VariantProps<typeof socialLinkVariants> {
  className?: string;
}

export default function Social({ variant, className }: SocialProps) {
  const linkClass = cn(socialLinkVariants({ variant }));
  return (
    <div className={cn("flex justify-center space-x-6", className)}>
      <a href={emailLink} target="_blank" className={linkClass}>
        <span className="sr-only">Email</span>
        <Mail className="h-6 w-6" />
      </a>
      <a href={whatsappLink} target="_blank" className={linkClass}>
        <span className="sr-only">WhatsApp</span>
        <Phone className="h-6 w-6" />
      </a>
      <a
        href="https://instagram.com/psicobiia"
        target="_blank"
        className={linkClass}
      >
        <span className="sr-only">Instagram</span>
        <Instagram className="h-6 w-6" />
      </a>
    </div>
  );
}
