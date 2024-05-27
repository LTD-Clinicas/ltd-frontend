"use client"
import * as React from "react"

import Link from "next/link"

import {cn} from "@/lib/utils"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import {
    testes,
    testes2
} from "@/mocks/mock"

export function NavBar() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>
                        Teste
                    </NavigationMenuTrigger>

                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            Teste
                                        </div>

                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod
                                            tempor
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>

                            <ListItem href="/" title="teste">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor
                            </ListItem>

                            <ListItem href="/" title="teste">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor
                            </ListItem>

                            <ListItem href="/" title="teste">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>
                        Teste 2
                    </NavigationMenuTrigger>

                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {testes.map((teste) => (
                                <ListItem
                                    key={teste.title}
                                    title={teste.title}
                                    href={teste.href}
                                >
                                    {teste.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>
                        Teste 3
                    </NavigationMenuTrigger>

                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {testes2.map((teste) => (
                                <ListItem
                                    key={teste.title}
                                    title={teste.title}
                                    href={teste.href}
                                >
                                    {teste.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <Link href="/login" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Login
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({className, title, children, ...props}, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"