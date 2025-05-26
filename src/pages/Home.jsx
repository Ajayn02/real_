import { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { getPosts } from '../service/allApis'
import toast from 'react-hot-toast'
import { image_url } from '../service/base_url'


function Home() {
    const [post, setPost] = useState([])
    useEffect(() => {
        getAllPosts()
    }, [])

    const getAllPosts = async () => {
        const header = {
            'Content-Type': 'application/json',
            'Authorization': `token ${sessionStorage.getItem('token')}`
        }
        const result = await getPosts(header)
        if (result.status == 200) {
            setPost(result.data.data)
        } else {
            console.log(result);
            toast.error('Something went wrong')
        }
    }

    return (
        <>
            <div className='w-full '>
                <Sidebar />
                <div className='w-full  h-auto mb-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   '>
                    {
                        post.length > 0 ?
                            post.map((item) => (
                                <div key={item.id} className='flex justify-center items-center  mt-6'>
                                    <div className='h-auto w-[300px] flex flex-col rounded-md border border-gray-300 p-4 transition-transform duration-300 hover:scale-101 '>
                                        <div className='w-full h-[220px]  '>
                                            <img src="https://realspace-backend.onrender.com/uploads/image-1732895362895-house.png" className='w-[100%] h-[100%]' alt="" />
                                            {/* <img src={`${image_url}/uploads/${item.image}`} className='w-[100%] h-[100%]' alt="" /> */}
                                        </div>
                                        <h1 className='text-xl font-semibold ps-1 pt-1 mt-5'>{item.title}</h1>
                                        <p className='text-gray-400 font-semibold'><i className="fa-solid fa-location-dot ps-1 pt-1 me-1" />{item.location}</p>
                                        <div className='flex justify-between px-1 mt-2 font-semibold'>
                                            <div className='flex items-center'><p>₹ {item.price}</p></div>
                                            <button className=' border border-gray-300 px-2 py-1 rounded hover:border-none hover:bg-gray-700 hover:text-white hover:border-gray-700 '>View More</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                            :
                            <h1 className='text-center text-3xl'>No Post Added Yet</h1>
                    }
                </div>
            </div>
        </>
    )
}

export default Home