"use client"
import Navbar from "@/components/ui/navbar"

import {
    Button
} from "@/components/ui/button"

import {
    useRouter
} from "next/navigation"

export default function Cadastros () {
    const router  = useRouter()
    
    return (
        <div>
            <Navbar/>
            <div className={"flex items-center justify-center gap-4 mt-16"}>
                <Button
                    className={"h-32 text-xl !bg-blue-500 hover:!bg-blue-800"}
                    onClick={() => {
                        router.push("/cadastro/roles/coordenador")
                    }}
                >
                    Cadastrar Coordenador
                </Button>
                
                <Button
                    className={"h-32 text-xl !bg-blue-500 hover:!bg-blue-800"}
                    onClick={() => {
                        router.push("/cadastro/roles/estagiario")
                    }}
                >
                    Cadastrar Estagiário
                </Button>
                
                <Button
                    className={"h-32 text-xl !bg-blue-500 hover:!bg-blue-800"}
                    onClick={() => {
                        router.push("/cadastro/roles/paciente")
                    }}
                >
                    Cadastrar Paciente
                </Button>
            </div>
        </div>
    )
} 