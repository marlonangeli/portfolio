import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  VercelLogoIcon,
} from "@radix-ui/react-icons";

import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-gray-800 text-white">
      <footer className="flex flex-col md:flex-row items-center justify-between py-6 px-4 md:px-6 space-y-4 md:space-y-0">
        <div className="flex items-center justify-center md:justify-start space-x-4">
          <Link
            className="text-gray-300 hover:text-white"
            href="https://github.com/marlonangeli"
          >
            <GitHubLogoIcon className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            className="text-gray-300 hover:text-white"
            href="https://www.linkedin.com/in/marlonangeli/"
          >
            <LinkedInLogoIcon className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            className="text-gray-300 hover:text-white"
            href="mailto:iam@marlonangeli.com.br"
          >
            <EnvelopeClosedIcon className="h-6 w-6" />
            <span className="sr-only">E-mail</span>
          </Link>
        </div>

        <div className="flex items-center justify-center">
          <p className="mt-2 text-center text-xs">
            © 2024 Marlon Angeli. Todos os direitos reservados.
          </p>
        </div>

        <div className="flex flex-col items-center md:flex-row md:justify-end">
          <div className="flex items-center justify-center md:justify-end lg:mr-1">
            <p className="text-center md:text-right text-sm">
              Feito com <span className="text-red-500">{`❤\u{fe0f}`}</span>
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-end space-x-2 mt-2 md:mt-0">
            <p className="text-center md:text-right text-sm">Hospedado em</p>
            <Link
              className="text-gray-300 hover:text-white"
              href="https://vercel.com"
            >
              <VercelLogoIcon className="h-6 w-6" />
              <span className="sr-only">Vercel</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
