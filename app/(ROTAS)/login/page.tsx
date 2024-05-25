"use client";
import {
    Input
} from "@/components/ui/input";

import {
    Label
} from "@/components/ui/label";

import {
    Button
} from "@/components/ui/button";

import {
    Card,
    CardContent
} from "@/components/ui/card";

import {
    useState
} from "react";

import {
    HiOutlineUserCircle
} from "react-icons/hi";

import {
    useRouter
} from "next/navigation"

export default function Login() {
    const router = useRouter()

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUPLIC_BASE_URL}/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username, 
                    password: password
                })
            })
            
            if (response.ok) {
                router.push("/dashboard-clinica")
            } else {
                alert("Usuário nao encontrado, tente novamente")
            }
        } catch (error) {
            alert("Usuario nao encontrado, tente novamente")
        }
    }

    return (
        <main className={"h-screen w-full p-12"}>
            <Card className="h-fit w-fit px-0 md:px-16 pt-3 mx-auto">
                <CardContent>
                    <div className="">
                        <HiOutlineUserCircle size={200} className="text-blue-400 mx-auto" />

                        <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Entrar na sua conta
                        </h2>
                    </div>

                    <form className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-6">
                        <section>
                            <Label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email
                            </Label>

                            <Input
                                onChange={(e) => setUsername(e.target.value)}
                                id="username"
                                name="username"
                                type="text"
                                value={username}
                                required
                                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />

                            <Label
                                htmlFor="password"
                                className="mt-4 flex items-center justify-between text-sm font-medium leading-6 text-gray-900"
                            >
                                Senha
                            </Label>

                            <Input
                                onChange={(e) => setPassword(e.target.value)}
                                id="password"
                                name="password"
                                type="password"
                                value={password}
                                required
                                className="block w-full mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                            />
                        </section>

                        <Button
                            onClick={handleLogin}
                            type="button"
                            className="flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                        >
                            Entrar
                        </Button>

                        <span className="mt-10 text-center text-sm text-gray-900">
                            Não tem cadastro?
                            
                            <a href="#" className="font-semibold leading-6 text-blue-400 hover:text-indigo-500">
                                Clique aqui
                            </a>
                        </span>
                    </form>
                </CardContent>
            </Card>
        </main>
    );
}