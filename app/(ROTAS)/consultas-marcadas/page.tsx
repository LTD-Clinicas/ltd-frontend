"use client"
import
    Navbar
from "@/components/ui/navbar"
import {Card, CardContent, CardTitle} from "@/components/ui/card";

const consulta = {
    diaSemana: "15/10/2024",
    horario: "14:00",
    nomePaciente: "Jonatan Andrade",
    clinica: "Fisioterapia",
    informacoes: "Paciente fraturou a escapula"
}

export default function ConsultasMarcadas () {
    return (
        <main>
            <Navbar/>
            
            <div className={"w-full"}>
                <Card className={"mx-auto mt-10 flex flex-col justify-start w-1/2"}>
                    <CardTitle className={"text-center mt-4"}>
                        Consulta Marcada
                    </CardTitle>
                    <CardContent className={"p-10"}>
                        <p className={"flex gap-4"}>
                            Nome do paciente: <span className={"text-blue-500 font-bold"}>{consulta.nomePaciente}</span>
                        </p>
                        <p className={"flex gap-4"}>
                            Horário da consulta: <span className={"text-blue-500 font-bold"}>{consulta.horario}</span>
                        </p>
                        <p className={"flex gap-4"}>
                            Dia da consulta: <span className={"text-blue-500 font-bold"}>{consulta.diaSemana}</span>
                        </p>
                        <p className={"flex gap-4"}>
                            Informações adicionais <span className={"text-blue-500 font-bold"}>{consulta.informacoes}</span>
                        </p>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
} 