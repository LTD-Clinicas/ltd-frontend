"use client"
import Navbar from "@/components/ui/navbar";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import {parseCookies} from "nookies";

export default function Clinica({
                                    params,
                                }: Readonly<{ params: { ID: string } }>) {
    const { ID } = params;
    const [arrClinicas, setArrClinicas] = useState({
        nome: "",
        descricao: "",
        quantidadeMax: "",
        inicio: "",
        fim: "",
        inicio2: "",
        fim2: "",
        diasAtendimento: "",
        maxPorHorario: "",
    });
    
    const {'token': token} = parseCookies();
    
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/clinica/${ID}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(async response => {
        if (!response.ok) {
            console.error("Erro na requisição")
        }
    return await response.json()})
    .then(data => {
        setArrClinicas(data)
    }).catch(error => {
        console.error(error)
    })
    
    return (
        <main>
            <Navbar/>
            
            <div className="w-full">
                <Card className={"p-10 w-1/2 mx-auto mt-10"}>
                    <CardTitle className={"text-center"}>
                        {arrClinicas.nome}
                    </CardTitle>

                    <CardContent>
                        <div>
                            <p>
                                Descrição da Clinica: <span className={"text-blue-500"}>{arrClinicas.descricao}</span>
                            </p>
                            
                            <p>
                                Quantidade máxima de pacientes: <span className={"text-blue-500"}>{arrClinicas.quantidadeMax}</span>
                            </p>
                            
                            <div>
                                <p className={"flex flex-col justify-between p-4"}>
                                    Horário de inicio: <span className={"text-blue-500"}>{arrClinicas.inicio}</span>
                                    Horário de fim: <span className={"text-blue-500"}>{arrClinicas.fim}</span>
                                </p>
                            </div>

                            <div>
                                <p className={"flex flex-col justify-between p-4"}>
                                    Horário de inicio tarde: <span className={"text-blue-500"}>{arrClinicas.inicio2}</span>
                                    Horário de fim tarde: <span className={"text-blue-500"}>{arrClinicas.fim2}</span>
                                </p>
                            </div>                         
                            
                            <div>
                                <p className={"flex flex-col justify-between p-4"}>
                                    Dias de atendimento na semana: <span className={"text-blue-500"}>{arrClinicas.diasAtendimento}</span>
                                    Máximo de pacientes por turno: <span className={"text-blue-500"}>{arrClinicas.quantidadeMax}</span>
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}