import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../service/allApis';
import toast from 'react-hot-toast';


function Signup() {
    const navigation = useNavigate()
    const schema = Yup.object().shape({
        name: Yup.string().required('Name is required').min(3),
        email: Yup.string().email('Invalid email').required('email is required'),
        password: Yup.string().required('Password is required').min(3)
    })

    const { register, reset, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    const onsubmit = async (data) => {
        const result = await registerUser(data)
        if (result.status == 201) {
            toast.success(result.data.message)
            reset()
            navigation('/login')
        } else {
            toast.error(result.message)
        }
    }

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-200 px-4 z-10">
                <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg ">

                    <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Register</h2>

                    <form className="space-y-4" onSubmit={handleSubmit(onsubmit)} >
                        <div>
                            <label htmlFor="text" className="block text-sm font-medium text-gray-600">Name</label>
                            <input {...register('name')} type="text" id="name" name="name"
                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:border-none focus:ring-blue-500 focus:outline-none" />
                            {errors.name && <p className='text-sm text-red-500'>{errors.name.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                            <input {...register('email')} type="email" id="email" name="email"
                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:border-none focus:ring-blue-500 focus:outline-none" />
                            {errors.email && <p className='text-sm text-red-500'>{errors.email.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                            <input {...register('password')} type="password" id="password" name="password"
                                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:border-none focus:ring-blue-500 focus:outline-none" />
                            {errors.password && <p className='text-sm text-red-500'>{errors.password.message}</p>}
                        </div>

                        <button type="submit"
                            className="w-full bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700 transition cursor-pointer">
                            Sign Up
                        </button>
                    </form>
                    <p className="mt-4 text-center text-sm text-gray-600">
                        Already have account?
                        <Link to={'/login'} className="text-gray-800 hover:underline" onClick={() => { setSignup(false) }} >Sign in</Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Signup