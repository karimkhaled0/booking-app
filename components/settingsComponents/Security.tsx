import React from 'react'

type Props = {}

const Security = (props: Props) => {
    return (
        <div className='ml-5'>
            {/* Title */}
            <div className='flex items-center justify-between px-5 py-2'>
                <div className='space-y-2'>
                    <h1 className='text-3xl text-black font-bold'>Security</h1>
                    <h1 className='text-sm text-gray-500'>Adjust your security settings and set up two-factor authentication.</h1>
                </div>
            </div>
            {/* Password */}
            <div className='grid grid-cols-3 items-center border-y border-gray-300 my-2 mx-2 h-16 max-h-20'>
                <h1 className='text-black ml-5 justify-self-start'>Password</h1>
                <h1 className='text-gray-500 w-[500px]'>Reset your password regularly to keep your account secure</h1>
                <h1 className='text-blue-700 font-semibold justify-self-end cursor-pointer p-1 hover:bg-blue-100 rounded-lg'>Edit</h1>
            </div>
            {/* Two-factor authentication */}
            <div className='grid grid-cols-3 items-center border-b border-gray-300 my-2 mx-2 h-16 max-h-20'>
                <h1 className='text-black ml-5 justify-self-start'>Two-factor authentication</h1>
                <h1 className='text-gray-500 w-[500px]'>Add a phone number to set up two-factor authentication</h1>
                <h1 className='text-blue-700 font-semibold justify-self-end cursor-pointer p-1 hover:bg-blue-100 rounded-lg'>Edit</h1>
            </div>
            {/* Delete account */}
            <div className='grid grid-cols-3 items-center border-b border-gray-300 my-2 mx-2 h-16 max-h-20'>
                <h1 className='text-black ml-5 justify-self-start'>Delete account</h1>
                <h1 className='text-gray-500 w-[500px]'>Permanently delete your KarimBook.com account</h1>
                <h1 className='text-blue-700 font-semibold justify-self-end cursor-pointer p-1 hover:bg-blue-100 rounded-lg'>Edit</h1>
            </div>
        </div>
    )
}

export default Security