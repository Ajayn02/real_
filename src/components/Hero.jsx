import { useNavigate } from 'react-router-dom'
import home from '../../public/land.png'
import './hero.css'

function Hero() {
    const navigation = useNavigate()
    const handleGetStart = async () => {
        navigation('/login')
    }
    return (
        <>
            <div className="w-[100%] min-h-auto px-8  sm:px-13 pb-13 pt-7">
                <div className=" rounded-2xl h-full bg-gray-100 grid md:grid-cols-2 sm:grid-cols-1 ">
                    <div className=' flex justify-center items-center p-6 sm:p-10 md:px-5  lg:px-10'>
                        <div>
                            <h1 className='text-2xl sm:text-3xl md:text-3xl xl:text-4xl font-semibold'>Find Your Dream Home,<br />
                                Live Your Dream Life</h1>
                            <p className='mt-5 md:text-md lg:text-lg text-justify'>Welcome to RealSpace, your one-stop destination for buying, selling, and renting properties. Explore our wide range of listings, and discover your perfect match today.</p>
                            <button className='bg-gray-800 text-white px-4 py-2 sm:px-5 sm:py-3 mt-3  rounded-xl cursor-pointer' onClick={handleGetStart}>
                                Get Started
                            </button>
                        </div>
                    </div>
                    <div className='img-div flex justify-end items-end' >
                        <img src={home} alt="" className='h-[500px] w-[500px]' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero