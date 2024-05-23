"use client"
import React, { useState } from 'react';
import { Calendar } from "@/components/ui/calendar"
import  Navbar  from "@/components/ui/navbar"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AiOutlineExclamationCircle } from "react-icons/ai";


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
  const [isConsultationMarked, setIsConsultationMarked] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleConsultationClick = () => {
    if (!date) {
      setAlertMessage("Por favor, selecione uma data.");
      setShowAlert(true);
      return;
    }

    const dayOfWeek = date.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      setAlertMessage("Consultas não podem ser marcadas aos sábados e domingos.");
      setShowAlert(true);
      return;
    }

    if (turno && horario) {
      const formattedDate = `${date.getDate()} do mês ${date.toLocaleString('default', { month: 'long' })}`;
      const alertMsg = `Sua consulta foi marcada para o dia ${formattedDate} às ${horario} horas!`;
      setAlertMessage(alertMsg);
      setShowAlert(true);
      setIsConsultationMarked(true);
      setConsultationText(`Sua consulta foi marcada para o dia ${formattedDate} às ${horario} horas ${turno}! Por favor, compareça no dia marcado.`);
    } else {
       setAlertMessage("Por favor, selecione todos os campos antes de marcar a consulta.");
       setShowAlert(true);
    }
  };

  const handleUndoConsultationClick = () => {
    setIsConsultationMarked(false);
    setTurno("");
    setHorario("");
    setConsultationText(originalConsultationText);
  };

  const handleTurnoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTurno(event.target.value);
  };

  const handleHorarioChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setHorario(event.target.value);
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
            {showAlert && (
              <Alert>
                  <AiOutlineExclamationCircle className="h-4 w-4" />
                  <AlertTitle>Alerta!</AlertTitle>
                  <AlertDescription>
                    {alertMessage}
                  </AlertDescription>
              </Alert>
             )}
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
