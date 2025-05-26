import React from 'react'
import './viewmore.css'
import { Link } from 'react-router-dom'
import ReportModal from '../components/ReportModal'

function Viewmore() {
    return (
        <>
            <div className='w-full min-h-screen my-3 flex justify-center items-center'>
                <div className='w-[90%] sm:w-[80%]  p-1 sm:p-5 grid grid-cols- md:grid-cols-2'>
                    <div className=' flex justify-center items-center p-3'>
                        <img src="https://pngimg.com/d/house_PNG44.png" className='w-full h-full' alt="" />
                    </div>
                    <div className='ps-4 flex flex-col  justify-center '>
                        <h2 className='text-xl sm:text-3xl md:text-2xl lg:text-3xl 2xl:text-4xl  font-semibold my-2'>3BHK House For Sale</h2>
                        <p className='text-gray-400 font-semibold 2xl:text-2xl'><i className="fa-solid fa-location-dot me-1" />Kochi</p>
                        <p className='font-semibold mt-2 text-md sm:text-lg md:text-md lg:text-lg 2xl:text-2xl '>₹ 5000000</p>
                        <p className='font-semibold mt-2 text-md sm:text-lg md:text-md lg:text-lg 2xl:text-2xl'>1700 sq.ft</p>
                        <p className='font-semibold mt-2 text-md sm:text-lg md:text-md lg:text-lg 2xl:text-2xl'>Apartment Type : 3BHK</p>
                        <p className='mt-2 text-md sm:text-lg md:text-md lg:text-lg 2xl:text-2xl '>Lift fecillities, Road Access</p>
                        <p className='mt-2 text-md sm:text-lg md:text-md lg:text-lg 2xl:text-2xl'>Hilite Mall - 2km , Bus Stand- 5km</p>
                        <div className='flex my-3'>
                            <button className=' px-3 py-1 rounded-md viewbtn me-2' id='loc'>
                                <span><i className="fa-solid fa-location-dot fa-lg " style={{ color: "black" }} /></span>
                            </button>
                            <button className='px-3 py-1 rounded-md viewbtn me-2' id='msg'>
                                <span><i className="fa-regular fa-message fa-lg " style={{ color: "black" }} /></span>
                            </button>
                            <Link to={'/save'} className='px-3 py-1 rounded-md viewbtn me-2' id='save'>
                                <span><i className="fa-regular fa-bookmark fa-lg " style={{ color: "black" }} /></span>
                            </Link>
                            <ReportModal/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Viewmore