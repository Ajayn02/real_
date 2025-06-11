import React from 'react'
import { Search, CalendarDays, X, Trash, Eye } from 'lucide-react'

function ReportManagement() {
    return (
        <>
            <div className='w-full min-h-screen p-2 sm:p-4'>
                <div className='w-full  mb-4 '>
                    <div className=''>
                        <h2 className='text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold'>Report Management</h2>
                        <p className='text-gray-500 text-xs sm:text-sm'>Monitor and manage user reports and activity</p>
                    </div>

                </div>
                <div className='w-full h-auto rounded-lg border border-gray-300 p-3 sm:p-6'>
                    <div className=' w-full flex items-center mb-5 '>
                        <div className=' h-9 flex items-center border border-gray-400 border-r-0 rounded-tl-lg rounded-bl-lg'>
                            <Search size={20} color='#9CA3AF' className='mx-2' />
                        </div>
                        <input type="text" className='w-full border border-gray-400 h-9 border-l-0 rounded-tr-lg rounded-br-lg focus:outline-none focus:ring-0 ' placeholder='Search users...' />
                    </div>

                    <div className='w-full '>
                        {/* <div className='w-full h-40 border rounded-lg overflow-x-auto '>
                             <table className="min-w-full table-auto bg-white text-sm text-left border border-gray-200">
                                <thead className="bg-gray-100 text-gray-600 uppercase text-xs tracking-wider">
                                    <tr>
                                        <th className="px-4 py-3 border-b">Property</th>
                                        <th className="px-4 py-3 border-b">Reason</th>
                                        <th className="px-4 py-3 border-b">Reported By</th>
                                        <th className="px-4 py-3 border-b">Date</th>
                                        <th className="px-4 py-3 border-b">Status</th>
                                        <th className="px-4 py-3 border-b">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-4 py-3">Cozy Studio Loft</td>
                                        <td className="px-4 py-3">Misleading Information</td>
                                        <td className="px-4 py-3">john.doe@email.com</td>
                                        <td className="px-4 py-3">Jan 15, 2024, 04:00 PM</td>
                                        <td className="px-4 py-3 text-yellow-600 font-medium">Pending</td>
                                        <td className="px-4 py-3">👀</td>
                                    </tr>
                                </tbody>
                            </table> 
                        </div> */}

                        <div className='w-full rounded-lg flex flex-col border border-gray-200 p-3 sm:p-6 bg-gray-200'>
                            <h6 className='font-semibold text-xl '>Cozy Studio Loft</h6>
                            <div className='flex '>
                                <p className='text-sm text-gray-500 me-3'>Reason: Misleading Information</p>
                                <p className='text-sm text-gray-500 me-3'>Reported by: john.doe@email.com</p>
                                <div className='flex items-center '><CalendarDays size={18} color='#9CA3AF' className='me-1' /><p className='text-sm text-gray-500'>Jan 15, 2024, 04:00 PM</p></div>
                            </div>
                            <div className='flex mt-2'>
                                <button className='flex mt-2 sm:mt-0 w-fit items-center border px-2.5 py-1.5 rounded-md me-3 '><X size={20} className='me-1' />Reject Report</button>
                                <button className='flex w-fit mt-2 sm:mt-0 items-center border px-2.5 py-1.5 rounded-md me-3 '><Trash size={20} className='me-1' />Delete Post</button>
                                <button className='flex w-fit mt-2 sm:mt-0 items-center border px-2.5 py-1.5 rounded-md me-3'><Eye size={20} className='me-1' />View Post</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ReportManagement