"use client"
import { InputComLabel } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useForm } from "react-hook-form"
import Navbar from "@/components/ui/navbar"
import { useRouter } from "next/navigation"
import { parseCookies } from "nookies";

export default function Coordenador () {
    const router = useRouter()
    const {'token': token} = parseCookies();
    
    const {
        register,
        handleSubmit
    } = useForm();

    const onSubmit = async (data: any) => {
        console.log(data)
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/salvar/coordenador`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(
                    data
                )
            })

            if (response.ok) {
                router.push("/cadastros/roles")
            } else {
                alert("Erro ao criar usuário")
            }
        } catch (error) {
            alert("Erro ao criar usuário")
        }
    }

    return (
        <main>
            <Navbar />
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl text-center font-bold tracking-tight text-gray-900">Cadastro do Coordenador</h1>
                </div>
            </header>
            <Card>
                <CardContent>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm lg:px-"
                    >
                        <InputComLabel
                            placeholder={"Nome de usuário"}
                            classNameInput={"mb-4"}
                            register={register("user")}
                            label={"Nome de usuário"}
                            required={true}
                        />

                        <InputComLabel
                            placeholder={"Senha"}
                            classNameInput={"mb-4"}
                            register={register("password")}
                            label={"Senha"}
                            required={true}
                            type={"password"}
                        />

                        <InputComLabel
                            placeholder={"Nome Completo"}
                            classNameInput={"mb-4"}
                            register={register("nome")}
                            label={"Nome Completo"}
                            required={true}
                        />

                        <InputComLabel
                            placeholder={"(XX) XXXXX-XXXX"}
                            classNameInput={"mb-4"}
                            register={register("telefone")}
                            label={"Telefone"}
                            required={true}
                        />

                        <InputComLabel
                            placeholder={"Data de nascimento"}
                            classNameInput={"mb-4"}
                            register={register("DataNascimento")}
                            label={"Data de nascimento"}
                            required={true}
                            type={"date"}
                        />

                        <InputComLabel
                            placeholder={"xxx.xxx.xxx-xx"}
                            classNameInput={"mb-4"}
                            register={register("cpf")}
                            label={"Cpf"}
                            required={true}
                        />

                        <Button
                            className={"w-full !bg-blue-500"}
                            type={"submit"}
                        >
                            Salvar
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </main>
    )
}