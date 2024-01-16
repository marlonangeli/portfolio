"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { cn } from "@/lib/utils";
import React, { ReactElement } from "react";

export const Navbar = () => {
  const navMenuStyle = navigationMenuTriggerStyle();

  const components: { title: string; href: string }[] = [
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/marlonangeli/",
    },
    {
      title: "GitHub",
      href: "https://github.com/marlonangeli/",
    },
    {
      title: "E-mail",
      href: "mailto:iam@marlonangeli.com.br",
    },
  ];

  return (
    <nav className="flex items-center justify-between w-full mb-10 mx-auto">
      <Link href="/" passHref>
        <span className="text-xl font-bold">Marlon Angeli</span>
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
              <ul className="grid gap-1 p-2 mx-0">
                {components.map((component) => (
                  <ListItem key={component.title} href={component.href}>
                    {component.title}
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
