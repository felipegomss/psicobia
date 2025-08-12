"use client";

import Articles from "@/components/articles";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import BackgroundBlur from "@/components/ui/backgound-blur";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { emailLink, whatsappLink } from "@/lib/utils";
import { Calendar, Eye, Star, Unlock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const handleWhatsAppClick = () => {
    window.open(whatsappLink, "_blank");
  };

  return (
    <main className="flex min-h-screen flex-col my-5 gap-16">
      <BackgroundBlur top="-10rem" left="50%" rotate="30deg" />
      <BackgroundBlur top="50%" left="10%" rotate="25deg" />
      <BackgroundBlur top="60rem" right="50%" rotate="180deg" />
      <BackgroundBlur bottom="50%" left="100%" rotate="17deg" />
      <BackgroundBlur bottom="10rem" left="0%" rotate="30deg" />

      <div className="py-16">
        <h1 className="scroll-m-20 text-4xl font-light tracking-tight lg:text-5xl">
          BIANCA DA SILVA VIEIRA
        </h1>
        <p className="text-xl text-muted-foreground">Psicóloga clínica</p>
        <p className="text-sm text-muted-foreground">CRP 03/31679</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 py-2">
        <div>
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Como posso te ajudar?
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Olá! Me chamo Bianca, sou Psicóloga clínica (CRP 03/31679) e
            pós-graduanda em Psicologia Clínica Fenomenológico-Existencial,
            abordagem pela qual guio meu trabalho. Meu objetivo é proporcionar
            um espaço seguro e uma escuta atenta e cuidadosa, possibilitando que
            você apreenda novos sentidos e significados diante das suas
            vivências, abrindo caminhos para novas perspectivas e modos de se
            posicionar no mundo, sempre respeitando a sua realidade e
            experiência subjetiva. Por meio da psicoterapia online irei te
            auxiliar a se reconhecer no mundo, refletir as suas relações e
            escolhas, tomar posse de si e lidar com as questões existenciais a
            partir de uma atitude ativa e autêntica.
          </p>

          <Button className="mt-4" onClick={handleWhatsAppClick}>
            <Calendar className="mr-2 h-4 w-4" /> Agendar um encontro
          </Button>
        </div>
        <AspectRatio ratio={1} className="relative w-full">
          <Image
            src="/assets/bianca-hero.png"
            alt="Psicóloga Bianca, com cabelo liso nos ombros, sorrindo e segurando um livro com o título 'Psicologia'"
            fill
            className="w-full h-auto object-cover object-top"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, black 72%, transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, black 72%, transparent 100%)",
            }}
            placeholder="empty"
            priority
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
              <Image
                src={"/assets/diva.jpg"}
                alt="Sala aconchegante com uma poltrona marrom em primeiro plano, um piano e plantas ao fundo"
                fill
              />
            </AspectRatio>
            <blockquote className="my-6 border-l-2 pl-6 italic">
              “A vida não tem sentido, à priori. Antes de começarmos a viver, a
              vida, em si, não é nada, mas nos cabe dar-lhe sentido, e o valor
              da vida não é outra coisa senão este sentido que escolhemos.”
              <footer className="mt-2">
                <cite>Jean-Paul Sartre</cite>
              </footer>
            </blockquote>
          </div>
          <div>
            <p className="leading-7">
              A psicoterapia fenomenológico-existencial enfatiza a singularidade
              do sujeito, a relação terapêutica horizontal, a autenticidade e
              potencialidade do/a paciente, e a busca pelo sentido e significado
              de suas vidas.
            </p>
            <strong className="leading-7">
              Em que aspectos a fenomenologia existencial se concentra?
            </strong>
            <p className="leading-7">
              Foco na experiência vivida e seus significados. Liberdade e
              responsabilidade do sujeito. Angústia diante da liberdade, da
              finitude e das situações de sofrimento psíquico. A capacidade de
              fazer escolhas, discernir seus significados e repensá-las. O
              propósito e a direção que a pessoa dá à própria vida. Consciência
              do tempo como uma dimensão existencial, refletindo sobre o
              passado, o presente e as possibilidades futuras. Confronto com a
              mortalidade e o limite temporal da existência, reconhecendo a
              morte como parte essencial da vida. Compreensão do propósito e da
              direção que o indivíduo dá à própria vida, explorando desejos e
              significados que guiam as experiências.
            </p>
          </div>
        </div>

        <div className="flex md:flex-row flex-col md:gap-0 gap-3 justify-between">
          <BenefitCard
            icon={<Eye className="w-8 h-8 mb-4" />}
            title="Sentido da vida:"
            text="a busca pelo seu propósito e significado individual diante da sua
existência."
          />

          <BenefitCard
            icon={<Unlock className="w-8 h-8 mb-4" />}
            title="Compreensão de si:"
            text="perceber-se no seu contexto, reconhecer a própria identidade,
emoções e escolhas, ampliando a sua visão de si e do mundo."
          />

          <BenefitCard
            icon={<Star className="w-8 h-8 mb-4" />}
            title="Relação terapêutica horizontal:"
            text="com um vínculo colaborativo exploraremos juntos,
sem hierarquia, a sua experiência vivida."
          />
        </div>
      </div>
      <Articles />
      <div className="space-y-6">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Perguntas Frequentes
        </h3>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="como-funcionam-as-sessoes">
            <AccordionTrigger>Como funcionam as sessões?</AccordionTrigger>
            <AccordionContent>
              Durante as sessões utilizo a abordagem fenomenológico-existencial,
              centrada na experiência vivida do paciente e a partir de uma
              relação terapêutica acolhedora.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="atendimento-por-convenio">
            <AccordionTrigger>Aceita plano de saúde?</AccordionTrigger>
            <AccordionContent>
              Atendo tanto de forma particular quanto pelo Zenklub, com
              cobertura de planos de saúde e benefícios corporativos, conforme a
              elegibilidade. Caso escolha o atendimento particular, é possível
              solicitar reembolso diretamente ao seu convênio. Posso orientá-lo
              sobre as condições, valores e regras, mas recomendo também
              confirmar diretamente com sua operadora.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="como-agendar-consulta">
            <AccordionTrigger>
              Como posso agendar uma consulta?
            </AccordionTrigger>
            <AccordionContent>
              Para agendar sua primeira consulta, entre em contato pelo{" "}
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                WhatsApp
              </Link>{" "}
              ou{" "}
              <Link
                href={emailLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                email
              </Link>
              . Responderei em breve com as orientações iniciais.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="preparar-para-atendimento-online">
            <AccordionTrigger>
              Como se preparar para o atendimento online?
            </AccordionTrigger>
            <AccordionContent>
              Para um atendimento online eficaz, escolha um ambiente tranquilo e
              privado. Certifique-se de ter uma boa conexão à internet e esteja
              pronto para se concentrar completamente na sua sessão.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="abordagem-terapeutica">
            <AccordionTrigger>
              Qual é a abordagem terapêutica utilizada?
            </AccordionTrigger>
            <AccordionContent>
              Utilizo uma abordagem fenomenológica existencial humanista,
              centrada na sua experiência pessoal e no seu desenvolvimento
              individual.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="como-sao-as-sessoes">
            <AccordionTrigger>
              Como são as sessões de terapia fenomenológica existencial?
            </AccordionTrigger>
            <AccordionContent>
              Nas sessões vou te auxiliar a se reconhecer no mundo, refletir as
              suas relações e escolhas, tomar posse de si e lidar com as
              questões existenciais a partir de uma atitude ativa e autêntica.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="duvidas-adicionais">
            <AccordionTrigger>Mais alguma dúvida?</AccordionTrigger>
            <AccordionContent>
              Para qualquer outra questão, sinta-se à vontade para entrar em
              contato diretamente pelo{" "}
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                WhatsApp
              </Link>
              . Estou aqui para ajudar!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
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
