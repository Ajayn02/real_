import TakeAction from '../components/TakeAction'

function ReportManagement() {
    return (
        <>
            <div className='w-full min-h-screen p-2 sm:p-4'>
                <div className='w-full mb-4 '>
                    <div className=''>
                        <h2 className='text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold'>Report Management</h2>
                        <p className='text-gray-500 text-xs sm:text-sm'>Monitor and manage user reports and activity</p>
                    </div>

                </div>
                <div className='w-full h-auto rounded-lg border border-gray-300 p-3 sm:p-6'>
                    {/* buttons */}
                    <div className='w-full px-2 py-2 grid grid-cols-1 sm:grid-cols-3 gap-y-3 sm:gap-x-3 rounded-lg
                     bg-gray-300'>
                        <button className='py-1 text-gray-600 font-semibold cursor-pointer w-full rounded-md
                         bg-white focus:bg-gray-100 '>Pending Reports</button>
                        <button className='py-1 text-gray-600 font-semibold cursor-pointer w-full rounded-md bg-white focus:bg-gray-100'>Resolved</button>
                        <button className='py-1 text-gray-600 font-semibold cursor-pointer w-full rounded-md bg-white focus:bg-gray-100'>All Reports</button>
                    </div>

                    {/* table */}
                    <div className='w-full  mt-3'>
                        <div className='w-full  border min-h-[61vh]  rounded-lg overflow-x-auto'>
                            <table className="min-w-full table-auto bg-white text-sm text-left border border-gray-200">
                                <thead className="bg-gray-100 text-gray-600 uppercase text-xs tracking-wider">
                                    <tr>
                                        <th className="px-2 py-3 border-b">Property</th>
                                        <th className="px-2 py-3 border-b">Reason</th>
                                        <th className="px-2 py-3 border-b">Description</th>
                                        <th className="px-2 py-3 border-b">Reported By</th>
                                        <th className="px-2 py-3 border-b">Date</th>
                                        <th className="px-2 py-3 border-b">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-2 py-3">Cozy Studio Loft</td>
                                        <td className="px-2 py-3">Misleading Information</td>
                                        <td className="px-2 py-3">The listing shows 2 bedrooms but the property only has 1 bedroom.</td>
                                        <td className="px-2 py-3">john.doe@email.com</td>
                                        <td className="px-2 py-3">Jan 15, 2024, 04:00 PM</td>
                                        <td className="px-2 py-3 text-yellow-600 font-medium">
                                            <TakeAction />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ReportManagement