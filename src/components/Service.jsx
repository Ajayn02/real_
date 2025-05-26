import React from 'react'
import service1 from '../../public/service1.svg'
import service2 from '../../public/service2.svg'
import service3 from '../../public/service3.svg'

function Service() {
    return (
        <>
            <div className=' w-[100%] min-h-auto  px-8 sm:px-13 py-13'>
                <div className=" rounded-2xl h-full bg-gray-100 ">
                    <div className='px-5 sm:px-10 pt-10 pb-10'>
                        <h2 className='text-2xl sm:text-3xl font-semibold'>Our Excellent <br /> Services</h2>
                        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 min-h-70 gap-15'>
                            <div className=' flex flex-col p-0 '>
                                <img src={service1} alt="" className='h-[100%] w-[100%]' />
                                <h2 className='text-xl  mt-5 mb-2 font-semibold'>Industrial</h2>
                                <p className='text-justify md:mb-6 lg:mb-0' >Industrial development is our main
                                    line of business. We do Factory
                                    Construction, Warehouse and others</p>
                            </div>
                            <div className='flex flex-col '>
                                <img src={service2} alt="" className='h-[100%] w-[100%]' />
                                <h2 className='text-xl mt-5 mb-2 font-semibold'>Commercial</h2>
                                <p className='text-justify'>Our experience building in the
                                    Commercial field includes Showrooms,
                                    Supermalls and Office Buildings</p>
                            </div>
                            <div className='flex flex-col '>
                                <img src={service3} alt="" className='h-[100%] w-[100%]' />
                                <h2 className='text-xl mt-5 mb-2 font-semibold'>Resedential</h2>
                                <p className='text-justify'>Residential development is the
                                    beginning that has shaped us to this
                                    day. Our development includes
                                    Houses & Apartments</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service