import React from 'react'
import { MapPinHouse, Users, Flag, Wallet } from 'lucide-react'


function DashboardCards() {
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-2'>
                <div className='h-40 sm:h-50 flex justify-center items-center p-4 sm:p-8 '>
                    <div className='border border-gray-300 h-full w-full rounded-lg p-3 shadow-sm hover:shadow-md hover:scale-101'>
                        <div className='flex justify-between'>
                            <h6 className='text-lg'>Total Properties</h6>
                            <div className='flex items-center'><MapPinHouse /></div>
                        </div>
                        <h2 className='text-4xl font-semibold mt-4 text-center'>390</h2>
                    </div>
                </div>
                <div className=' h-40 sm:h-50 flex justify-center items-center p-4 sm:p-8 '>
                    <div className='border border-gray-300 h-full w-full rounded-lg p-3 shadow-sm hover:shadow-md hover:scale-101'>
                        <div className='flex justify-between'>
                            <h6 className='text-lg'>Active Users</h6>
                            <div className='flex items-center'><Users /></div>
                        </div>
                        <h2 className='text-4xl font-semibold mt-4 text-center'>833</h2>
                    </div>
                </div>
                <div className=' h-40 sm:h-50 flex justify-center items-center p-4 sm:p-8 '>
                    <div className='border border-gray-300 h-full w-full rounded-lg p-3 shadow-sm hover:shadow-md hover:scale-101'>
                        <div className='flex justify-between'>
                            <h6 className='text-lg'>Total Reports</h6>
                            <div className='flex items-center'><Flag /></div>
                        </div>
                        <h2 className='text-4xl font-semibold mt-4 text-center'>20</h2>
                    </div>
                </div>
                <div className=' h-40 sm:h-50 flex justify-center items-center p-4 sm:p-8 '>
                    <div className='border border-gray-300 h-full w-full rounded-lg p-3 shadow-sm hover:shadow-md hover:scale-101'>
                        <div className='flex justify-between'>
                            <h6 className='text-lg'>Sold Properties</h6>
                            <div className='flex items-center'><Wallet /></div>
                        </div>
                        <h2 className='text-4xl font-semibold mt-4 text-center'>122</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardCards