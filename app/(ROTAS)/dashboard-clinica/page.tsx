"use client"
import React, { useState } from 'react';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Calendar } from "@/components/ui/calendar"
import  Navbar  from "@/components/ui/navbar"

const user = {
  name: 'user',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'exemplo', href: '#', current: true },
  { name: 'exemplo', href: '#', current: false },
  { name: 'exemplo', href: '#', current: false },
  { name: 'exemplo', href: '#', current: false },
  { name: 'exemplo', href: '#', current: false },
]
const userNavigation = [
  { name: 'Seu perfil', href: '#' },
  { name: 'configurações', href: '#' },
  { name: 'sair', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [consultationText, setConsultationText] = useState("Marque o dia e o mês no calendario que deseja realizar a sua consulta!");
  const originalConsultationText = "Marque o dia e o mês no calendario que deseja realizar a sua consulta!";
  const [turno, setTurno] = useState("");
  const [horario, setHorario] = useState("");
  const [observacao, setObservacao] = useState("");
  const [isConsultationMarked, setIsConsultationMarked] = useState(false);

  const handleConsultationClick = () => {
    if (!date) {
      alert("Por favor, selecione uma data.");
      return;
    }

    const dayOfWeek = date.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      alert("Consultas não podem ser marcadas aos sábados e domingos.");
      return;
    }

    if (turno && horario) {
      const formattedDate = `${date.getDate()} do mês ${date.toLocaleString('default', { month: 'long' })}`;
      const alertMessage = `Sua consulta foi marcada para o dia ${formattedDate} às ${horario} horas!`;
      alert(alertMessage);
      setIsConsultationMarked(true);
      setConsultationText(`Sua consulta foi marcada para o dia ${formattedDate} às ${horario} horas ${turno}! Por favor, compareça no dia marcado.`);
    } else {
      alert("Por favor, selecione todos os campos antes de marcar a consulta.");
    }
  };

  const handleUndoConsultationClick = () => {
    setIsConsultationMarked(false);
    setTurno("");
    setHorario("");
    setObservacao("");
    setConsultationText(originalConsultationText);
  };

  const handleTurnoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTurno(event.target.value);
  };

  const handleHorarioChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setHorario(event.target.value);
  };

  const handleObservationChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setObservacao(event.target.value);
  };
  
  return (
    <>
      <div className="min-h-full">
        <Navbar/>
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Consulta</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {!isConsultationMarked ? (
              <div className="flex items-center space-x-4">
                <div>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </div>
                <div>
                  <p className="ml-16 text-lg font-medium">
                    {originalConsultationText}
                  </p>
                  <div className="mt-4 space-y-4">
                    <div>
                      <label htmlFor="turno" className="block text-sm font-medium text-gray-700">
                        Turno
                      </label>
                      <select
                        id="turno"
                        name="turno"
                        onChange={handleTurnoChange}
                        value={turno}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                      >
                        <option value="">Selecione o turno</option>
                        <option value="Manhã">Manhã</option>
                        <option value="Tarde">Tarde</option>
                        <option value="Noite">Noite</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="horario" className="block text-sm font-medium text-gray-700">
                        Horário
                      </label>
                      <select
                        id="horario"
                        name="horario"
                        onChange={handleHorarioChange}
                        value={horario}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                      >
                        <option value="">Selecione o horário</option>
                        {turno === "Manhã" && (
                          <>
                            <option value="8:00">8:00 ás 9:00 / 40 vagas</option>
                            <option value="10:00">10:00 ás 11:00/ 40 vagas</option>
                          </>
                        )}
                        {turno === "Tarde" && (
                          <>
                            <option value="14:00">14:00 ás 15:00 / 40 vagas</option>
                            <option value="16:00">16:00 ás 17:00 / 40 vagas</option>
                          </>
                        )}
                        {turno === "Noite" && (
                           <>
                             <option value="18:00">18:00 ás 19:00 / 40 vagas</option>
                             <option value="20:00">20:00 ás 21:00 / 40 vagas</option>
                           </>
                        )}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="observacao" className="block text-sm font-medium text-gray-700">
                        Observação
                      </label>
                      <textarea
                        id="observacao"
                        name="observacao"
                        rows={3}
                        value={observacao}
                        onChange={handleObservationChange}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <p className="mt-4 text-lg font-medium text-green-500" style={{ marginLeft: '85px' }}>
                {consultationText}
              </p>
            )}
            <div className="mt-4 flex justify-center space-x-4">
              {!isConsultationMarked ? (
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={handleConsultationClick}
                >
                  Marcar Consulta
                </button>
              ) : (
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={handleUndoConsultationClick}
                >
                  Desfazer consulta
                </button>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
