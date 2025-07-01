import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../service/authServices';
import toast from 'react-hot-toast';

function Login() {

    const navigation = useNavigate()
    const schema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required').min(3)
    })

    const { register, reset, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    const onSubmit = async (data) => {
        const result = await loginUser(data)
        if (result.status == 200) {
            toast.success(result.data.message)
            sessionStorage.setItem('user', result.data?.data?.username)
            sessionStorage.setItem('token', result.data?.data?.token)
            sessionStorage.setItem('role', result.data?.data?.role)
            reset()
            if (result.data?.data?.role === 'admin') {
                navigation('/dashboard')
            } else {
                navigation('/home')
            }
        } else {
            toast.success(result.message)
        }
    }
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-200 px-4 z-10">
                <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg ">

                    <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Login</h2>

                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} >
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
                            className="w-full bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700 transition
                            cursor-pointer">
                            Sign In
                        </button>
                    </form>

                    <p className="mt-4 text-center text-sm text-gray-600">
                        Don't have an account?
                        <Link to={'/signup'} className="text-gray-800 hover:underline" >Sign up</Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login