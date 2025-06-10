import { useEffect, useState, useMemo } from 'react'
import Sidebar from '../components/Sidebar'
import { getPosts } from '../service/postService'
import { image_url } from '../service/base_url'
import { fetchData } from '../hooks/fetchData'
import { Link } from 'react-router-dom'


function Home() {
    const [search, setSearch] = useState('')
    const [debouncedSearch, setDebouncedSearch] = useState(search)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(search)
        }, 500) // delay in ms

        return () => clearTimeout(handler)
    }, [search])

    // const { isLoading, isError, data, error } = fetchData('posts', getPosts, { search })
    const { isLoading, isError, data, error } = fetchData('posts', getPosts, { search: debouncedSearch })

    const filteredPosts = data?.data?.data || []
    // const filteredPosts = useMemo(() => {
    //     if (!data?.data?.data) return [];
    //     if (!search) return data?.data?.data;    

    //     return data?.data?.data.filter((item) =>
    //         item.location?.toLowerCase().includes(search.toLowerCase().trim())
    //     );

    // }, [search, data]);

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
            <div className='w-full '>
                <Sidebar searchKey={setSearch} searchValue={search} />
                {
                    // data?.data?.data.length > 0 ?
                    filteredPosts?.length > 0 ?
                        <div className='w-full  h-auto mb-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   '>
                            {
                                // data?.data?.data.map((item) => (
                                filteredPosts?.map((item) => (
                                    <div key={item.id} className='flex justify-center items-center  mt-6'>
                                        <div className='h-auto w-[280px] flex flex-col rounded-md border border-gray-300  transition-transform duration-300 hover:scale-101 '>
                                            <div className='w-full h-[220px]  '>
                                                <img src={`${image_url}/uploads/${item.image}`} className='w-[100%] h-[100%]' alt="" />
                                            </div>
                                            <h1 className='text-xl font-semibold px-3 pt-1 mt-5'>{item.title}</h1>
                                            <p className='text-gray-400 font-semibold'><i className="fa-solid fa-location-dot px-3 pt-1 me-1" />{item.location}</p>
                                            <div className='flex justify-between px-3 mt-2 mb-3 font-semibold'>
                                                <div className='flex items-center'><p>₹ {item.price}</p></div>
                                                <Link to={`/view/${item.id}`} className=' border border-gray-300 px-2 py-1 rounded hover:border-none hover:bg-gray-700 hover:text-white hover:border-gray-700 '>View More</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))

                            }
                        </div>
                        :
                        <div className='h-[85vh] w-full  flex justify-center items-center'><h1 className='text-center md:text-3xl sm:text-2xl text-xl '>No Post Added Yet</h1></div>
                }

            </div>
        </>
    )
}

export default Home