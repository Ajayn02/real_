import EditUser from '../components/EditUser'
import AddProperty from '../components/AddProperty'
import EditModal from '../components/EditModal'
import DeleteModal from '../components/DeleteModal'
import { fetchData } from '../hooks/fetchData'
import { getUserDetails } from '../service/userService'
import { getUserPosts } from '../service/postService'
import { image_url } from '../service/base_url'
import { Link } from 'react-router-dom'

function Account() {

    const { isError: isUserError, isLoading: isUserLoading, data: userData, error: userError } = fetchData('user', getUserDetails)
    const { isError: isPostError, isLoading: isPostLoading, data: postData, error: PostError } = fetchData('userPosts', getUserPosts)


    if (isPostLoading || isUserLoading) {
        return (
            <div className='flex justify-center items-center h-screen'><div className="w-12 h-12 border-4 border-gray-800 border-t-transparent rounded-full animate-spin"></div></div>
        )
    }
    if (isPostError || isUserError) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="bg-red-100 text-red-700 px-6 py-4 rounded-md ">
                    <p className="font-semibold">Something went wrong</p>
                    <p className="text-sm mt-1">{userError ? userError.message : PostError.message || 'Failed to fetch data.'}</p>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className='w-full min-h-[70vh]   flex justify-center items-center'>
                <div className=' w-[300px] sm:w-[320px] px-5 py-3  h-70 rounded-lg flex flex-col items-center shadow-sm shadow-gray-400'>
                    <div className='h-10 w-full  flex justify-end items-center'>
                        <EditUser user={userData?.data?.data} />
                    </div>
                    <div className='h-70   w-full flex justify-center items-center flex-col'>
                        <div className='h-20 w-20  ' style={{ borderRadius: "40px" }}>
                            <img src={userData?.data?.data?.image ? `${image_url}/uploads/${userData?.data?.data?.image}` : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&s`} className='w-[100%] h-full' alt="" />
                        </div>
                        <h3 className='mt-2 text-lg font-semibold'>{userData?.data?.data.name}</h3>
                        <p>{userData?.data?.data.email}</p>
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
                {
                    postData?.data?.data.length > 0 ?
                        <div className='w-full  h-auto  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   '>
                            {
                                postData?.data?.data?.map((item) => (
                                    <div key={item.id} className='flex justify-center items-center  mt-6 '>
                                        <div className='h-auto w-[280px] flex flex-col rounded-md border border-gray-300  transition-transform duration-300 hover:scale-101 relative'>

                                            <div className='absolute top-0 left-0  h-auto z-10 w-full flex justify-end pe-2 pt-2'>
                                                <DeleteModal id={item?.id} />
                                                {
                                                    item?.isSoldout ?
                                                        <div className=' px-3 py-2 border border-gray-300 rounded-md cursor-pointer bg-gray-200' >
                                                            <h6 className='font-semibold '>Soldout</h6>
                                                        </div>
                                                        :
                                                        <EditModal data={item} />
                                                }
                                            </div>

                                            <div className='w-full h-[220px]'>
                                                {
                                                    item.isActive == false &&
                                                    <div className='w-full h-full  absolute inset-0 bg-white/50 z-10 flex justify-center items-center'>
                                                        <h3 className='font-semibold text-black text-2xl'>Disabled</h3>
                                                    </div>
                                                }
                                                <img src={`${image_url}/uploads/${item?.image}`} className='w-[100%] h-[100%]' alt="" />
                                            </div>
                                            <h1 className='text-xl font-semibold px-3 pt-1 mt-5'>{item?.title}</h1>
                                            <p className='text-gray-400 px-3 font-semibold'><i className="fa-solid fa-location-dot  pt-1 me-1" />{item?.location}</p>
                                            <div className='flex justify-between px-3 mt-2 mb-3 font-semibold'>
                                                <div className='flex items-center'><p>₹ {item?.price}</p></div>
                                                <Link to={`/view/${item.id}`} className=' border border-gray-300 px-2 py-1 rounded hover:border-none hover:bg-gray-700 hover:text-white hover:border-gray-700 '>View More</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        :
                        <div className='w-full h-[30vh] flex justify-center items-center'>

                        </div>
                }

            </div>
        </>
    )
}

export default Account