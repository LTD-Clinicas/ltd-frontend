"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import Navbar from "@/components/ui/navbar"

export default function Example() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [max, setMax] = useState("");
  const [maxHora, setMaxHora] = useState("");
  const [inicio, setInicio] = useState("");
  const [fim, setFim] = useState("");
  const [inicio2, setInicio2] = useState("");
  const [fim2, setFim2] = useState("");
  const [imagem, setImagem] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImagem(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSignUp = () => {
    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('descricao', descricao);
    formData.append('max', max);
    formData.append('maxHora', maxHora);
    formData.append('inicio', inicio);
    formData.append('fim', fim);
    formData.append('inicio2', inicio2);
    formData.append('fim2', fim2);
    if (imagem) {
      formData.append('imagem', imagem);
    }

    fetch('URL', {
      method: 'POST',
      body: formData,
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
  };

  return (
    <>
      <Navbar />
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl text-center font-bold tracking-tight text-gray-900">Cadastro da Clínica</h1>
        </div>
      </header>
      <main>
        <CardContent>
          <form className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-6">
            <section>
              <Label htmlFor="nome" className="block text-sm font-medium leading-6 text-gray-900">
                Nome
              </Label>
              <Input
                onChange={(e) => setNome(e.target.value)}
                id="nome"
                name="nome"
                type="text"
                autoComplete="nome"
                required
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />

              <Label htmlFor="descricao" className="block text-sm font-medium leading-6 text-gray-900">
                Descrição
              </Label>
              <Input
                onChange={(e) => setDescricao(e.target.value)}
                id="descricao"
                name="descricao"
                type="text"
                autoComplete="descricao"
                required
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />

              <Label htmlFor="max" className="block text-sm font-medium leading-6 text-gray-900">
                Máximo de consultas
              </Label>
              <Input
                onChange={(e) => setMax(e.target.value)}
                id="max"
                name="max"
                type="text"
                autoComplete="max"
                required
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />

              <Label htmlFor="maxHora" className="block text-sm font-medium leading-6 text-gray-900">
                Máximo de horas
              </Label>
              <Input
                onChange={(e) => setMaxHora(e.target.value)}
                id="maxHora"
                name="maxHora"
                type="text"
                autoComplete="maxHora"
                required
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />

              <Label htmlFor="inicio" className="block text-sm font-medium leading-6 text-gray-900">
                Início do horário matutino
              </Label>
              <Input
                onChange={(e) => setInicio(e.target.value)}
                id="inicio"
                name="inicio"
                type="text"
                autoComplete="inicio"
                required
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />

              <Label htmlFor="fim" className="block text-sm font-medium leading-6 text-gray-900">
                Fim do horário matutino
              </Label>
              <Input
                onChange={(e) => setFim(e.target.value)}
                id="fim"
                name="fim"
                type="text"
                autoComplete="fim"
                required
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />

              <Label htmlFor="inicio2" className="block text-sm font-medium leading-6 text-gray-900">
                Início do horário vespertino
              </Label>
              <Input
                onChange={(e) => setInicio2(e.target.value)}
                id="inicio2"
                name="inicio2"
                type="text"
                autoComplete="inicio2"
                required
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />

              <Label htmlFor="fim2" className="block text-sm font-medium leading-6 text-gray-900">
                Fim do horário vespertino
              </Label>
              <Input
                onChange={(e) => setFim2(e.target.value)}
                id="fim2"
                name="fim2"
                type="text"
                autoComplete="fim2"
                required
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />

              <Label htmlFor="imagem" className="block text-sm font-medium leading-6 text-gray-900">
                Escolha uma imagem para a clínica
              </Label>
              <Input
                onChange={(e) => handleFileChange(e)}
                id="imagem"
                name="imagem"
                type="file"
                accept="image/*"
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
              {preview && (
                <div className="mt-2">
                  <img src={preview} alt="Pré-visualização" className="w-32 h-32 object-cover rounded" />
                </div>
              )}
            </section>
            
            <Button
              onClick={(e) => {
                e.preventDefault();
                handleSignUp();
              }}
              className="flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Cadastrar clínica
            </Button>
          </form>
        </CardContent>
      </main>
    </>
  );
}
