"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import Navbar from "@/components/ui/navbar"

export default function Example() {

  const [nome, setNome] = useState("")
    const [user, setUser] = useState("")
    const [cpf, setCpf] = useState("")
    const [DataNascimento, setDataNascimento] = useState("")
    const [pass, setPass] = useState("")
    const [confirmPass, setConfirmPass] = useState("")

    const handleSignUp = () => {
      const formData = {
        nome,
        user,
        cpf,
        DataNascimento,
        pass
    }

    fetch('URL', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => {
      if (response.ok) {
        console.log('Cadastro realizado com sucesso!');
      } else {
        console.error('Ocorreu um erro ao cadastrar.');
      }
    })
    .catch(error => {
      console.error('Ocorreu um erro ao realizar a requisição:', error);
    });
  }

  return (
    <>
    <Navbar />
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl text-center font-bold tracking-tight text-gray-900">Cadastro do Paciente</h1>
          </div>
        </header>
          <main>
                <CardContent>
                    <form className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-6">
                        <section>
                            <Label htmlFor="nomeCompleto" className="block text-sm font-medium leading-6 text-gray-900">
                                Nome Completo
                            </Label>

                            <Input
                                onChange={(e) => setNome(e.target.value)}
                                id="nomeCompleto"
                                name="nomeCompleto"
                                type="text"
                                autoComplete="nome"
                                required
                                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />

                            <Label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email
                            </Label>

                            <Input
                                onChange={(e) => setUser(e.target.value)}
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />

                            <Label htmlFor="cpf" className="block text-sm font-medium leading-6 text-gray-900">
                                CPF
                            </Label>

                            <Input
                                onChange={(e) => setCpf(e.target.value)}
                                id="cpf"
                                name="cpf"
                                type="text"
                                autoComplete="cpf"
                                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />

                            <Label htmlFor="dataNascimento" className="block text-sm font-medium leading-6 text-gray-900">
                                Data de Nascimento
                            </Label>

                            <Input
                                onChange={(e) => setDataNascimento(e.target.value)}
                                id="dataNascimento"
                                name="dataNascimento"
                                type="date"
                                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />

                            <Label htmlFor="senha" className="block text-sm font-medium leading-6 text-gray-900">
                                Senha
                            </Label>

                            <Input
                                onChange={(e) => setPass(e.target.value)}
                                id="senha"
                                name="senha"
                                type="password"
                                autoComplete="nova-senha"
                                required
                                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />

                            <Label htmlFor="confirmaSenha" className="block text-sm font-medium leading-6 text-gray-900">
                                Confirmar Senha
                            </Label>

                            <Input
                                onChange={(e) => setConfirmPass(e.target.value)}
                                id="confirmaSenha"
                                name="confirmaSenha"
                                type="password"
                                autoComplete="nova-senha"
                                required
                                className="block w-full mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                            />
                        </section>

                        <Button
                            onClick={handleSignUp}
                            className="flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                        >
                            Cadastrar Paciente
                        </Button>
                    </form>
                </CardContent>
        </main>
    </>
  )
}
