import React from 'react'
'use client'
import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'

function AddProperty() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <button className='bg-amber-950 text-white px-3 py-2 rounded-md' onClick={() => { setOpen(true) }}>Add +</button>

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
                                    <div className="mt-3  sm:mt-0 sm:ml-4 sm:text-left w-full">
                                        <DialogTitle as="h3" className="text-center sm:text-start font-semibold text-gray-900">
                                            Add Property
                                        </DialogTitle>
                                        <div className="mt-2 w-full">
                                            <form action="" className='w-full'>
                                                <div className='my-2'>
                                                    <label for="" class="block text-sm font-medium text-gray-600">Name</label>
                                                    <input type="text" id="Name" name="Name"
                                                        class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:border-none focus:ring-blue-500 focus:outline-none" />
                                                </div>
                                                <div className='my-2'>
                                                    <label for="Title" class="block text-sm font-medium text-gray-600">Title</label>
                                                    <input type="text" id="Title" name="Title"
                                                        class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:border-none focus:ring-blue-500 focus:outline-none" />
                                                </div>
                                                <div className='my-2'>
                                                    <label for="Location" class="block text-sm font-medium text-gray-600">Location</label>
                                                    <input type="text" id="Location" name="Location"
                                                        class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:border-none focus:ring-blue-500 focus:outline-none" />
                                                </div>
                                                <div className='my-2'>
                                                    <label for="Price" class="block text-sm font-medium text-gray-600">Price</label>
                                                    <input type="number" id="Price" name="Price"
                                                        class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:border-none focus:ring-blue-500 focus:outline-none" />
                                                </div>
                                                <div className='my-2'>
                                                    <label for="Area" class="block text-sm font-medium text-gray-600">Area</label>
                                                    <input type="text" id="Area" name="Area"
                                                        class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:border-none focus:ring-blue-500 focus:outline-none" />
                                                </div>
                                                <div className='my-2'>
                                                    <label for="ApartmentType" class="block text-sm font-medium text-gray-600">ApartmentType</label>
                                                    <input type="text" id="ApartmentType" name="ApartmentType"
                                                        class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:border-none focus:ring-blue-500 focus:outline-none" />
                                                </div>
                                                <div className='my-2'>
                                                    <label for="Specialities" class="block text-sm font-medium text-gray-600">Specialities</label>
                                                    <input type="text" id="ApartmentType" name="Specialities"
                                                        class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:border-none focus:ring-blue-500 focus:outline-none" />
                                                </div>
                                                <div className='my-2'>
                                                    <label for="Landmark" class="block text-sm font-medium text-gray-600">Landmark</label>
                                                    <input type="text" id="Landmark" name="Landmark"
                                                        class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:border-none focus:ring-blue-500 focus:outline-none" />
                                                </div>
                                                <div className='my-2'>
                                                    <label for="Googlemap" class="block text-sm font-medium text-gray-600">Googlemap</label>
                                                    <input type="text" id="Googlemap" name="Googlemap"
                                                        class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:border-none focus:ring-blue-500 focus:outline-none" />
                                                </div>
                                                <div className='py-3'>
                                                    <p className='block text-sm font-medium text-gray-600'>Upload  image</p>
                                                    <label className='cursor-pointer' >
                                                        <input type="file" className='hidden' />
                                                        {/* <i class="fa-solid fa-file-arrow-up fa-3x mt-1"></i> */}
                                                        <img src="https://cdn-icons-png.flaticon.com/512/564/564793.png" alt="" className='w-20' />
                                                    </label>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button
                                    type="button"
                                    onClick={() => setOpen(false)}
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
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default AddProperty