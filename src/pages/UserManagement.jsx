import React, { useState, useRef, useEffect } from 'react'
import { Search } from 'lucide-react'
import { getAllUsers } from '../service/adminServices'
import { fetchData } from '../hooks/fetchData'
import { image_url } from '../service/base_url'
import EditUser from '../components/EditUser'

function UserManagement() {
    const [search, setSearch] = useState('')
    const [debouncedSearch, setDebouncedSearch] = useState(search)
    const [initialLoad, setInitialLoad] = useState(true)
    const inputRef = useRef()

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(search)
        }, 500)
        return () => {
            clearTimeout(handler)
        }
    }, [search])

    const { data, isLoading, error, isError } = fetchData('user', getAllUsers, { search: debouncedSearch })

    useEffect(() => {
        if (!isLoading) {
            setInitialLoad(false)
        }
    }, [isLoading])

    if (initialLoad) {
        return (
            <div className='flex justify-center items-center h-screen'><div className="w-12 h-12 border-4 border-gray-800 border-t-transparent rounded-full animate-spin"></div></div>
        )
    }

    if (isError) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="bg-red-100 text-red-700 px-6 py-4 rounded-md ">
                    <p className="font-semibold">Something went wrong</p>
                    <p className="text-sm mt-1">{error?.message || 'Failed to fetch data.'}</p>
                </div>
            </div>
        )
    }

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
                        <input type="text" className='w-full border border-gray-400 h-9 border-l-0 rounded-tr-lg rounded-br-lg focus:outline-none focus:ring-0 ' placeholder='Search users...' onChange={(e) => { setSearch(e.target.value) }} ref={inputRef} />
                    </div>
                    <div className=' w-full min-h-[62vh] overflow-x-auto'>
                        <table className="min-w-[700px] md:min-w-full table-auto bg-white text-sm text-left ">
                            <thead className="bg-gray-100 text-gray-600  uppercase text-xs tracking-wider">
                                <tr>
                                    <th className="px-2 py-3">Name</th>
                                    <th className="px-2 py-3">Email</th>
                                    <th className="px-2 py-3">Role</th>
                                    <th className="px-2 py-3">Status</th>
                                    <th className="px-2 py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {
                                    data?.data?.data?.map((item) => (
                                        <tr key={item.id} className="hover:bg-gray-50">
                                            <td className="px-2 py-3 flex items-center" >
                                                <img src={item?.image ? `${image_url}/uploads/${item.image}` : `https://cdn-icons-png.flaticon.com/512/149/149071.png`} width={"50px"} height={"50px"} alt="" className=' border-3 border-gray-200 rounded-4xl me-3' />
                                                <p>{item?.name}</p>
                                            </td>
                                            <td className="px-2 py-3">{item.email}</td>
                                            <td className="px-2 py-3">{item.role}</td>
                                            <td className="px-2 py-3">
                                                <p className='text-blue-500 font-semibold'>{item.isActive ? `Active` : `Deactive`}</p>
                                            </td>
                                            <td className="px-2 py-3 ">
                                                <EditUser user={item} />
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserManagement