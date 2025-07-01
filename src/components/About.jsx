import React from 'react'

function About() {
    return (
        <>
            <div className='w-[100%] min-h-auto  px-8  sm:px-13 py-13 pt-8'>
                <div className=" rounded-2xl h-full bg-gray-100 ">
                    <div className='px-10 pt-10 pb-10'>
                        <h2 className='text-2xl sm:text-3xl font-semibold'>What Make Us <br />
                            Different?</h2>
                        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 min-h-70 gap-15'>
                            <div className=' flex flex-col p-0 '>
                                <div className=' w-auto'>
                                    <i className="fa-solid fa-briefcase fa-2x  border-4 border-gray-300 p-4 " style={{ borderRadius: "36px" }} />
                                </div>
                                <h1 className='my-3 text-lg font-semibold'>Experienced</h1>
                                <p className='text-justify'>Our experience of 25 years of
                                    building and making
                                    achievements in the world
                                    of development</p>
                            </div>
                            <div className=' flex flex-col p-0 '>
                                <div className=' w-auto'>
                                    <i className="fa-solid fa-tag fa-2x  border-4 border-gray-300"
                                        style={{ borderRadius: "36px", padding: "15px 17px" }} />
                                </div>
                                <h1 className='my-3 text-lg font-semibold'>competitive price</h1>
                                <p className='text-justify'>The prices we offer you are
                                    very competitive without
                                    reducing the quality of the
                                    company's work in the
                                    slightest</p>
                            </div>
                            <div className=' flex flex-col p-0 '>
                                <div className=' w-auto'>
                                    <i className="fa-solid fa-stopwatch fa-2x  border-4 border-gray-300 p-4 "
                                        style={{ borderRadius: "36px", padding: "15px 17px" }} />
                                </div>
                                <h1 className='my-3 text-lg font-semibold'>Experienced</h1>
                                <p className='text-justify'>We prioritize the quality of
                                    our work and finish it on time</p>
                            </div>
                            <div className=' flex flex-col p-0 '>
                                <div className=' w-auto'>
                                    <i className="fa-solid fa-shield-halved fa-2x  border-4 border-gray-300 p-4 "
                                        style={{ borderRadius: "36px" }} />
                                </div>
                                <h1 className='my-3 text-lg font-semibold'>Best Materials</h1>
                                <p className='text-justify'>The material determines the
                                    building itself so we
                                    recommend that you use
                                    the best & quality materials
                                    in its class.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About