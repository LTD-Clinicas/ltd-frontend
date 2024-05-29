"use client";
import React, { useState } from 'react';
import { Calendar } from "@/components/ui/calendar";
import Navbar from "@/components/ui/navbar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { parseCookies} from "nookies";

export default function MarcarConsulta({ params }: Readonly<{ params: { ID: string } }>) {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [showAlert, setShowAlert] = useState(false);
    const [arrClinicas, setArrClinicas] = useState({
        inicio: "",
        fim: "",
        inicio2: "",
        fim2: "",
        quantidadeMax: "",
        maxPorHorario: ""
    });
    const { ID } = params;
    const {'token': token} = parseCookies();
    
    console.log("Teste batata")

    // fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/clinica/1`, {
    //     headers: {
    //         Authorization: `Bearer ${token}`
    //     }
    // })
    //     .then(async response => {
    //         if (!response.ok) {
    //             console.error("Erro na requisição")
    //         }
    //         return await response.json()})
    //     .then(data => {
    //         setArrClinicas(data)
    //     }).catch(error => {
    //     console.error(error)
    // })
    
    const clinicaObj = {
        horarioInicio1: arrClinicas.inicio,
        horarioFim1: arrClinicas.fim,
        
        horarioInicio2: arrClinicas.inicio2,
        horarioFim2: arrClinicas.fim2,
        
        quantidadeMax: arrClinicas.quantidadeMax,
        maxPorTurno: arrClinicas.maxPorHorario,
    }

    return (
        <>
            <div className="min-h-full">
                <Navbar />
                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Consulta</h1>
                    </div>
                </header>
                <main>
                    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                        {showAlert && (
                            <Alert>
                                <AiOutlineExclamationCircle className="h-4 w-4" />
                                <AlertTitle>Alerta!</AlertTitle>
                                <AlertDescription>

                                </AlertDescription>
                            </Alert>
                        )}
                        <div className="flex items-center space-x-4">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={(value) => {setDate(value)}}
                                className="rounded-md border"
                            />
                            
                            <Card className="flex-1">
                                <CardHeader>
                                    <CardTitle>Marcar Consulta</CardTitle>
                                    <CardDescription>
                                        Marque o dia e o mês no calendário que deseja realizar a sua consulta!
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div>
                                            <label htmlFor="turno" className="block text-sm font-medium text-gray-700">
                                                Turno
                                            </label>
                                        </div>
                                        <div>
                                            <label htmlFor="horario" className="block text-sm font-medium text-gray-700">
                                                Horário
                                            </label>

                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}