import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

import {
    NavBar
} from "@/components/navigation/nav";

import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "LTD 2024.1",
    description: "LTD ESTACIO",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
        <body className={inter.className}>
        {/*<NavBar/>*/}
        {children}
        </body>
        </html>
    );
}