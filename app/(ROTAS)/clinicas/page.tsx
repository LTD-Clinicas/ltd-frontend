"use client"
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Navbar from '@/components/ui/navbar'

const clinica = [
  {
    id: 1,
    name: 'Psicologia',
    hreef: '#',
    imageSrc: '',
  },
  {
    id: 2,
    name: 'Fisioterapia',
    href: '#',
    imageSrc: '',
  },
  {
    id: 3,
    name: 'Direito',
    href: '#',
    imageSrc: '',
  },
  {
    id: 4,
    name: 'Nutrição',
    href: '#',
    imageSrc: '',
  },
]

const user = {
  name: 'usuário exemplo',
  email: 'emailexemplo@gmail.com',
}
const navigation = [
  { name: 'Clínicas', href: '#', current: true },
  { name: 'Perfil', href: '#', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <>
    <Navbar />
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-center tracking-tight text-gray-900">Selecionar Clínicas</h1>
          </div>
        </header>

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {clinica.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
</>
) }
