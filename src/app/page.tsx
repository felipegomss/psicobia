"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Calendar, Eye, Star, Unlock, XIcon } from "lucide-react";
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
import Link from "next/link";
import Articles from "@/components/articles";
import { bianca_114_base64 } from "../../public/assets/BIANCA_114_base64";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const handleWhatsAppClick = () => {
    window.open("https://api.whatsapp.com/send?phone=5571996755965", "_blank");
  };

  return (
    <main className="flex min-h-screen flex-col my-5 gap-8 ">
      <div className="py-16">
        <h1 className="scroll-m-20 text-4xl font-light tracking-tight lg:text-5xl">
          BIANCA DA SILVA VIEIRA
        </h1>
        <p className="text-xl text-muted-foreground">
          Psicologia Fenomenológica Existencial
        </p>
        <p className="text-sm text-muted-foreground">CRP XX/XXXXX</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 py-2">
        <div>
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Como posso te ajudar?
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
            doloribus atque quas ipsam at dignissimos, earum nemo quisquam iure
            incidunt vitae fuga deleniti, veritatis tenetur facere? Praesentium,
            sed nobis accusamus quo eius minus dolorem quam. Repellat voluptate
            magnam ipsa laboriosam in, excepturi libero aperiam assumenda nulla
            incidunt possimus harum dicta? Aliquid ullam voluptatum nulla nisi
            dicta? Ea accusantium voluptatibus ad beatae qui dignissimos cumque
            nulla est, commodi unde amet deserunt dolorem voluptas provident,
            maxime pariatur? Dolores neque nam optio nemo perspiciatis
            dignissimos enim dolore omnis sint, animi quas unde tenetur
            inventore, repellendus placeat ullam sunt quasi quibusdam ea modi a
            alias laboriosam! Quae, repellat ratione explicabo enim, nesciunt
            itaque vel obcaecati maxime praesentium eum in nostrum cum quisquam
            aperiam adipisci quos voluptas fugiat suscipit nulla delectus labore
            repellendus commodi! Est, facilis alias eum velit saepe accusamus
            commodi totam voluptatum iusto expedita exercitationem laborum
            cupiditate asperiores voluptate ipsa a doloremque neque, repudiandae
            possimus sunt, beatae rerum eos. Eum assumenda ex nihil vitae
            reiciendis, ipsam nisi autem illo provident doloremque enim maiores
            quo. Laborum ad suscipit tempore repellendus qui quidem eaque
            corporis nihil quibusdam, voluptatibus et ut? Quas voluptatibus
            ipsum minima exercitationem quod architecto dolores adipisci, cum
            modi voluptas dignissimos eveniet veniam nesciunt sunt reiciendis ad
            fuga obcaecati doloremque, vitae, eaque ipsa?
          </p>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="mt-4">
                <Calendar className="mr-2 h-4 w-4" /> Agendar um encontro
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Paciente Novo?</AlertDialogTitle>
                <div className="absolute top-0 right-4">
                  <AlertDialogCancel>
                    <XIcon className="h-3 w-3 text-gray-500" />
                  </AlertDialogCancel>
                </div>
                <AlertDialogDescription>
                  Parece que você é um paciente novo! Entre em contato pelo
                  WhatsApp para agendar sua primeira consulta. Se você já possui
                  uma conta, pode acessar a plataforma de agendamento
                  normalmente.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="gap-2">
                <Link href="/agendamento">
                  <AlertDialogAction className="w-full">
                    Ir para Agendamento
                  </AlertDialogAction>
                </Link>
                <AlertDialogAction asChild>
                  <Button variant="secondary" onClick={handleWhatsAppClick}>
                    WhatsApp
                  </Button>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <AspectRatio
          ratio={9 / 16}
          className="relative rounded-full border-8 border-primary bg-amber-800"
        >
          <Image
            src="/assets/BIANCA_114.JPG"
            className="w-full rounded-full"
            alt=""
            fill
            blurDataURL={bianca_114_base64}
            placeholder="blur"
          />
        </AspectRatio>
      </div>
      <div className="space-y-6">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          A Terapia Fenomenológica Existencial
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <AspectRatio ratio={16 / 9}>
              <Image src={"/assets/diva.jpg"} alt="" fill />
            </AspectRatio>
            <blockquote className="my-6 border-l-2 pl-6 italic">
              “A vida não tem sentido, à priori. Antes de começarmos a viver, a
              vida, em si, não é nada, mas nos cabe dar-lhe sentido, e o valor
              da vida não é outra coisa senão este sentido que escolhemos”
            </blockquote>
          </div>
          <div>
            <p className="leading-7">
              Na terapia fenomenológica existencial, cada indivíduo é convidado
              a explorar sua própria experiência única e significados pessoais.
              Esta abordagem profundamente humanística foca no aqui e agora,
              ajudando a compreender e enfrentar desafios através da reflexão
              autêntica e do diálogo terapêutico.
            </p>
            <p className="leading-7">
              Em um ambiente acolhedor e compassivo, trabalharemos juntos para
              entender suas preocupações e encontrar caminhos para o crescimento
              pessoal. A terapia fenomenológica existencial é uma jornada de
              autodescoberta e autoaceitação, guiada pela sua própria narrativa
              e experiências únicas.
            </p>
            <p className="leading-7">
              A terapia fenomenológica existencial é adequada para aqueles que
              buscam uma abordagem holística e integrativa para lidar com
              questões pessoais, emocionais e existenciais. Se você está pronto
              para iniciar uma jornada de autoconhecimento e crescimento
              pessoal, esta abordagem terapêutica pode ser o próximo passo
              transformador em sua vida.
            </p>
          </div>
        </div>

        <div className="flex justify-evenly">
          <BenefitCard
            icon={<Eye className="w-8 h-8 mb-4" />}
            title="Autoconhecimento Profundo:"
            text="Explore suas experiências e emoções de maneira genuína."
          />

          <BenefitCard
            icon={<Unlock className="w-8 h-8 mb-4" />}
            title="Empoderamento:"
            text="Desenvolva habilidades para lidar com dificuldades de forma mais consciente e eficaz."
          />

          <BenefitCard
            icon={<Star className="w-8 h-8 mb-4" />}
            title="Transformação Pessoal:"
            text="Promova mudanças significativas em sua vida, alinhadas com seus valores e aspirações."
          />
        </div>
      </div>
      <Articles />
    </main>
  );
}

const BenefitCard = ({
  icon,
  title,
  text,
}: {
  icon: JSX.Element;
  title: string;
  text: string;
}) => (
  <Card className="w-[350px]">
    <CardHeader>
      {icon}
      <CardTitle>{title}</CardTitle>
      <CardDescription>{text}</CardDescription>
    </CardHeader>
  </Card>
);
