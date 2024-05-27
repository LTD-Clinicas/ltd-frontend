"use client"
import {
    ClinicasList
} from "@/components/pages/clinicas";

import Navbar from "@/components/ui/navbar"
export default function Inicio() {
    return (
        <main
            className="px-14 py-4 h-screen"
        >
            <Navbar/>
            <div className={"flex items-center justify-around"}>
                <ClinicasList/>
            </div>
        </main>
    )
}