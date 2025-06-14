import DashboardCards from '../components/DashboardCards'
import RecentProperties from '../components/RecentProperties'
import QuickActions from '../components/QuickActions'
import { fetchData } from '../hooks/fetchData'
import { getAllUsers, getAllReports ,getAdminPosts} from '../service/adminServices'

function Dashboard() {

    const { data: postData, isLoading: postLoading, error: postError } = fetchData('posts', getAdminPosts, { search: '' })
    const { data: userData, isLoading: userLoading, error: userError } = fetchData('user', getAllUsers, {})
    const { data: reportData, isLoading: reportLoading, error: reportError } = fetchData('report', getAllReports, {})

    const pendingReports = reportData?.data?.data?.filter((item) => {
        return item.status === 'pending'
    })

    const soldProperties = postData?.data?.data?.filter((item) => item.isSoldout)

    if (postLoading || userLoading || reportLoading) {
        return (
            <div className='flex justify-center items-center h-screen'><div className="w-12 h-12 border-4 border-gray-800 border-t-transparent rounded-full animate-spin"></div></div>
        )
    }

    if (postError || userError || reportError) {
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
            <div className='w-full min-h-[100vh]'>
                <div className='w-full p-2 sm:p-4 '>
                    <div className='flex items-center'>
                        <i className="fa-solid fa-house-chimney fa-xl me-1" style={{ color: "#000000", }} />
                        <h1 className='text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold'>Dashboard Overview</h1>
                    </div>
                    <p className='text-gray-500 text-xs sm:text-sm ms-8'>Welcome back! Here's what's happening with your properties.</p>
                </div>
                <DashboardCards postCount={postData?.data?.data?.length} userCount={userData?.data?.data?.length} reportCount={pendingReports?.length} soldPropertiesCount={soldProperties?.length} />
                <div className=' w-full '>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <RecentProperties />
                        <QuickActions />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard