import { Button } from "@/components/ui/button";
import DevelopmentWarning from "@/components/development-warning";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { TerminalComponent } from "@/components/terminal";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-3 max-w-screen-xl mx-auto">
      <Navbar />
      <div className="max-w-lg mx-auto mb-4">
        <DevelopmentWarning />
      </div>
      <section className="flex items-center justify-between">
        <div className="w-2/3 pr-8">
          <TerminalComponent />
        </div>

        <div className="w-1/3 text-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
            Bem vindo ao meu portfólio! 🚀
          </h1>
          <p>
            O terminal ao lado é interativo, você pode navegar e brincar a
            vontade.
          </p>
          <div className="mt-10 flex justify-center flex-wrap space-x-4">
            <Button type="button" variant="default">
              <Link href="mailto:iam@marlonangeli.com.br">Contato</Link>
            </Button>
            <Button type="button" variant="secondary">
              <Link
                href="/Marlon Angeli - Desenvolvedor de Software.pdf"
                rel="noopener noreferrer"
                target="_blank"
                download
              >
                Baixar CV
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
