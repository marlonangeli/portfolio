import { ModeToggle } from "@/components/mode-toggle";
import { TerminalComponent } from "@/components/terminal";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-3 max-w-screen-xl mx-auto">
      <nav className="flex items-center justify-between w-full mb-10">
        <Link href="/" passHref>
          <span className="ml-2 text-xl font-bold">Marlon Angeli</span>
        </Link>
        <Button type="button" variant="destructive">
          Contato
        </Button>
        <ModeToggle />
      </nav>

      <section className="container mx-auto flex items-center">
        <div className="w-2/3 pr-8">
          <TerminalComponent />
        </div>
        <div className="w-1/3 text-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
            Bem vindo ao meu portfólio! 🚀
          </h1>
          <p>
            O terminal ao lado é interativo, você pode navegar e brincar a
            vontade, será que consegue encontrar meu segredo?
          </p>
          <div className="mt-10 flex justify-center flex-wrap space-x-4">
            <Button type="button" variant="default">
              Contato
            </Button>
            <Button type="button" variant="secondary">
              Baixar CV
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
