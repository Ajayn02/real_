import React from 'react'
import EditUser from '../components/EditUser'
import AddProperty from '../components/AddProperty'
import EditModal from '../components/EditModal'
import DeleteModal from '../components/DeleteModal'

function Account() {
    return (
        <>
            <div className='w-full min-h-[70vh]   flex justify-center items-center'>
                <div className=' w-[300px] sm:w-[320px] px-5 py-3  h-70 rounded-lg flex flex-col items-center shadow-sm shadow-gray-400'>
                    <EditUser />
                    <div className='h-70   w-full flex justify-center items-center flex-col'>
                        <div className='h-20 w-20  ' style={{ borderRadius: "40px" }}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&s" className='w-[100%] h-full' alt="" />
                        </div>
                        <h3 className='mt-2 text-lg font-semibold'>User</h3>
                        <p>abce@gmail.com</p>

                    </div>
                </div>
            </div>
            <div className='w-full h-auto py-5 '>
                <div className='flex justify-between px-5'>
                    <div className='flex items-center'>
                        <i className="fa-solid fa-user fa-lg me-1" />
                        <h1 className=' text-2xl font-semibold'>My Posts</h1>
                    </div>
                    <div className='flex items-center'>
                        <AddProperty />
                    </div>
                </div>
                <div className='w-full  h-auto  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   '>

                    <div className='flex justify-center items-center  mt-6 '>
                        <div className='h-auto w-[300px] flex flex-col rounded-md border border-gray-300 p-4 transition-transform duration-300 hover:scale-101 relative'>

                            <div className='absolute top-0 left-0  h-auto z-10 w-full flex justify-end pe-2 pt-2'>
                                <DeleteModal />
                                <EditModal />
                            </div>

                            <div className='w-full h-[220px]'>
                                <img src="https://realspace-backend.onrender.com/uploads/image-1732895362895-house.png" className='w-[100%] h-[100%]' alt="" />
                            </div>
                            <h1 className='text-xl font-semibold ps-1 pt-1 mt-5'>3BHK House For Sale ...</h1>
                            <p className='text-gray-400 font-semibold'><i className="fa-solid fa-location-dot ps-1 pt-1 me-1" />Kochi</p>
                            <div className='flex justify-between px-1 mt-2 font-semibold'>
                                <div className='flex items-center'><p>₹ 500000</p></div>
                                <button className=' border border-gray-300 px-2 py-1 rounded hover:border-none hover:bg-gray-700 hover:text-white hover:border-gray-700 '>View More</button>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center items-center  mt-6 '>
                        <div className='h-auto w-[300px] flex flex-col rounded-md border border-gray-300 p-4 transition-transform duration-300 hover:scale-101 relative'>

                            <div className='absolute top-0 left-0  h-auto z-10 w-full flex justify-end pe-2 pt-2'>
                                <DeleteModal />
                                <EditModal />
                            </div>

                            <div className='w-full h-[220px]'>
                                <img src="https://realspace-backend.onrender.com/uploads/image-1732895362895-house.png" className='w-[100%] h-[100%]' alt="" />
                            </div>
                            <h1 className='text-xl font-semibold ps-1 pt-1 mt-5'>3BHK House For Sale ...</h1>
                            <p className='text-gray-400 font-semibold'><i className="fa-solid fa-location-dot ps-1 pt-1 me-1" />Kochi</p>
                            <div className='flex justify-between px-1 mt-2 font-semibold'>
                                <div className='flex items-center'><p>₹ 500000</p></div>
                                <button className=' border border-gray-300 px-2 py-1 rounded hover:border-none hover:bg-gray-700 hover:text-white hover:border-gray-700 '>View More</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center  mt-6 '>
                        <div className='h-auto w-[300px] flex flex-col rounded-md border border-gray-300 p-4 transition-transform duration-300 hover:scale-101 relative'>

                            <div className='absolute top-0 left-0  h-auto z-10 w-full flex justify-end pe-2 pt-2'>
                                <DeleteModal />
                                <EditModal />
                            </div>

                            <div className='w-full h-[220px]'>
                                <img src="https://realspace-backend.onrender.com/uploads/image-1732895362895-house.png" className='w-[100%] h-[100%]' alt="" />
                            </div>
                            <h1 className='text-xl font-semibold ps-1 pt-1 mt-5'>3BHK House For Sale ...</h1>
                            <p className='text-gray-400 font-semibold'><i className="fa-solid fa-location-dot ps-1 pt-1 me-1" />Kochi</p>
                            <div className='flex justify-between px-1 mt-2 font-semibold'>
                                <div className='flex items-center'><p>₹ 500000</p></div>
                                <button className=' border border-gray-300 px-2 py-1 rounded hover:border-none hover:bg-gray-700 hover:text-white hover:border-gray-700 '>View More</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center  mt-6 '>
                        <div className='h-auto w-[300px] flex flex-col rounded-md border border-gray-300 p-4 transition-transform duration-300 hover:scale-101 relative'>

                            <div className='absolute top-0 left-0  h-auto z-10 w-full flex justify-end pe-2 pt-2'>
                                <DeleteModal />
                                <EditModal />
                            </div>

                            <div className='w-full h-[220px]'>
                                <img src="https://realspace-backend.onrender.com/uploads/image-1732895362895-house.png" className='w-[100%] h-[100%]' alt="" />
                            </div>
                            <h1 className='text-xl font-semibold ps-1 pt-1 mt-5'>3BHK House For Sale ...</h1>
                            <p className='text-gray-400 font-semibold'><i className="fa-solid fa-location-dot ps-1 pt-1 me-1" />Kochi</p>
                            <div className='flex justify-between px-1 mt-2 font-semibold'>
                                <div className='flex items-center'><p>₹ 500000</p></div>
                                <button className=' border border-gray-300 px-2 py-1 rounded hover:border-none hover:bg-gray-700 hover:text-white hover:border-gray-700 '>View More</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center  mt-6 '>
                        <div className='h-auto w-[300px] flex flex-col rounded-md border border-gray-300 p-4 transition-transform duration-300 hover:scale-101 relative'>

                            <div className='absolute top-0 left-0  h-auto z-10 w-full flex justify-end pe-2 pt-2'>
                                <DeleteModal />
                                <EditModal />
                            </div>

                            <div className='w-full h-[220px]'>
                                <img src="https://realspace-backend.onrender.com/uploads/image-1732895362895-house.png" className='w-[100%] h-[100%]' alt="" />
                            </div>
                            <h1 className='text-xl font-semibold ps-1 pt-1 mt-5'>3BHK House For Sale ...</h1>
                            <p className='text-gray-400 font-semibold'><i className="fa-solid fa-location-dot ps-1 pt-1 me-1" />Kochi</p>
                            <div className='flex justify-between px-1 mt-2 font-semibold'>
                                <div className='flex items-center'><p>₹ 500000</p></div>
                                <button className=' border border-gray-300 px-2 py-1 rounded hover:border-none hover:bg-gray-700 hover:text-white hover:border-gray-700 '>View More</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Account