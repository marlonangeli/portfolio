"use client";

import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import Terminal, {
  ColorMode,
  TerminalInput,
  TerminalOutput,
} from "react-terminal-ui";

import DuolingoIcon from "@/assets/duolingo.png";
import Image from "next/image";
import { getDuolingoData } from "@/lib/duolingo";
import { createUniqueKey as key } from "@/lib/utils";
import { useTheme } from "next-themes";

export const TerminalComponent = () => {
  const { theme } = useTheme();
  const [output, setOutput] = useState<JSX.Element[]>([]);
  const [error, setError] = useState<{ count: number; message: string | null }>(
    { count: 0, message: null }
  );

  const memoizedGetDuolingoStreak = useMemo(async () => {
    try {
      const data = await getDuolingoData();
      return data.streak;
    } catch (err) {
      console.error(err);
      return "Erro ao obter os dados do Duolingo :(";
    }
  }, []);

  useLayoutEffect(() => setOutput(initialOutput()), []);

  const prompt = "user@portfolio:~$";
  const maxErrorCount = 2;
  const commandMap = {
    help: "exibe os comandos disponíveis",
    clear: "limpa a tela do terminal",
    skills: "exibe as minhas habilidades",
    projects: "exibe os meus projetos",
    contact: "exibe as minhas redes sociais",
    welcome: "exibe a mensagem de boas vindas",
    duolingo:
      "exibe a ofensiva no Duolingo, é possível buscar por outro usuário passando o username como parâmetro",
    secret: "dica para encontrar o segredo",
  };

  const initialOutput = () => {
    const initial = [
      "Olá, eu sou",
      AnsiName(),
      "um desenvolvedor de software Back-end 🚀",
      "",
      "Bem vindo ao meu portfólio! Digite 'help' para ver os comandos disponíveis",
    ];

    return initial.map((line) => wrapInTerminalOutput(line));
  };

  const wrapInTerminalOutput = (line: string | JSX.Element) => {
    return (
      <TerminalOutput key={key()}>
        <div className="">{line}</div>
      </TerminalOutput>
    );
  };

  const handleInput = (input: string) => {
    const [cmd, ...parameters] = input.trim().split(" ");

    function updateTerminalOutput(newOutput: (JSX.Element | string)[]) {
      const command = [
        <TerminalInput key={key()} prompt={prompt}>
          {cmd}
        </TerminalInput>,
      ];
      const mappedOutput = newOutput.map((line) => wrapInTerminalOutput(line));
      setOutput([...output, ...command, ...mappedOutput]);
    }

    switch (cmd) {
      case "help":
        const helpOutput = Object.entries(commandMap).map(
          ([cmd, description]) =>
            `${cmd}${cmd.length >= 8 ? "\t" : "\t\t"}- ${description}`
        );

        updateTerminalOutput(helpOutput);
        break;

      case "clear":
        setOutput([]);
        break;

      case "skills":
        updateTerminalOutput([
          <div key={key()} className="text-white">
            <h3 className="text-lg font-bold mb-2">🚀 Habilidades</h3>

            <div className="mb-4">
              <span className="font-bold">Back-end:</span>
              <ul className="list-disc list-inside ml-4">
                <li>⚙️ Node.js</li>
                <li>🐍 Python</li>
                <li>🤖 C# (.NET)</li>
                <li>🐚 Shell Script</li>
                <li>🐧 Linux</li>
              </ul>
            </div>

            <div className="mb-4">
              <span className="font-bold">Frontend:</span>
              <ul className="list-disc list-inside ml-4">
                <li>⚛️ React</li>
                <li>⏭️ Next.js</li>
                <li>📝 HTML</li>
                <li>🎨 Tailwind CSS</li>
                <li>🔍 JavaScript</li>
                <li>📘 TypeScript</li>
              </ul>
            </div>

            <div className="mb-4">
              <span className="font-bold">DevOps:</span>
              <ul className="list-disc list-inside ml-4">
                <li>🔗 Git</li>
                <li>🐧 Linux</li>
                <li>🐚 Shell Script</li>
                <li>🐳 Docker</li>
                <li>🔄 Redis</li>
              </ul>
            </div>

            <div>
              <span className="font-bold">Banco de Dados:</span>
              <ul className="list-disc list-inside ml-4">
                <li>🗄️ SQL Server</li>
                <li>🐘 PostgreSQL</li>
                <li>🔍 Elasticsearch</li>
              </ul>
            </div>
          </div>,
        ]);
        break;

      case "projects":
        updateTerminalOutput([
          <ul key={key()}>
            <li>
              <a
                href="https://duolingo-tracker.marlonangeli.com.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Duolingo Streak Tracker
              </a>
            </li>
            <li>
              <a
                href="https://github.com/marlonangeli/clone-tabnews"
                target="_blank"
                rel="noopener noreferrer"
              >
                Clone TabNews
              </a>
            </li>
            <li>
              <a
                href="https://github.com/marlonangeli/topx"
                target="_blank"
                rel="noopener noreferrer"
              >
                TopX
              </a>
            </li>
          </ul>,
        ]);
        break;

      case "contact":
        updateTerminalOutput([
          "Você pode me encontrar em:",
          "Linkedin...",
          "GitHub...",
        ]);
        break;

      case "welcome":
        updateTerminalOutput(initialOutput());
        break;

      case "duolingo":
        memoizedGetDuolingoStreak.then((response) => {
          if (typeof response === "number") {
            updateTerminalOutput([
              <div key={key()} className="text-white">
                <div className="mb-2">
                  🌐 A ofensiva do Duolingo é uma conquista importante pra mim!
                  Você pode verificar em:
                  <a
                    href="https://www.duolingo.com/profile/marlonangeli"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 ml-1"
                    key={key()}
                  >
                    https://www.duolingo.com/profile/marlonangeli
                  </a>
                </div>
                <div className="mb-2">
                  <Image
                    src={DuolingoIcon}
                    className="w-6 h-6 inline mr-1"
                    width={128}
                    height={128}
                    alt="Duolingo"
                  />
                  Minha ofensiva atual é de <strong>{response}</strong> dias 🔥
                </div>
              </div>,
            ]);
          } else {
            updateTerminalOutput([
              <span key={key()} className="text-red-600">
                {response}
              </span>,
            ]);
          }
        });
        break;

      case "secret":
        updateTerminalOutput([
          "Ainda estou implementando essa funcionalidade...",
        ]);
        break;

      case "":
        updateTerminalOutput([]);
        break;

      default:
        setError({
          count: error.count <= maxErrorCount ? error.count + 1 : 0,
          message:
            error.count === maxErrorCount
              ? `Digite 'help' para ver os comandos disponíveis`
              : null,
        });
        updateTerminalOutput([
          <div className="text-red-600 text-base leading-5" key={key()}>
            {`Comando '${cmd}' não encontrado`}
            {error.message && (
              <span>
                <br />
                {error.message}
              </span>
            )}
            ,
          </div>,
        ]);
        break;
    }
  };

  return (
    <Terminal
      startingInputValue="help"
      prompt={prompt}
      name="Terminal in @portfolio"
      onInput={handleInput}
      colorMode={theme === "light" ? ColorMode.Light : ColorMode.Dark}
      key="terminal"
    >
      {output}
    </Terminal>
  );
};

const AnsiName = () => {
  const ansii = [
    `
  __  __            _             
 |  \\/  |          | |            
 | \\  / | __ _ _ __| | ___  _ __  
 | |\\/| |/ _\` | '__| |/ _ \\| '_ \\ 
 | |  | | (_| | |  | | (_) | | | |
 |_|  |_|\\__,_|_|  |_|\\___/|_| |_|
                            _ _ 
     /\\                    | (_)
    /  \\   _ __   __ _  ___| |_ 
   / /\\ \\ | '_ \\ / _\` |/ _ \\ | |
  / ____ \\| | | | (_| |  __/ | |
 /_/    \\_\\_| |_|\\__, |\\___|_|_|
                  __/ |         
                 |___/          
`,

    `
  __  __            _                                         _ _ 
 |  \\/  |          | |                 /\\                    | (_)
 | \\  / | __ _ _ __| | ___  _ __      /  \\   _ __   __ _  ___| |_ 
 | |\\/| |/ _\\ | '__| |/ _ \\| '_ \\    / /\\ \\ | '_ \\ / _\\ |/ _ \\ | |
 | |  | | (_| | |  | | (_) | | | |  / ____ \\| | | | (_| |  __/ | |
 |_|  |_|\\__,_|_|  |_|\\___/|_| |_| /_/    \\_\\_| |_|\\__, |\\___|_|_|
                                                    __/ |         
                                                   |___/          

`,
  ];

  return (
    <div>
      <pre className="md:hidden">{ansii[0]}</pre>
      <pre className="hidden md:block">{ansii[1]}</pre>
    </div>
  );
};
