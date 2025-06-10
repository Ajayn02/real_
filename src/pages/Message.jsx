import React, { useEffect, useState } from 'react'
'use client'
import { Dialog, DialogPanel, } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, } from '@heroicons/react/24/outline'
import { io } from 'socket.io-client'


// const socket = io(`http://localhost:5000`)

function Message() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    // const user = {
    //     userId: `e8389eo333`,
    //     message: 'hiii'
    // }

    // useEffect(() => {
    //     socket.emit('register', user)
    // }, [])

    return (
        <>
            <div className='h-screen'>
                <header className="bg-white">
                    <nav aria-label="Global" className=" flex max-w-7xl items-baseline sm:items-center justify-between px-6 pt-6 pb-4 lg:px-8">
                        <div className="flex ">
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(true)}
                                className="-m-2.5 inline-flex items-center justify-center rounded-md py-1.5 px-3 text-gray-100 font-semibold cursor-pointer bg-gray-800"
                            >
                                <span className="sr-only">Open main menu</span>
                                Chats
                            </button>
                        </div>
                    </nav>
                    <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="">
                        <div className="fixed inset-0 z-10 " />
                        <DialogPanel className="fixed inset-y-0 left-0 z-10 w-full sm:w-[330px] overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <a to={'/account'} className="-m-1.5 p-1.5 flex items-center justify-center">
                                    <i className="fa-solid fa-user me-1 fa-lg" />
                                    <h3 className='text-lg font-semibold'>User</h3>
                                </a>
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
                                        <a to={'/account'} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Account</a>
                                        <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Message</a>
                                        <a to={'/save'} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Saved</a>
                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </Dialog>
                </header>

                <div className='w-full h-[90vh]  bg-white flex items-center flex-col '>
                    <div className='w-full h-[82vh] lg:w-[80%]  px-3 '>
                        <div className='w-full h-[8vh]  mb-2 flex items-center '>
                            <img src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" className='h-[6vh]' alt="" />
                            <p className='text-lg font-semibold'>Fadil</p>
                        </div>
                        {/* chat */}
                        <div className='w-full mb-2'>
                            <div className='w-auto max-w-[300px] bg-gray-600 py-1 px-2' style={{ borderRadius: "0px 10px 10px 10px" }}>
                                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                            </div>
                        </div>
                        <div className='w-full flex justify-end mb-2'>
                            <div className='w-[300px] bg-gray-400 py-1 px-2 text-end' style={{ borderRadius: "10px 0px 10px 10px" }}>
                                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                            </div>
                        </div>
                        {/* chat */}
                    </div>

                    {/* inputbox */}
                    <div className='w-full lg:w-[80%]  h-[10vh] flex justify-between items-center px-1 sm:px-2 md:px-5 '>
                        <input type="text" className='border w-full h-10 rounded-lg md:w-[93%] me-2' />
                        <div className='flex justify-center items-center'>
                            <button className='px-2.5 py-2 border-2 rounded-3xl'>
                                <i className="fa-regular fa-paper-plane fa-lg" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Message