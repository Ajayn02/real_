import React, { useState } from 'react'
import { fetchData } from '../hooks/fetchData'
import { savedPosts } from '../service/saveService'
import { Link } from 'react-router-dom';
import { image_url } from '../service/base_url';
import { mutateData } from '../hooks/mutateData';
import toast from 'react-hot-toast';

function Save() {

    const [icon, setIcon] = useState(true)
    const { data, isError, isLoading, error } = fetchData('save', savedPosts)

    const { mutation } = mutateData()

    const handleUnsave = async (id) => {
        setIcon(false)
        mutation.mutate({ key: 'save', method: 'DELETE', endPoint: `/save/${id}`, header: '', data: {} },
            {
                onError: (error) => {
                    toast.error('Something went wrong')
                    console.log(error);
                }
            },
        )
    }

    if (isLoading) {
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
            <div className='w-full py-5'>
                <h1 className='text-2xl font-semibold px-5  '><i className="fa-solid fa-bookmark me-1"></i>Saved</h1>
                {
                    data?.data?.data?.length > 0 ?
                        <div className='w-full  h-auto  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   '>
                            {
                                data?.data?.data?.map((item) => (
                                    <div key={item?.id} className='flex justify-center items-center  mt-6'>
                                        <div className='h-auto w-[280px] flex flex-col rounded-md border border-gray-300  transition-transform duration-300 hover:scale-101 relative'>
                                            <div className=' w-full absolute flex justify-end items-center h-12 px-3'>
                                                <div onClick={() => { handleUnsave(item?.savedId) }} className='cursor-pointer'>
                                                    {
                                                        icon ?
                                                            <i className="fa-solid fa-bookmark fa-xl" />
                                                            :
                                                            <i className="fa-regular fa-bookmark fa-xl" />
                                                    }
                                                </div>
                                            </div>
                                            <div className='w-full h-[220px]  '>
                                                <img src={`${image_url}/uploads/${item?.image}`} className='w-[100%] h-[100%]' alt="" />
                                            </div>
                                            <h1 className='text-xl px-3 font-semibold  pt-1 mt-5'>{item?.title}</h1>
                                            <p className='text-gray-400 px-3 font-semibold'><i className="fa-solid fa-location-dot  pt-1 me-1" />{item?.location}</p>
                                            <div className='flex justify-between px-3 mt-2 mb-3 font-semibold'>
                                                <div className='flex items-center'><p>₹ {item?.price}</p></div>
                                                <Link to={`/view/${item?.id}`} className=' border border-gray-300 px-2 py-1 rounded hover:border-none hover:bg-gray-700 hover:text-white hover:border-gray-700 '>View More</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        :
                        <div className='w-full h-[80vh] flex items-center justify-center'>
                            <h2 className='text-xl  sm:text-2xl  '>No post saved yet</h2>
                        </div>
                }
            </div>
        </>
    )
}

export default Save