'use client'
import { useState } from 'react'
import { Dialog, DialogPanel, } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, } from '@heroicons/react/24/outline'
import Sort from './Sort'
import { Link } from 'react-router-dom'
import LogoutModal from './LogoutModal'


function Sidebar({ searchKey }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>
            <header className="bg-white">
                <nav aria-label="Global" className=" flex max-w-7xl items-baseline sm:items-center justify-between p-6 lg:px-8">
                    <div className='w-[305px]  grid  grid-cols-12 '>
                        <div className="col-span-12 sm:col-span-9 flex items-center  rounded-md">
                            <input type="text" className=' rounded-md shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50  me-2 h-9 px-3' placeholder=' Search' onChange={(e) => { searchKey(e.target.value) }} />
                        </div>
                        <div className='col-span-12 sm:col-span-3 flex items-center justify-baseline mt-1 sm:mt-0 sm:justify-end '>
                            <Sort className='w-full' />
                        </div>
                    </div>

                    <div className="flex ">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 cursor-pointer"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="">
                    <div className="fixed inset-0 z-10 " />
                    <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full sm:w-[350px] overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Link to={'/account'} className="-m-1.5 p-1.5 flex items-center justify-center">
                                <i className="fa-solid fa-user me-1 fa-lg" />
                                <h3 className='text-lg font-semibold'>{sessionStorage.getItem('user')}</h3>
                            </Link>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700 cursor-pointer"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="size-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <Link to={'/account'} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Account</Link>
                                    <Link to={'/message'} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Message</Link>
                                    <Link to={'/save'} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Saved</Link>
                                </div>
                                <div className="py-6">
                                    <LogoutModal />
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>
        </>
    )
}

export default Sidebar