'use client'
import { useEffect, useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup';
import { mutateData } from '../hooks/mutateData'
import { image_url } from '../service/base_url'



function EditUser({ user }) {
    const [open, setOpen] = useState(false)
    const [image, setImage] = useState('')
    const [preview, setPreview] = useState('')

    useEffect(() => {
        if (image) {
            setPreview(URL.createObjectURL(image))
        } else {
            setPreview('')
        }
    }, [image])

    const schema = Yup.object().shape({
        name: Yup.string().required('Name is required').min(3, 'Name contain atleast 3 characters')
    })

    const { reset, register, formState: { errors }, handleSubmit } = useForm({ resolver: yupResolver(schema) })

    let { mutation } = mutateData()

    const handleUpdate = async (data) => {
        if (!image) {
            data.image = user.image
            mutation.mutate({ key: 'user', method: 'PUT', endPoint: `/users`, header: '', data }, {
                onSuccess: () => {
                    reset()
                    setPreview('')
                    setOpen(false)
                }
            })
        } else {
            const formData = new FormData()
            formData.append('name', data?.name)
            formData.append('image', image)

            const header = {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }

            mutation.mutate({ key: 'user', method: 'PUT', endPoint: '/users', header, data: formData }, {
                onSuccess: () => {
                    reset()
                    setOpen(false)
                    setPreview('')
                }
            })
        }
    }

    return (
        <>
            <div className='h-10 w-full  flex justify-end items-center'>
                <i className="fa-solid fa-pen-to-square fa-lg" style={{ color: '' }} onClick={() => {
                    setOpen(true)
                }} />
            </div>

            <Dialog open={open} onClose={setOpen} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                        >
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                                        <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                                            Edit Profile
                                        </DialogTitle>
                                        <div className="mt-2 w-full">
                                            <form action="" className='w-full' onSubmit={handleSubmit(handleUpdate)}>
                                                <div>
                                                    <label htmlFor="" className="block text-sm font-medium text-gray-600">Name</label>
                                                    <input type="text" id="Name" name="Name"
                                                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:border-none focus:ring-blue-500 focus:outline-none" defaultValue={user?.name}  {...register('name')} />
                                                    {errors.name && <p className='text-sm text-red-700'>{errors.name.message}</p>}
                                                </div>
                                                <div className='py-3'>
                                                    <p className='block text-sm font-medium text-gray-600'>Upload profile image</p>
                                                    <label className='cursor-pointer' >
                                                        <input type="file" className='hidden' onChange={(e) => { setImage(e.target.files[0]) }} />
                                                        <img
                                                            src={preview ? preview : user?.image ? `${image_url}/uploads/${user?.image}` : "https://cdn-icons-png.flaticon.com/512/564/564793.png"} alt="" className='w-20 mt-2' />
                                                    </label>
                                                </div>
                                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                                    <button
                                                        type="submit"
                                                        className="inline-flex w-full justify-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-grayx-500 sm:ml-3 sm:w-auto"
                                                    >
                                                        Update
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

export default EditUser