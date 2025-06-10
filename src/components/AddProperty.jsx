import React, { useEffect } from 'react'
'use client'
import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup';
import { mutateData } from '../hooks/mutateData'
import toast from 'react-hot-toast'

function AddProperty() {
    const [open, setOpen] = useState(false)
    const [preview, setPreview] = useState('')
    const [image, setImage] = useState('')

    useEffect(() => {
        if (image) {
            setPreview(URL.createObjectURL(image))
        } else {
            setPreview('')
        }
    }, [image])

    const schema = Yup.object().shape({
        title: Yup.string().required('Title is required').min(5, 'Title contain atleast 5 characters').max(35, 'Character limit exceeded'),
        location: Yup.string().required('Location is required').min(3, 'Location contain atleast 3 characters'),
        price: Yup.number().transform((value, originalValue) => String(originalValue).trim() === '' ? undefined : value).required('Price is required').positive('Price must be positive'),
        area: Yup.string().required('Area is required').min(3, 'Area contain atleast 3 characters'),
        apartmentType: Yup.string().required('ApartmentType is required').min(3, 'Area contain atleast 3 characters'),
        description: Yup.string().required('Description is required').min(5, 'Description contain atleast 5 characters').max(50, 'Character limit exceeded'),
        landmark: Yup.string().required('Landmark is required').min(5, 'Landmark contain atleast 5 characters').max(50, 'Character limit exceeded'),
        googlemap: Yup.string().required('googlemap link is required'),
    })

    const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    const { mutation } = mutateData()

    const handleAddProperty = async (data) => {
        if (!image) {
            toast.error('Image is required')
            return;
        }
        const formData = new FormData()
        formData.append('title', data.title)
        formData.append('location', data.location)
        formData.append('price', data.price)
        formData.append('area', data.area)
        formData.append('apartmentType', data.apartmentType)
        formData.append('description', data.description)
        formData.append('landmark', data.landmark)
        formData.append('googlemap', data.googlemap)
        formData.append('image', image)

        const header = {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        }
        mutation.mutate({ key: 'userPosts', method: 'POST', endPoint: '/posts', header, data: formData }, {
            onSuccess: () => {
                reset()
                setOpen(false)
                setPreview('')
            }
        })
    }


    return (
        <>
            <button className='bg-amber-950 text-white px-3 py-2 rounded-md' onClick={() => { setOpen(true) }}>Add +</button>

            <Dialog open={open} onClose={setOpen} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                        >
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3  sm:mt-0 sm:ml-4 sm:text-left w-full">
                                        <DialogTitle as="h3" className="text-center sm:text-start font-semibold text-gray-900">
                                            Add Property
                                        </DialogTitle>
                                        <div className="mt-2 w-full">
                                            <form action="" className='w-full' onSubmit={handleSubmit(handleAddProperty)}>
                                                <div className='my-2'>
                                                    <label htmlFor="Title" className="block text-sm font-medium text-gray-600">Title</label>
                                                    <input type="text" id="Title" name="Title"
                                                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:border-none focus:ring-blue-500 focus:outline-none" {...register('title')} />
                                                    {errors.title && <p className='text-sm text-red-700'>{errors.title.message}</p>}

                                                </div>
                                                <div className='my-2'>
                                                    <label htmlFor="Location" className="block text-sm font-medium text-gray-600">Location</label>
                                                    <input type="text" id="Location" name="Location"
                                                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:border-none focus:ring-blue-500 focus:outline-none" {...register('location')} />
                                                    {errors.location && <p className='text-sm text-red-700'>{errors.location.message}</p>}
                                                </div>
                                                <div className='my-2'>
                                                    <label htmlFor="Price" className="block text-sm font-medium text-gray-600">Price</label>
                                                    <input type="number" id="Price" name="Price"
                                                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:border-none focus:ring-blue-500 focus:outline-none"
                                                        {...register('price')} />
                                                    {errors.price && <p className='text-sm text-red-700'>{errors.price.message}</p>}
                                                </div>
                                                <div className='my-2'>
                                                    <label htmlFor="Area" className="block text-sm font-medium text-gray-600">Area</label>
                                                    <input type="text" id="Area" name="Area"
                                                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:border-none focus:ring-blue-500 focus:outline-none" {...register('area')} />
                                                    {errors.area && <p className='text-sm text-red-700'>{errors.area.message}</p>}
                                                </div>
                                                <div className='my-2'>
                                                    <label htmlFor="ApartmentType" className="block text-sm font-medium text-gray-600">ApartmentType</label>
                                                    <input type="text" id="ApartmentType" name="ApartmentType"
                                                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:border-none focus:ring-blue-500 focus:outline-none" {...register('apartmentType')} />
                                                    {errors.apartmentType && <p className='text-sm text-red-700'>{errors.apartmentType.message}</p>}
                                                </div>
                                                <div className='my-2'>
                                                    <label htmlFor="Description" className="block text-sm font-medium text-gray-600">Description</label>
                                                    <input type="text" id="Description" name="Description"
                                                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:border-none focus:ring-blue-500 focus:outline-none" {...register('description')} />
                                                    {errors.description && <p className='text-sm text-red-700'>{errors.description.message}</p>}
                                                </div>
                                                <div className='my-2'>
                                                    <label htmlFor="Landmark" className="block text-sm font-medium text-gray-600">Landmark</label>
                                                    <input type="text" id="Landmark" name="Landmark"
                                                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:border-none focus:ring-blue-500 focus:outline-none" {...register('landmark')} />
                                                    {errors.landmark && <p className='text-sm text-red-700'>{errors.landmark.message}</p>}
                                                </div>
                                                <div className='my-2'>
                                                    <label htmlFor="Googlemap" className="block text-sm font-medium text-gray-600">Googlemap</label>
                                                    <input type="text" id="Googlemap" name="Googlemap"
                                                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:border-none focus:ring-blue-500 focus:outline-none" {...register('googlemap')} />
                                                    {errors.googlemap && <p className='text-sm text-red-700'>{errors.googlemap.message}</p>}
                                                </div>
                                                <div className='py-3'>
                                                    <p className='block text-sm font-medium text-gray-600'>Upload  image</p>
                                                    <label className='cursor-pointer' >
                                                        <input type="file" className='hidden' onChange={(e) => { setImage(e.target.files[0]) }} />
                                                        <img src={preview ? preview : "https://cdn-icons-png.flaticon.com/512/564/564793.png"} alt="" className='w-20' />

                                                    </label>

                                                </div>
                                                <div className=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                                    <button
                                                        type="submit"
                                                        className="inline-flex w-full justify-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-grayx-500 sm:ml-3 sm:w-auto"
                                                    >
                                                        Add
                                                    </button>
                                                    <button
                                                        type="button"
                                                        data-autofocus
                                                        onClick={() => setOpen(false)}
                                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default AddProperty