import React from 'react'

type Props = {}

const Notification = (props: Props) => {
    return (
        <div className='ml-5'>
            {/* Title */}
            <div className='flex items-center justify-between px-5 py-2'>
                <div className='space-y-2'>
                    <h1 className='text-3xl text-black font-bold'>Email notifications</h1>
                    <h1 className='text-sm text-gray-500'>Decide what you want to be notified about, and unsubscribe from what you don{"'"}t.</h1>
                </div>
            </div>
            {/* Email preferences */}
            <div className='grid grid-cols-3 items-center border-b border-gray-300 my-2 pb-2 mx-2 h-fit'>
                <h1 className='text-black ml-5 justify-self-start'>Email preferences</h1>
                <div className='flex flex-col'>
                    <h1 className='text-gray-500'>kkmawe@gmail.com</h1>
                    <h1 className='text-gray-500 w-[500px]'>Select {"'"}Manage{"'"} to subscribe or unsubscribe from deals and recommendations at this email address.</h1>
                </div>
                <h1 className='text-blue-700 font-semibold justify-self-end cursor-pointer p-1 hover:bg-blue-100 rounded-lg'>Manage</h1>
            </div>
        </div>
    )
}

export default Notification