import React from 'react'
import DashboardCards from '../components/DashboardCards'
import RecentProperties from '../components/RecentProperties'
import QuickActions from '../components/QuickActions'

function Dashboard() {
    return (
        <>
            <div className='w-full min-h-[100vh]'>
                <div className='w-full p-2 sm:p-4 '>
                    <div className='flex items-center'>
                        <i className="fa-solid fa-house-chimney fa-xl me-1" style={{ color: "#000000", }} />
                        <h1 className='text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold'>Dashboard Overview</h1>
                    </div>
                    <p className='text-gray-500 text-xs sm:text-sm ms-8'>Welcome back! Here's what's happening with your properties.</p>
                </div>
                <DashboardCards />
                <div className=' w-full '>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <RecentProperties />
                        <QuickActions/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard