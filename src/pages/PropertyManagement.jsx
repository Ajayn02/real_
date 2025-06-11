import React from 'react'
import { Search } from 'lucide-react'
import DeleteModal from '../components/DeleteModal'
import EditModal from '../components/EditModal'
import { Link } from 'react-router-dom'

function PropertyManagement() {
    return (
        <>
            <div className='w-full min-h-screen p-2 sm:p-4'>
                <div className='w-full grid grid-cols-12 mb-4 '>
                    <div className=' col-span-12 sm:col-span-9'>
                        <h2 className='text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold'>Properties Management</h2>
                        <p className='text-gray-500 text-xs sm:text-sm'>Manage and monitor all property listings</p>
                    </div>
                    <div className='mt-3 sm:mt-0 flex items-center justify-baseline sm:justify-end  col-span-12 sm:col-span-3'>
                        <button className='px-2 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-md border bg-gray-800 text-white font-semibold rounded-lg cursor-pointer'>+ Add Property</button>
                    </div>
                </div>
                <div className='w-full h-auto rounded-lg border border-gray-300 p-6'>
                    <div className=' w-full flex items-center  '>
                        <div className=' h-9 flex items-center border border-gray-400 border-r-0 rounded-tl-lg rounded-bl-lg'>
                            <Search size={20} color='#9CA3AF' className='mx-2' />
                        </div>
                        <input type="text" className='w-full border border-gray-400 h-9 border-l-0 rounded-tr-lg rounded-br-lg focus:outline-none focus:ring-0 ' placeholder='Search properties...' />
                    </div>

                    <div className='w-full  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   '>
                        <div className='flex justify-center items-center  mt-6 '>
                            <div className='h-auto w-[280px] flex flex-col rounded-md border border-gray-300  transition-transform duration-300 hover:scale-101 relative'>

                                <div className='absolute top-0 left-0  h-auto z-10 w-full flex justify-end pe-2 pt-2'>
                                    <button className=' px-3 py-2 border border-gray-300 rounded-md me-2 cursor-pointer'>
                                        <i className="fa-solid fa-trash fa-lg" style={{ color: "#82181a" }} />
                                    </button>
                                    <button className=' px-3 py-2 border border-gray-300 rounded-md cursor-pointer' >
                                        <i className="fa-solid fa-pen-to-square fa-lg" />
                                    </button>
                                </div>

                                <div className='w-full h-[220px]'>
                                    <img src='https://cdn.pixabay.com/photo/2020/01/03/05/36/house-4737447_1280.png' className='w-[100%] h-[100%]' alt="No image" />
                                </div>
                                <h1 className='text-xl font-semibold px-3 pt-1 mt-5'>4BHK For sale</h1>
                                <p className='text-gray-400 px-3 font-semibold'><i className="fa-solid fa-location-dot  pt-1 me-1" />Calicut</p>
                                <div className='flex justify-between px-3 mt-2 mb-3 font-semibold'>
                                    <div className='flex items-center'><p>₹ 400000</p></div>
                                    <Link to={`/view/6842ba30a30c55dd2a6c00aa`} className=' border border-gray-300 px-2 py-1 rounded hover:border-none hover:bg-gray-700 hover:text-white hover:border-gray-700 '>View More</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default PropertyManagement