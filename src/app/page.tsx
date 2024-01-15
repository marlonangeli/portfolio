import { ModeToggle } from "@/components/mode-toggle";
import { TerminalComponent } from "@/components/terminal";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <nav className="flex items-center justify-between w-full">
        <Link href="/" passHref>
          <span className="ml-2 text-xl font-bold">Marlon Angeli</span>
        </Link>
        <Button type="button" variant="destructive">
          Contato
        </Button>
        <ModeToggle />
      </nav>

      <div className="container mx-auto flex items-center">
        <div className="w-2/3 pr-8">
          <TerminalComponent />
        </div>
        <div className="w-1/3 ">
          <h1 className="">Bem vindo ao meu portfólio!</h1>
          <p>Parágrafo</p>
          <Button type="button" variant="default">
            Botão
          </Button>
        </div>
      </div>
    </main>
  );
}
