import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import RejectReportModal from './RejectReportModal'
import RemovePostModal from './RemovePostModal'
import { useState } from 'react'

function TakeAction({ reportId }) {
    const [modalOpen, setModalOpen] = useState(false)
    const [removePostModalOpen, setRemovePostModalOpen] = useState(false)

    return (
        <>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50">
                        Actions
                        <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                    </MenuButton>
                </div>

                <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                    <div className="py-1">
                        <MenuItem>
                            <button onClick={() => { setRemovePostModalOpen(true) }}
                                className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden cursor-pointer"
                            >
                                Remove Post
                            </button>
                        </MenuItem>
                        <MenuItem>
                            <button onClick={() => { setModalOpen(true) }}
                                className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden cursor-pointer"
                            >
                                Reject Report
                            </button>
                        </MenuItem>
                    </div>
                </MenuItems>
            </Menu>

            <RejectReportModal reportId={reportId} open={modalOpen} setOpen={setModalOpen} />
            <RemovePostModal reportId={reportId} open={removePostModalOpen} setOpen={setRemovePostModalOpen} />
        </>
    )
}

export default TakeAction