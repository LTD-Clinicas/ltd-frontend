"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = () => {
        console.log("Login: " + email + "Password: " + password)
    }

    return (
        <main>
            <Card className=" flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <CardContent>
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img
                            className="mx-auto"
                            width={250}
                            src="https://logodownload.org/wp-content/uploads/2014/12/estacio-logo-1.png"
                            alt="Tela de login"
                        />
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Entrar na sua conta
                        </h2>
                    </div>

                    <form className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-6">
                        <section>
                            <Label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email
                            </Label>

                            <Input
                                onChange={(e) => setEmail(e.target.value)}
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />

                            <Label htmlFor="password" className="flex items-center justify-between text-sm font-medium leading-6 text-gray-900">
                                Senha
                                <a href="#" className="text-sm font-semibold text-blue-400 hover:text-blue-500">
                                    Esqueceu sua senha?
                                </a>
                            </Label>

                            <Input
                                onChange={(e) => setPassword(e.target.value)}
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="block w-full mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                            />
                        </section>

                        <Button
                            onClick={handleLogin}
                            className="flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                        >
                            Entrar
                        </Button>
                        <span className="mt-10 text-center text-sm text-gray-900">
                            Não tem cadastro?{' '}
                            <a href="#" className="font-semibold leading-6 text-blue-400 hover:text-indigo-500">
                                Clique aqui
                            </a>
                        </span>
                    </form>
                </CardContent>
            </Card>
        </main>
    )
}