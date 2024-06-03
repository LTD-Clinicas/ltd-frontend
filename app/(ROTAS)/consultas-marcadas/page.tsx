"use client"
import
    Navbar
    from "@/components/ui/navbar"
import {Card, CardContent, CardTitle} from "@/components/ui/card";
import React, {useState, useEffect, Fragment} from "react";
import {parseCookies} from "nookies";

export default function Consultas () {
    const [arrConsultas, setArrConsultas] = useState([])
    const {'token': token} = parseCookies();

    useEffect(() => {
        const getConsultas = async () => {
            await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/consulta/listar`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }).then(async (response) => {
                if (!response.ok) {
                    console.error("Erro na requisição")
                }
                return await response.json()
            }).then((data) => {
                setArrConsultas(data)
            }).catch((error) => {
                console.error(error)
            })
        }
        getConsultas().then(r => {})
    }, [token]);

    return (
        <main>
            <Navbar/>

            <div className={"flex justify-center w-3/5 mx-auto"}>
                <Card className={"shadow-2xl mt-8 p-8 w-full text-center"}>
                    <CardTitle className={"font-bold text-blue-500"}>
                        Consultas agendadas no sistema
                    </CardTitle>

                    <CardContent>
                        {arrConsultas?.map(({
                            id, paciente, funcionario, clinica, dia, inicio, fim, info
                        }: {
                            id?: undefined | number
                            paciente?: undefined | string
                            funcionario?: undefined | string
                            clinica?: undefined | { 
                                nome?: string
                            }
                            dia?: undefined | string
                            inicio?: undefined | string
                            fim?: undefined | string
                            info?: undefined | string
                        }) => {
                            return (
                                <Card key={id} className={"mt-4 p-1 bg-gray-50"}>
                                    <CardContent>
                                        <h3 className={"font-bold text-blue-500 text-xl"}>
                                            Consulta dia: {dia}
                                        </h3>
                                        <div className={"text-left"}>
                                            <div className={"flex flex-col justify-between"}>
                                                <p><span className={"font-semibold text-blue-500"}>Paciente</span>: {paciente}</p>
                                                <p><span className={"font-semibold text-blue-500"}>Funcionário responsável</span>: {funcionario}</p>
                                            </div>
                                            
                                            <p><span className={"font-bold text-blue-500"}>Clinica</span>: {clinica?.nome}</p>

                                            <div className={"flex gap-1"}>
                                                <p><span className={"font-semibold text-blue-500"}>Informações adicionais</span>: </p>
                                                
                                                <p>{info}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}