/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { UserIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

import logoClub from '../../../assets/logoBlanco.svg'
import logoClubAzul from '../../../assets/logoClub.png'
import logoClubLetras from '../../../assets/logoBlancoLetras.svg'
import { Link } from 'react-router-dom'

import useAuth from '../../../hooks/useAuth'

const navigation = [
  { name: 'Inicio', href: '#hero', current: true },
  { name: 'Miembros', href: '#miembros', current: false },
  { name: '¿Quiénes Somos?', href: '#about', current: false },
  { name: 'Contacto', href: '#contacto', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const { auth, cerrarSesion } = useAuth()
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-24">

              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src={logoClub}
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-12 w-auto"
                    src={logoClubLetras}
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4 h-fit">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {auth.nombre ? (
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">

                    <Menu.Button className="bg-gray-800 flex text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <div className='transition-colors ease-in-out bg-[#008ae6] hover:bg-[#006be6] px-2 py-2 rounded-md flex justify-center items-center'>
                        <h3 className='hidden sm:block mr-3 text-white'>{auth.nombre}</h3>

                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src={logoClub}
                          alt=""
                        />
                      </div>
                    </Menu.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="z-50 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <Link to={'utcstudent'}>
                              <p
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer')}
                              >
                                Plataforma
                              </p>
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link to={'utcstudent/talleres'}>
                              <p
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer')}
                              >
                                Talleres
                              </p>
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <>
                              <hr></hr>
                              <p
                                onClick={cerrarSesion}
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-red-800 cursor-pointer')}
                              >
                                Cerrar sesión
                              </p>
                            </>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              ) : (
                <Link to={'utcstudent'}>
                  <button className='flex flex-row transition ease-in-out rounded-md p-2 bg-[#008ae6] hover:bg-[#006be6] '>
                    <h3 className='hidden sm:block mr-3 text-white'>Login</h3>
                    <UserIcon className='text-white block h-6 w-6 ' />
                  </button>
                </Link>
              )}

            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )
      }
    </Disclosure >
  )
}
