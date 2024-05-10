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

import { cn } from "@/lib/utils";
import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  preload: true,
});

export const Navbar = () => {
  const navMenuStyle = navigationMenuTriggerStyle();

  const components: { title: string; href: string; icon: ReactNode }[] = [
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/marlonangeli/",
      icon: <LinkedInLogoIcon />,
    },
    {
      title: "GitHub",
      href: "https://github.com/marlonangeli/",
      icon: <GitHubLogoIcon />,
    },
    {
      title: "E-mail",
      href: "mailto:iam@marlonangeli.com.br",
      icon: <EnvelopeClosedIcon />,
    },
  ];

  return (
    <nav className="flex items-center justify-between w-full mb-10 mx-auto">
      <Link href="/" passHref>
        <span className="text-xl font-bold flex transition-all transform hover:scale-105 filter hover:brightness-110">
          <p className="mr-2">Marlon</p>
          <p
            className={`${JetBrainsMono.className} font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.600),theme(colors.indigo.300),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.300),theme(colors.indigo.600))] bg-[length:200%_auto] animate-gradient`}
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
              <ul className="grid w-max gap-3 p-2 lg:w-[150px] grid-cols-1 ">
                {components.map((component) => (
                  <ListItemWithIcon
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.icon}
                  </ListItemWithIcon>
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

const ListItemWithIcon = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center space-x-2">
            <span className="h-4 w-4">{children}</span>
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItemWithIcon.displayName = "ListItemWithIcon";
