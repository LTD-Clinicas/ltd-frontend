"use client";
import React, { useState, useEffect } from 'react';
import { Calendar } from "@/components/ui/calendar";
import Navbar from "@/components/ui/navbar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { parseCookies } from "nookies";
import { useForm } from "react-hook-form"
import { InputComLabel } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Label
} from "@/components/ui/label"
import {
    Textarea
} from "@/components/ui/textarea"
import {Button} from "@/components/ui/button";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

export default function MarcarConsulta({ params }: Readonly<{ params: { ID: string } }>) {
    const {
        register,
        handleSubmit,
        setValue,
    } = useForm({defaultValues:{
            dia: new Date().toLocaleDateString("en-ZA"),
            clinica: "",
            nome: "",
            info: "",
            horaInicio: "",
            horaFim: ""
        }});
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [showAlert, setShowAlert] = useState(false);
    const [turno, setTurno] = useState("")
    const { ID } = params;
    const {'token': token} = parseCookies();
    const [arrClinicas, setArrClinicas] = useState({
        id: "",
        inicio: "",
        fim: "",
        inicio2: "",
        fim2: "",
        quantidadeMax: "",
        maxPorHorario: ""
    });
    
    const listaHorarios: {[x: string]: string[]} = {
        manha: [
            "07:00:00",
            "08:00:00",
            "09:00:00",
            "10:00:00",
            "11:00:00",
            "12:00:00",
        ],
        tarde: [
            "14:00:00",
            "15:00:00",
            "16:00:00",
            "17:00:00",
            "18:00:00",
            "19:00:00",
        ]
    }

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/clinica/${ID}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(async (response) => {
            if (!response.ok) {
                console.error("Erro na requisição");
            }
            return await response.json();
        })
        .then((data) => {
            setArrClinicas(data);
        })
        .catch((error) => {
            console.error(error);
        });
    }, [token]);
    
    const onSubmit = (data: any) => {
        data.horaFim = data.horaInicio
        console.log(data)
        
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/consulta/salvar`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            method: "POST",
            body: JSON.stringify(data),
        }).then(async (response) => {
            console.log(response)
        }).catch(error => {
            alert("Erro ao realizar a requisição")
        })
    }

    useEffect(() => {
        setValue("clinica", ID)
    }, [ID])
    // @ts-ignore
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
                        <div className="flex items-start space-x-4 flex-col gap-10 sm:flex-row">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={(value) => {
                                    setDate(value)
                                    setValue("dia", value!.toLocaleDateString("en-ZA"))
                                }}
                                className="rounded-md border shadow-2xl background-white mx-auto"
                            />
                            
                            <Card className="flex-1 shadow-2xl">
                                <CardHeader>
                                    <CardTitle>Marcar Consulta</CardTitle>
                                    <CardDescription>
                                        Marque o dia e o mês no calendário que deseja realizar a sua consulta!
                                    </CardDescription>
                                </CardHeader>
                                
                                <CardContent className={"flex justify-center gap-24 w-full"}>
                                    <form
                                        onSubmit={handleSubmit(onSubmit)}
                                        className="mt-4 w-full"
                                    >
                                        <InputComLabel
                                            placeholder={"Data selecionada"}
                                            classNameInput={"mb-4"}
                                            label={"Data selecionada"}
                                            value={date?.toLocaleDateString("en-ZA")}
                                            disabled={true}
                                            required={false}
                                        />

                                        <Label>Informe detalhes importantes de modo resumido</Label>
                                        <Textarea
                                            className={"mb-4 resize-none"}
                                            {...register("info")}
                                        />

                                        <Label>Selecione um turno</Label>
                                        <Select onValueChange={setTurno}>
                                            <SelectTrigger>
                                                <SelectValue placeholder={"Selecione um turno para consulta"}/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem className={"text-black"} value={"manha"}>Manhã</SelectItem>
                                                <SelectItem className={"text-black"} value={"tarde"}>Tarde</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        
                                        <div className={"mt-4"}></div>
                                        
                                        {turno && <Select onValueChange={(value) => {
                                            setValue("horaInicio", value)
                                        }}>
                                            <SelectTrigger>
                                                <SelectValue placeholder={"Selecione um horário para consulta"}/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                {listaHorarios[turno]?.map(
                                                    (horario) => {
                                                        return (
                                                            <SelectItem
                                                                key={horario}
                                                                value={horario}
                                                            >
                                                                {horario + "h"}
                                                            </SelectItem>
                                                        )
                                                    }
                                                )}
                                            </SelectContent>
                                        </Select>}
                                        
                                        <Button
                                            className={"w-full mt-8 bg-blue-500 hover:bg-blue-800"}
                                            type={"submit"}
                                        >
                                            Confirmar consulta
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}