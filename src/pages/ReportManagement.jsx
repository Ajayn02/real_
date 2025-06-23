import TakeAction from '../components/TakeAction'
import { fetchData } from '../hooks/fetchData'
import { getAllReports } from '../service/adminServices'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


function ReportManagement() {
    const [button, setButton] = useState('pending')
    const [tableData, setTableData] = useState([])
    const navigate = useNavigate()

    const { data, isError, isLoading, error } = fetchData('reports', getAllReports, {})

    useEffect(() => {
        dataHandler()
    }, [button, data])

    const dataHandler = () => {
        if (!data?.data?.data) return
        if (button === 'pending') {
            const pending = data?.data?.data.filter((item) => item.status === 'pending')
            setTableData(pending)
        } else if (button === 'resolved') {
            const resolved = data?.data?.data.filter((item) => item.status === 'resolved')
            setTableData(resolved)
        } else if (button === 'allReport') {
            setTableData(data?.data?.data)
        }
    }

    const formatDate = (isoDate) => {
        const date = new Date(isoDate)
        const day = String(date.getDate()).padStart(2, '0')
        const month = String(date.getMonth() + 1).padStart(2, '0') // Months are 0-indexed
        const year = date.getFullYear()
        const hours = String(date.getHours()).padStart(2, '0')
        const minutes = String(date.getMinutes()).padStart(2, '0')
        return `${day}-${month}-${year} : ${hours}.${minutes}`
    }

    const handlePostDetails = async (id) => {
        navigate(`/view/${id}`)
    }

    if (isLoading) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <div className="w-12 h-12 border-4 border-gray-800 border-t-transparent rounded-full animate-spin"></div>
            </div>
        )
    }

    if (isError) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="bg-red-100 text-red-700 px-6 py-4 rounded-md">
                    <p className="font-semibold">Something went wrong</p>
                    <p className="text-sm mt-1">{error?.message || 'Failed to fetch data.'}</p>
                </div>
            </div>
        )
    }
    return (
        <>
            <div className='w-full min-h-screen p-2 sm:p-4'>
                <div className='w-full mb-4 '>
                    <div className=''>
                        <h2 className='text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold'>Report Management</h2>
                        <p className='text-gray-500 text-xs sm:text-sm'>Monitor and manage user reports and
                            activity</p>
                    </div>
                </div>
                <div className='w-full h-auto rounded-lg border border-gray-300 p-3 sm:p-6'>
                    <div className='w-full px-2 py-2 grid grid-cols-1 sm:grid-cols-3 gap-y-3 sm:gap-x-3 rounded-lg
                     bg-gray-300'>
                        <button className={`py-1 text-gray-600 font-semibold cursor-pointer w-full rounded-md 
                             ${button === 'pending' ? 'bg-gray-200' : 'bg-white'}`} onClick={() =>
                                setButton('pending')}>Pending Reports </button>
                        <button className={`py-1 text-gray-600 font-semibold cursor-pointer w-full rounded-md 
                             ${button === 'resolved' ? 'bg-gray-200' : 'bg-white'}`} onClick={() =>
                                setButton('resolved')}>Resolved</button>
                        <button className={`py-1 text-gray-600 font-semibold cursor-pointer w-full rounded-md 
                             ${button === 'allReport' ? 'bg-gray-200' : 'bg-white'}`} onClick={() =>
                                setButton('allReport')}>All Reports</button>
                    </div>

                    <div className='w-full   mt-3'>
                        <div className='w-full min-h-[61vh]  rounded-lg overflow-x-auto'>
                            {
                                tableData?.length > 0 ?
                                    <table className="min-w-[1000px] lg:min-w-full table-auto bg-white text-sm text-left border
                             border-gray-200">
                                        <thead className="bg-gray-100 text-gray-600 uppercase text-xs tracking-wider">
                                            <tr>
                                                <th className="px-2 py-3 border-b">Property</th>
                                                <th className="px-2 py-3 border-b">Reason</th>
                                                <th className="px-2 py-3 border-b">Description</th>
                                                <th className="px-2 py-3 border-b">Reported By</th>
                                                <th className="px-2 py-3 border-b">Date</th>
                                                {
                                                    button !== 'pending' ?
                                                        <th className="px-2 py-3 border-b">Status</th>
                                                        :
                                                        <th className="px-2 py-3 border-b">Actions</th>
                                                }
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {
                                                tableData?.map((item) => (
                                                    <tr key={item?.id} className="hover:bg-gray-50">
                                                        <td onClick={() => { handlePostDetails(item.id) }} className="px-2 py-3 cursor-pointer"  >{item?.title}</td>
                                                        <td className="px-2 py-3">{item?.issue}</td>
                                                        <td className="px-2 py-3">{item?.issueDescription}</td>
                                                        <td className="px-2 py-3">{item.reporterEmail}</td>
                                                        <td className="px-2 py-3">{formatDate(item.reportDate)}</td>
                                                        {
                                                            button !== 'pending' ?
                                                                <td className='px-2 py-3 text-yellow-600 font-medium'>
                                                                    <p className='text-blue-500 font-semibold'>{item.status}</p>
                                                                </td>
                                                                :
                                                                <td className="px-2 py-3 text-yellow-600 font-medium">
                                                                    <TakeAction />
                                                                </td>
                                                        }
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                    :
                                    <div className='w-full min-h-[61vh]  flex items-center justify-center'>
                                        <h2 className='text-xl sm:text-2xl font-semibold '>No Reports</h2>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ReportManagement