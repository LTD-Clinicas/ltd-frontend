"use client"
import React, { useState } from 'react';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Calendar } from "@/components/ui/calendar"

const user = {
    name: 'user',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    { name: 'Dashboard', href: '/dashboard-clinica', current: false },
    { name: 'Clínicas', href: '/clinicas', current: false },
    { name: 'Consultas', href: '/marcar-consulta', current: false },
    { name: 'Cadastros', href: '/cadastro/clinica', current: false },
]
const userNavigation = [
    { name: 'Seu perfil', href: '#' },
    { name: 'configurações', href: '#' },
    { name: 'sair', href: '#' },
]

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export default function MarcarConsulta() {
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
                <Disclosure as="nav" className="bg-gray-800">
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="flex h-16 items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-40 w-40"
                                                src="https://logodownload.org/wp-content/uploads/2014/12/estacio-logo-0.png"
                                                alt="logo estacio"
                                            />
                                        </div>
                                        <div className="hidden md:block">
                                            <div className="ml-10 flex items-baseline space-x-4">
                                                {navigation.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className={classNames(
                                                            item.current
                                                                ? 'bg-gray-900 text-white'
                                                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                            'rounded-md px-3 py-2 text-sm font-medium'
                                                        )}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="ml-4 flex items-center md:ml-6">
                                            <button
                                                type="button"
                                                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                            >
                                                <span className="absolute -inset-1.5" />
                                                <span className="sr-only">View notifications</span>
                                                <BellIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>

                                            {/* Profile dropdown */}
                                            <Menu as="div" className="relative ml-3">
                                                <div>
                                                    <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                        <span className="absolute -inset-1.5" />
                                                        <span className="sr-only">Open user menu</span>
                                                        <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                                                    </Menu.Button>
                                                </div>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        {userNavigation.map((item) => (
                                                            <Menu.Item key={item.name}>
                                                                {({ active }) => (
                                                                    <a
                                                                        href={item.href}
                                                                        className={classNames(
                                                                            active ? 'bg-gray-100' : '',
                                                                            'block px-4 py-2 text-sm text-gray-700'
                                                                        )}
                                                                    >
                                                                        {item.name}
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                        ))}
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </div>
                                    </div>
                                    <div className="-mr-2 flex md:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="absolute -inset-0.5" />
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="md:hidden">
                                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                                    {navigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'block rounded-md px-3 py-2 text-base font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>
                                <div className="border-t border-gray-700 pb-3 pt-4">
                                    <div className="flex items-center px-5">
                                        <div className="flex-shrink-0">
                                            <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                                        </div>
                                        <div className="ml-3">
                                            <div className="text-base font-medium leading-none text-white">{user.name}</div>
                                            <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                                        </div>
                                        <button
                                            type="button"
                                            className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                        >
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">View notifications</span>
                                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                    <div className="mt-3 space-y-1 px-2">
                                        {userNavigation.map((item) => (
                                            <Disclosure.Button
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                            >
                                                {item.name}
                                            </Disclosure.Button>
                                        ))}
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

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