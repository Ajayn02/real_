import { Ghost } from 'lucide-react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <>
            <div className='h-screen w-full flex justify-center items-center'>
                <div className='flex flex-col items-center'>
                    <Ghost size={40} className='' />
                    <h2 className='text-2xl sm:text-3xl font-semibold'>404 - Page Not Found</h2>
                    <p className="text-sm sm:text-md mt-1"> Oops! The page you're looking for doesn't exist.</p>
                    <Link
                        to={'/'}
                        className="mt-1 text-blue-500 underline">
                        Back to main
                    </Link>
                </div>
            </div>
        </>
    )
}

export default NotFound