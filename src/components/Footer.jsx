import React from 'react'

function Footer() {
    return (
        <>
            <div className='w-[100%]  min-h-80 px-8  sm:px-13 py-13'>
                <div className=" grid grid-cols-12 h-auto ">
                    <div className="col-span-12 md:col-span-6  flex flex-col pe-8 ">
                        <h1 className='mb-3 text-lg font-semibold'>Realspace</h1>
                        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam culpa facilis illo laudantium sapiente, architecto ipsum obcaecati aperiam ab dolore? Modi deserunt cumque minima quis nesciunt est, animi odit atque!</p>
                        <div className='flex mt-5'>
                            <i className="fa-brands fa-instagram fa-2x me-8" />
                            <i className="fa-brands fa-linkedin fa-2x me-8" />
                            <i className="fa-brands fa-facebook fa-2x me-8" />
                            <i className="fa-brands fa-x-twitter fa-2x me-8" />
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-3  mt-10 md:mt-0  flex flex-col pe-4 gap-3">
                        <h1 className=' text-lg font-semibold'>Company</h1>
                        <p>About</p>
                        <p>Home</p>
                        <p>Login</p>
                    </div>
                    <div className="col-span-12 md:col-span-3 mt-10 md:mt-0 flex flex-col pe-4 gap-3">
                        <h1 className=' text-lg font-semibold'>More</h1>
                        <p>About</p>
                        <p>Home</p>
                        <p>Login</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer