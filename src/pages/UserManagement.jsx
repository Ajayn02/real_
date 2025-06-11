import React from 'react'
import { Search, MessageSquare, Trash } from 'lucide-react'

function UserManagement() {
    return (
        <>
            <div className='w-full min-h-screen p-2 sm:p-4'>
                <div className='w-full  mb-4 '>
                    <div className=''>
                        <h2 className='text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold'>User Management</h2>
                        <p className='text-gray-500 text-xs sm:text-sm'>Monitor and manage user accounts and activity</p>
                    </div>

                </div>
                <div className='w-full h-auto rounded-lg border border-gray-300 p-3 sm:p-6'>
                    <div className=' w-full flex items-center mb-5 '>
                        <div className=' h-9 flex items-center border border-gray-400 border-r-0 rounded-tl-lg rounded-bl-lg'>
                            <Search size={20} color='#9CA3AF' className='mx-2' />
                        </div>
                        <input type="text" className='w-full border border-gray-400 h-9 border-l-0 rounded-tr-lg rounded-br-lg focus:outline-none focus:ring-0 ' placeholder='Search users...' />
                    </div>

                    <div className='flex flex-col w-full h-auto gap-y-5'>
                        <div className='w-full grid grid-cols-12 rounded-lg bg-gray-200'>
                            <div className='w-full  h-auto p-3 flex col-span-12 sm:col-span-6 '>
                                <div className='flex items-center  w-[50px]'>
                                    <img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740" width={'100%'} alt="" className='rounded-3xl' />
                                </div>
                                <div className='flex flex-col ms-3'>
                                    <h3 className='font-semibold'>John Anderson</h3>
                                    <p className='text-sm text-gray-500'>john.anderson@email.com</p>
                                </div>
                            </div>
                            <div className='flex items-center justify-baseline sm:justify-end col-span-12 sm:col-span-6 pb-3 sm:pb-0 ms-3 sm:ms-0'>
                                <div className='flex flex-col me-2  w-28'>
                                    <h6 className='text-xl font-semibold text-center'>10</h6>
                                    <p className='text-xs text-center mt-1'>Properties posted</p>
                                </div>
                                <button className='px-1.5 py-1 rounded-sm border border-gray-300 m-2 bg-white'><MessageSquare /></button>
                                <button className='px-1.5 py-1 rounded-sm border border-gray-300 m-2 bg-white'>
                                    <Trash /></button>
                            </div>
                        </div>

                        <div className='w-full grid grid-cols-12 rounded-lg bg-gray-200'>
                            <div className='w-full  h-auto p-3 flex col-span-12 sm:col-span-6 '>
                                <div className='flex items-center  w-[50px]'>
                                    <img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740" width={'100%'} alt="" className='rounded-3xl' />
                                </div>
                                <div className='flex flex-col ms-3'>
                                    <h3 className='font-semibold'>John Anderson</h3>
                                    <p className='text-sm text-gray-500'>john.anderson@email.com</p>
                                </div>
                            </div>
                            <div className='flex items-center justify-baseline sm:justify-end col-span-12 sm:col-span-6 pb-3 sm:pb-0 ms-3 sm:ms-0'>
                                <div className='flex flex-col me-2  w-28'>
                                    <h6 className='text-xl font-semibold text-center'>10</h6>
                                    <p className='text-xs text-center mt-1'>Properties posted</p>
                                </div>
                                <button className='px-1.5 py-1 rounded-sm border border-gray-300 m-2 bg-white'><MessageSquare /></button>
                                <button className='px-1.5 py-1 rounded-sm border border-gray-300 m-2 bg-white'>
                                    <Trash /></button>
                            </div>
                        </div>

                        <div className='w-full grid grid-cols-12 rounded-lg bg-gray-200'>
                            <div className='w-full  h-auto p-3 flex col-span-12 sm:col-span-6 '>
                                <div className='flex items-center  w-[50px]'>
                                    <img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740" width={'100%'} alt="" className='rounded-3xl' />
                                </div>
                                <div className='flex flex-col ms-3'>
                                    <h3 className='font-semibold'>John Anderson</h3>
                                    <p className='text-sm text-gray-500'>john.anderson@email.com</p>
                                </div>
                            </div>
                            <div className='flex items-center justify-baseline sm:justify-end col-span-12 sm:col-span-6 pb-3 sm:pb-0 ms-3 sm:ms-0'>
                                <div className='flex flex-col me-2  w-28'>
                                    <h6 className='text-xl font-semibold text-center'>10</h6>
                                    <p className='text-xs text-center mt-1'>Properties posted</p>
                                </div>
                                <button className='px-1.5 py-1 rounded-sm border border-gray-300 m-2 bg-white'><MessageSquare /></button>
                                <button className='px-1.5 py-1 rounded-sm border border-gray-300 m-2 bg-white'>
                                    <Trash /></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default UserManagement