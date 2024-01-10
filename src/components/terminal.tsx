"use client";

import React from "react";
import Terminal, {
  ColorMode,
  TerminalInput,
  TerminalOutput,
} from "react-terminal-ui";

export const TerminalComponent = () => {
  return (
    <Terminal name="Terminal" colorMode={ColorMode.Dark}>
      <p className="text-green-600">
        <TerminalInput>cat saudação.txt</TerminalInput>
      </p>
      <TerminalOutput>
        <p>
          Bem vindo(a) ao meu portfolio!
          <br />
          <br />
          Eu sou <strong>Marlon Angeli</strong>,
          <br />
          Um Desenvolvedor de Software Backend
          <br />
          <br />
          Logo mais o site estará pronto!
        </p>
      </TerminalOutput>
    </Terminal>
  );
};
