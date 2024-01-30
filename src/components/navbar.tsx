"use client";

import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import React, { ReactNode } from "react";

import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { cn } from "@/lib/utils";

const JetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const Navbar = () => {
  const navMenuStyle = navigationMenuTriggerStyle();

  const components: { title: string; href: string; icon: ReactNode }[] = [
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/marlonangeli/",
      icon: <LinkedInLogoIcon className="h-4 w-4 inline-grid" />,
    },
    {
      title: "GitHub",
      href: "https://github.com/marlonangeli/",
      icon: <GitHubLogoIcon className="h-4 w-4 inline-grid" />,
    },
    {
      title: "E-mail",
      href: "mailto:iam@marlonangeli.com.br",
      icon: <EnvelopeClosedIcon className="h-4 w-4 inline-grid" />,
    },
  ];

  return (
    <nav className="flex items-center justify-between w-full mb-10 mx-auto">
      <Link href="/" passHref>
        <span className="text-xl font-bold flex transition-all transform hover:scale-105 filter hover:brightness-110">
          <p className="mr-2">Marlon</p>
          <p
            className={`${JetBrainsMono.className} font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient`}
          >
            Angeli
          </p>
        </span>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="#sobre" className={navMenuStyle}>
              Sobre
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#projetos" className={navMenuStyle}>
              Projetos
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#experiencias" className={navMenuStyle}>
              Experiências
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Contato</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col p-1  mx-0 min-w-full max-w-full">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    href={component.href}
                    className="w-full text-left space-x-2"
                  >
                    <span>{component.icon}</span>
                    <span>{component.title}</span>
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <ModeToggle />
    </nav>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          <div className="text-sm font-medium leading-none">{children}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
