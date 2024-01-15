"use client";

import React, { useState } from "react";
import Terminal, {
  ColorMode,
  TerminalInput,
  TerminalOutput,
} from "react-terminal-ui";
import { createUniqueKey as key } from "@/lib/utils";

export const TerminalComponent = () => {
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
      skills: "mostra as minhas habilidades",
      projects: "mostra os meus projetos",
      contact: "mostra as minhas redes sociais",
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
            <TerminalOutput
              key={key()}
            >{`${cmd} - ${description}`}</TerminalOutput>
          )),
        ]);
        break;
      case "clear":
        setOutput([]);
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
      colorMode={ColorMode.Dark}
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
