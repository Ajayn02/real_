import React, { useState, useEffect } from 'react'
'use client'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup';
import { mutateData } from '../hooks/mutateData'
import '../pages/viewmore.css'

function ReportModal({ postId }) {

    const schema = Yup.object().shape({
        issue: Yup.string().required('reason is required'),
        description: Yup.string().required('description is required').max(200, 'Character length exceed')
    })

    const { register, reset, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    const [open, setOpen] = useState(false)
    const [description, setDescription] = useState('');

    const { mutation } = mutateData()
    const handleReport = async (data) => {
        const reportData = {
            issue: data.issue,
            description: data.description,
            postId
        }
        mutation.mutate({ key: 'report', method: 'POST', endPoint: `/reports`, header: '', data: reportData }, {
            onSuccess: () => {
                setOpen(false)
                reset()
            },
            onError: (error) => {
                console.log(error);
            }
        })
    }

    return (
        <>

            <button className='px-3 py-1 rounded-md viewbtn me-2' id='rep' onClick={() => { setOpen(true) }}>
                <span><i className="fa-regular fa-flag fa-lg " style={{ color: "black" }} /></span>
            </button>

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

                                    <div className="mt-3 text-center  sm:mt-0 sm:ml-4 sm:text-left w-full">
                                        <DialogTitle className=" text-lg font-semibold text-gray-900">
                                            Are you sure to report this post ?
                                        </DialogTitle>
                                        <div className="mt-2 w-full">
                                            <form className=" w-full" onSubmit={handleSubmit(handleReport)} >
                                                {errors.issue && <p className='text-sm text-red-700'>{errors.issue.message}</p>}
                                                <label htmlFor="reason1" className='flex my-1 '>
                                                    <input type="radio" id='reason1' name="reason" value={`Spam or misleading`} className='me-2' onClick={() => { setDescription(true) }} {...register('issue')} />
                                                    Spam or misleading
                                                </label>
                                                <label htmlFor="reason2" className='flex my-1'>
                                                    <input type="radio" id='reason2' name="reason" value={`Inappropriate content`} className='me-2' onClick={() => { setDescription(true) }} {...register('issue')} />
                                                    Inappropriate content
                                                </label>
                                                <label htmlFor="reason3" className='flex my-1'>
                                                    <input type="radio" name="reason" value={`Harassment or hate speech`} className='me-2' id='reason3' onClick={() => { setDescription(true) }} {...register('issue')} />
                                                    Harassment or hate speech
                                                </label>
                                                <label htmlFor="reason4" className='flex my-1'>
                                                    <input type="radio" name="reason" value={`Others`} className='me-2' id='reason4' onClick={() => { setDescription(true) }} {...register('issue')} />
                                                    Others
                                                </label>


                                                {
                                                    description &&
                                                    <>
                                                        <div className='w-full px-1'>
                                                            <textarea name="other" id="other" placeholder='Describe your reason ...' className='w-full h-auto p-2  rounded border focus:border-gray-600' {...register('description')} ></textarea>
                                                        </div>
                                                        {errors.description &&
                                                            <p className='text-sm text-red-700'>{errors.description.message}</p>
                                                        }
                                                    </>
                                                }

                                                <div className=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                                    <button
                                                        type="submit"
                                                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
                                                    >
                                                        Report
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

export default ReportModal