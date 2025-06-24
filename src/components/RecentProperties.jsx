import React from 'react'
import { Link } from 'react-router-dom'

function RecentProperties({ postData }) {
    return (
        <>
            <div className=' min-h-80  px-3 sm:px-8 '>
                <div className='border border-gray-300 w-full h-full p-3  rounded-lg'>
                    <h6 className='text-2xl font-semibold mb-5'>Recent Properties</h6>
                    {
                        postData?.length > 0 ?
                            <div className=' w-full h-full flex flex-col gap-y-5'>
                                {
                                    postData?.slice(0, 3).map((item) => (
                                        <Link key={item?.id} to={`/view/${item?.id}`} className=' rounded-lg flex justify-between p-2 bg-gray-100 mt-1'>
                                            <div className='flex flex-col'>
                                                <p className='font-semibold text-md'>{item?.title}</p>
                                                <p className='text-sm text-gray-500'>{item?.location}</p>
                                            </div>
                                            <p className='font-semibold'>₹ {item?.price}</p>
                                        </Link>
                                    ))
                                }
                            </div> :
                            <h6 className='text-md sm:text-lg font-semibold text-center '>No post added yet</h6>
                    }

                </div>
            </div >
        </>
    )
}

export default RecentProperties