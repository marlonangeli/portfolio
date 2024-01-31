"use client";

import React, { useState } from "react";
import Terminal, {
  ColorMode,
  TerminalInput,
  TerminalOutput,
} from "react-terminal-ui";

import { getDuolingoData } from "@/lib/duolingo";
import { createUniqueKey as key } from "@/lib/utils";
import { useTheme } from "next-themes";

export const TerminalComponent = () => {
  const { theme } = useTheme();

  const prompt = "user@portfolio:~$";
  const [output, setOutput] = useState([
    <TerminalOutput key={key()}>Olá, eu sou</TerminalOutput>,
    <TerminalOutput key={key()}>{AnsiName}</TerminalOutput>,
    <TerminalOutput key={key()}>
      um desenvolvedor de software Back-end 🚀
    </TerminalOutput>,
    <TerminalOutput key={key()}></TerminalOutput>,
    <TerminalOutput key={key()}>
      Bem vindo ao meu portfólio! Digite &apos;help&apos; para ver os comandos
      disponíveis
    </TerminalOutput>,
  ]);
  const [errorCount, setErrorCount] = useState(0);

  const handleInput = (input: string) => {
    const command = [
      <TerminalInput key={key()} prompt={prompt}>
        {input}
      </TerminalInput>,
    ];

    const commandMap = {
      help: "exibe os comandos disponíveis",
      clear: "limpa a tela do terminal",
      skills: "exibe as minhas habilidades",
      projects: "exibe os meus projetos",
      contact: "exibe as minhas redes sociais",
      welcome: "exibe a mensagem de boas vindas",
      duolingo: "exibe a minha ofensiva no Duolingo",
      secret: "dica para encontrar o segredo",
    };

    let errorMessage = null;
    const maxErrorCount = 2;
    const incrementErrorCount = () =>
      setErrorCount(errorCount < maxErrorCount ? errorCount + 1 : 0);

    switch (input) {
      case "help":
        setOutput([
          ...output,
          ...command,
          ...Object.entries(commandMap).map(([cmd, description]) => (
            <TerminalOutput key={key()}>{`${cmd}${
              cmd.length >= 8 ? "\t" : "\t\t"
            }- ${description}`}</TerminalOutput>
          )),
        ]);
        break;

      case "clear":
        setOutput([]);
        break;

      case "skills":
        setOutput([
          ...output,
          ...command,
          <TerminalOutput key={key()}>
            <ul>
              <li>Node.js</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>PostgreSQL</li>
              <li>Git</li>
              <li>Linux</li>
              <li>Shell Script</li>
              <li>Python</li>
              <li>C#</li>
              <li>.NET</li>
            </ul>
          </TerminalOutput>,
        ]);
        break;

      case "projects":
        setOutput([
          ...output,
          ...command,
          <TerminalOutput key={key()}>
            <ul>
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
            </ul>
          </TerminalOutput>,
        ]);
        break;

      case "duolingo":
        const streak = getDuolingoData()
          .then((data) => {
            console.log(data.streak);
            return data.streak;
          })
          .catch((err) => {
            console.error(err);
            return "Erro ao obter os dados do Duolingo";
          });

        streak.then((streak) =>
          setOutput([
            ...output,
            ...command,
            <TerminalOutput key={key()}>
              A ofensiva do Duolingo é uma conquista importante pra mim, você
              pode verificar em:
            </TerminalOutput>,
            <TerminalOutput key={key()}>
              <a
                href="https://www.duolingo.com/profile/marlonangeli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400"
              >
                https://www.duolingo.com/profile/marlonangeli
              </a>
            </TerminalOutput>,
            <TerminalOutput key={key()}>
              <span>
                Minha ofensiva atual é de <strong>{streak}</strong> dias 🔥
                <br />
              </span>
            </TerminalOutput>,
          ])
        );
        break;

      case "":
        setOutput([...output, ...command]);
        break;
      default:
        errorMessage =
          errorCount == maxErrorCount
            ? `Digite 'help' para ver os comandos disponíveis`
            : null;
        incrementErrorCount();
        setOutput([
          ...output,
          ...command,
          <div className="text-red-600" key={key()}>
            <TerminalOutput>
              <span>{`Comando '${input}' não encontrado`}</span>
            </TerminalOutput>
            {errorMessage && <TerminalOutput>{errorMessage}</TerminalOutput>}
          </div>,
        ]);
    }
  };

  return (
    <Terminal
      startingInputValue="help"
      prompt={prompt}
      name="Terminal in @portfolio"
      onInput={handleInput}
      colorMode={
        theme === "dark" || theme === "system"
          ? ColorMode.Dark
          : ColorMode.Light
      }
      key="terminal"
    >
      <TerminalOutput>
        <div className="text-wrap">{output}</div>
      </TerminalOutput>
    </Terminal>
  );
};

const AnsiName = `
  __  __            _                                         _ _ 
 |  \\/  |          | |                 /\\                    | (_)
 | \\  / | __ _ _ __| | ___  _ __      /  \\   _ __   __ _  ___| |_ 
 | |\\/| |/ _\\ | '__| |/ _ \\| '_ \\    / /\\ \\ | '_ \\ / _\\ |/ _ \\ | |
 | |  | | (_| | |  | | (_) | | | |  / ____ \\| | | | (_| |  __/ | |
 |_|  |_|\\__,_|_|  |_|\\___/|_| |_| /_/    \\_\\_| |_|\\__, |\\___|_|_|
                                                    __/ |         
                                                   |___/          

`;
