import React, { useEffect, useState, useRef } from 'react'
import { Search } from 'lucide-react'
import DeleteModal from '../components/DeleteModal'
import EditModal from '../components/EditModal'
import { Link } from 'react-router-dom'
import AddProperty from '../components/AddProperty'
import { fetchData } from '../hooks/fetchData'
import { getAdminPosts } from '../service/adminServices'
import { image_url } from '../service/base_url'

function PropertyManagement() {
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

    const { data, isLoading, error, isError } = fetchData('posts', getAdminPosts, { search: debouncedSearch })

    useEffect(() => {
        if (!isLoading) {
            setInitialLoad(false)
        }
    }, [isLoading])

    if (initialLoad) {
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
                <div className='w-full grid grid-cols-12 mb-3'>
                    <div className='col-span-12 sm:col-span-9'>
                        <h2 className='text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold'>Properties Management</h2>
                        <p className='text-gray-500 text-xs sm:text-sm'>Manage and monitor all property listings</p>
                    </div>
                    <div className='mt-3 sm:mt-0 flex items-center justify-baseline sm:justify-end col-span-12 sm:col-span-3'>
                        <AddProperty />
                    </div>
                </div>

                <div className='w-full h-auto rounded-lg border border-gray-300 p-6'>
                    <div className='w-full flex items-center'>
                        <div className='h-9 flex items-center border border-gray-400 border-r-0 rounded-tl-lg rounded-bl-lg'>
                            <Search size={20} color='#9CA3AF' className='mx-2' />
                        </div>
                        <input
                            type="text"
                            ref={inputRef}
                            className='w-full border border-gray-400 h-9 border-l-0 rounded-tr-lg rounded-br-lg focus:outline-none focus:ring-0'
                            defaultValue={search}
                            onChange={(e) => { setSearch(e.target.value) }}
                            placeholder='Search properties...'
                        />
                    </div>

                    {
                        isLoading ? (
                            <div className='w-full h-[300px] flex justify-center items-center'>
                                <div className="w-10 h-10 border-4 border-gray-800 border-t-transparent rounded-full animate-spin"></div>
                            </div>
                        ) : data?.data?.data?.length > 0 ? (
                            <div className='w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                                {
                                    data?.data?.data?.map((item) => (
                                        <div key={item?.id} className='flex justify-center items-center mt-5 '>

                                            <div className='h-auto w-[280px] flex flex-col rounded-md border border-gray-300 transition-transform duration-300 hover:scale-101 
                                            relative'>
                                                <div className='absolute top-0 left-0 h-auto z-10 w-full flex justify-end pe-2 pt-2'>
                                                    <DeleteModal id={item?.id} />
                                                    {
                                                        item?.isSoldout ? (
                                                            <div className='px-3 py-2 border border-gray-300 rounded-md cursor-pointer bg-gray-200'>
                                                                <h6 className='font-semibold'>Soldout</h6>
                                                            </div>
                                                        ) : (
                                                            <EditModal data={item} />
                                                        )
                                                    }
                                                </div>

                                                <div className='w-full h-[220px] relative'>
                                                    {
                                                    item.isActive == false &&
                                                    <div className='w-full h-full  absolute inset-0 bg-white/50 z-10 flex justify-center items-center'>
                                                            <h3 className='font-semibold text-black text-2xl'>Disabled</h3>
                                                    </div>
                                                }

                                                    <img src={`${image_url}/uploads/${item?.image}`} className='w-[100%] h-[100%]' alt="No image" />
                                                </div>
                                                <h1 className='text-xl font-semibold px-3 pt-1 mt-5'>{item?.title}</h1>
                                                <p className='text-gray-400 px-3 font-semibold'>
                                                    <i className="fa-solid fa-location-dot pt-1 me-1" />{item?.location}
                                                </p>
                                                <div className='flex justify-between px-3 mt-2 mb-3 font-semibold'>
                                                    <div className='flex items-center'><p>₹ {item?.price}</p></div>
                                                    <Link to={`/view/${item?.id}`} className='border border-gray-300 px-2 py-1 rounded hover:border-none hover:bg-gray-700 hover:text-white hover:border-gray-700'>
                                                        View More
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        ) : (
                            <div className='w-full h-[60vh] flex justify-center items-center'>
                                <h6 className='font-semibold text-md sm:text-lg'>No post added yet</h6>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default PropertyManagement
