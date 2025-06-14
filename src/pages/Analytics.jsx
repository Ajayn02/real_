import React from 'react'
import SalesChart from '../components/SalesChart'
import UserGrowthChart from '../components/UserGrowthChart'

function Analytics() {
    return (
        <>
            <div className='w-full min-h-screen p-2 sm:p-4'>
                <div className='w-full mb-6 md:mb-8 sm:mb-10 '>
                    <div className=''>
                        <h2 className='text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold'>Report Management</h2>
                        <p className='text-gray-500 text-xs sm:text-sm'>Monitor and manage user reports and activity</p>
                    </div>
                </div>
                <div className='w-full min-h-[78vh]'>
                    <div className='grid grid-cols-1 lg:grid-cols-2  md:gap-x-5 gap-y-5 '>
                        <div className=' h-auto rounded-lg border border-gray-300 p-2 sm:p-4'>
                            <h6 className='text-md sm:text-xl font-semibold'>Properties Sold</h6>
                            <p className='text-xs sm:text-sm mb-3 '>Monthly sales performance</p>
                            <SalesChart />
                        </div>
                        <div className=' h-auto rounded-lg border border-gray-300 p-2 sm:p-4'>
                            <h6 className='text-md sm:text-xl font-semibold'>User Growth</h6>
                            <p className='text-xs sm:text-sm mb-3 '>New user registrations</p>
                            <UserGrowthChart />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Analytics