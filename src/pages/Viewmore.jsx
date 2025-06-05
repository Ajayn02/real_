import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ReportModal from '../components/ReportModal'
import { fetchData } from '../hooks/fetchData'
import { getUniquePost } from '../service/postService'
import { image_url } from '../service/base_url'
import { mutateData } from '../hooks/mutateData'
import './viewmore.css'
import toast from 'react-hot-toast'


function Viewmore() {

    const { id } = useParams()

    const { data, isError, isLoading, error } = fetchData('post', getUniquePost, { id })
    // console.log(data?.data?.data);


    const { mutation } = mutateData()

    const handleSave = async (id) => {
        try {
            mutation.mutate({ key: 'save', method: 'POST', endPoint: '/save', header: '', data: { postId: id } },
                {
                    onSuccess: (result) => {
                        console.log(result);
                    },
                    onError: (error) => {
                        console.log(error);
                    }
                }
            )
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong')
        }

    }
    if (isLoading) {
        return (
            <div className='flex justify-center items-center h-screen'><div className="w-12 h-12 border-4 border-gray-800 border-t-transparent rounded-full animate-spin"></div></div>
        )
    }

    return (
        <>
            <div className='w-full min-h-screen my-3 flex justify-center items-center'>
                <div className='w-[90%] sm:w-[80%]  p-1 sm:p-5 grid grid-cols- md:grid-cols-2'>
                    <div className=' flex justify-center items-center p-3'>
                        <img src={`${image_url}/uploads/${data?.data?.data.image}`} className='w-full h-full' alt="" />
                    </div>
                    <div className='ps-4 flex flex-col  justify-center '>
                        <h2 className='text-xl sm:text-3xl md:text-2xl lg:text-3xl 2xl:text-4xl  font-semibold my-2'>{data?.data?.data.title}</h2>
                        <p className='text-gray-400 font-semibold 2xl:text-2xl'><i className="fa-solid fa-location-dot me-1" />{data?.data?.data.location}</p>
                        <p className='font-semibold mt-2 text-md sm:text-lg md:text-md lg:text-lg 2xl:text-2xl '>₹ {data?.data?.data.price}</p>
                        <p className='font-semibold mt-2 text-md sm:text-lg md:text-md lg:text-lg 2xl:text-2xl'>{data?.data?.data.area}</p>
                        <p className='font-semibold mt-2 text-md sm:text-lg md:text-md lg:text-lg 2xl:text-2xl'>Apartment Type : {data?.data?.data.apartmentType}</p>
                        <p className='mt-2 text-md sm:text-lg md:text-md lg:text-lg 2xl:text-2xl '>{data?.data?.data.specialities}</p>
                        <p className='mt-2 text-md sm:text-lg md:text-md lg:text-lg 2xl:text-2xl'>{data?.data?.data.landmark}</p>
                        <div className='flex my-3'>
                            <a href={data?.data?.data?.googlemap} target='_blank' className=' px-3 py-1 rounded-md viewbtn me-2' id='loc'>
                                <span><i className="fa-solid fa-location-dot fa-lg " style={{ color: "black" }} /></span>
                            </a>
                            <button className='px-3 py-1 rounded-md viewbtn me-2' id='msg'>
                                <span><i className="fa-regular fa-message fa-lg " style={{ color: "black" }} /></span>
                            </button>
                            <button onClick={() => { handleSave(data?.data?.data?.id) }} className='px-3 py-1 rounded-md viewbtn me-2' id='save'>
                                <span><i className="fa-regular fa-bookmark fa-lg " style={{ color: "black" }} /></span>
                            </button>
                            <ReportModal />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Viewmore