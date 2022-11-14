import { PlusCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

type Props = {}

const Travellers = (props: Props) => {
    return (
        <div className='ml-5'>
            {/* Title */}
            <div className='flex items-center justify-between px-5 py-2'>
                <div className='space-y-2'>
                    <h1 className='text-3xl text-black font-bold'>Other travellers</h1>
                    <h1 className='text-sm text-gray-500'>Add or edit information about the people you’re travelling with.</h1>
                </div>
            </div>
            {/* Add new traveller  */}
            <div className='flex items-center justify-end my-2 mx-2 h-16 max-h-20'>
                <div className='flex items-center space-x-1 bg-blue-500 p-2 rounded-lg clickButton'>
                    <PlusCircleIcon
                        className='h-5 w-5 text-white/80'
                    />
                    <button className='text-white font-semibold text-xs tracking-[1px] uppercase'>Add new traveller </button>
                </div>
            </div>
        </div>
    )
}

export default Travellers