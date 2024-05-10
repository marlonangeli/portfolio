import "@/styles/globals.css";

import Footer from "@/components/footer";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Particles from "@/components/particles";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marlon Angeli - Portfolio",
  description: "Portfolio de Marlon Angeli",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableColorScheme
          enableSystem
          disableTransitionOnChange
          key={"theme-provider"}
        >
          <Particles
            className="absolute inset-0 pointer-events-none"
            quantity={25}
          />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
