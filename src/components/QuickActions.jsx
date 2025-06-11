import React from 'react'
import { TableProperties, Users, Flag, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'


function QuickActions() {
    return (
        <>
            <div className=' min-h-100 px-4 sm:px-8 mt-5 md:mt-0'>
                <div className='border border-gray-300 w-full h-full p-3  rounded-lg'>
                    <h6 className='text-2xl font-semibold mb-5'>Quick Actions</h6>
                    <div className=' w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4'>
                        <Link to={"/dashboard-property"} className=' rounded-lg flex flex-col p-3 min-h-30 cursor-pointer bg-gray-50 hover:shadow-sm'>
                            <TableProperties size={30} />
                            <h6 className='text-lg font-semibold mt-2'>Property Management</h6>
                            <p className='text-sm mt-1'>Manage property listing...</p>
                        </Link>
                        <Link to={'/dashboard-user'} className='hover:shadow-sm rounded-lg flex flex-col p-3 min-h-30 cursor-pointer  bg-gray-50'>
                            <Users size={30} />
                            <h6 className='text-lg font-semibold mt-2'>User Management</h6>
                            <p className='text-sm mt-1'>Manage user actions...</p>
                        </Link>
                        <Link to={'/dashboard-report'} className='hover:shadow-sm rounded-lg flex flex-col p-3 min-h-30 cursor-pointer  bg-gray-50'>
                            <Flag size={30} />
                            <h6 className='text-lg font-semibold mt-2'>Report Management</h6>
                            <p className='text-sm mt-1'>Manage user reports...</p>
                        </Link>
                        <div className='hover:shadow-sm rounded-lg flex flex-col p-3 min-h-30 cursor-pointer  bg-gray-50'>
                            <Eye size={30} />
                            <h6 className='text-lg font-semibold mt-2'>Analytics</h6>
                            <p className='text-sm mt-1'>Analys with charts...</p>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default QuickActions