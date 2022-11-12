import { CameraIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'
import profileBlank from '../../public/profileBlank.png'

type Props = {}

const PersonalDetails = (props: Props) => {
    return (
        // TODO: make photo upload and in database aswell
        <div className='ml-5'>
            {/* text and photo */}
            <div className='flex items-center justify-between px-5 py-2'>
                <div className='space-y-2'>
                    <h1 className='text-3xl text-black font-bold'>Personal details</h1>
                    <h1 className='text-sm text-gray-500'>Update your information and find out how it{"'"}s used.</h1>
                </div>
                <div className='p-0.5 border border-blue-500 rounded-full cursor-pointer clickButton'>
                    <div className='w-16 h-16 z-10 relative'>
                        <Image
                            className='rounded-full'
                            src={profileBlank}
                            alt='profile blank'
                            layout='responsive'
                        />
                        <div className='flex justify-center items-center absolute bg-gray-500/50 right-0 left-0 bottom-0 w-full h-7 rounded-bl-full rounded-br-full z-0'>
                            <CameraIcon
                                className='h-4 w-4 text-white'
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Name */}
            <div className='grid grid-cols-3 items-center border-y border-gray-300 my-2 mx-2 h-16 max-h-20'>
                <h1 className='text-black ml-5 justify-self-start'>Name</h1>
                <h1 className='text-gray-500'>Let us know what to call you</h1>
                <h1 className='text-blue-700 font-semibold justify-self-end cursor-pointer p-1 hover:bg-blue-100 rounded-lg'>Edit</h1>
            </div>
            {/* Email */}
            <div className='grid grid-cols-3 items-center border-b border-gray-300 my-2 pb-2 mx-2 h-fit'>
                <h1 className='text-black ml-5 justify-self-start'>Email address</h1>
                <div className='flex flex-col'>
                    <h1 className='text-gray-500'>kkmawe@gmail.com</h1>
                    <h1 className='text-gray-500 w-[500px]'>This is the email address you use to sign in.
                        It’s also where we send your booking confirmations.</h1>
                </div>
                <h1 className='text-blue-700 font-semibold justify-self-end cursor-pointer p-1 hover:bg-blue-100 rounded-lg'>Edit</h1>
            </div>

            {/* Phone */}
            <div className='grid grid-cols-3 items-center border-b border-gray-300 my-2 pb-2 mx-2 h-fit'>
                <h1 className='text-black ml-5 justify-self-start'>Phone number</h1>
                <div className='flex flex-col'>
                    <h1 className='text-gray-500'>Add your phone number</h1>
                    <h1 className='text-gray-500 w-[500px]'>Properties or attractions you book can use this number to contact you.
                        You can also use it to sign in.</h1>
                </div>
                <h1 className='text-blue-700 font-semibold justify-self-end cursor-pointer p-1 hover:bg-blue-100 rounded-lg'>Edit</h1>
            </div>
            {/* Date of Birth */}
            <div className='grid grid-cols-3 items-center border-b border-gray-300 my-2 mx-2 h-16 max-h-20'>
                <h1 className='text-black ml-5 justify-self-start'>Date of birth</h1>
                <h1 className='text-gray-500'>Enter your date of birth</h1>
                <h1 className='text-blue-700 font-semibold justify-self-end cursor-pointer p-1 hover:bg-blue-100 rounded-lg'>Edit</h1>
            </div>
            {/* Gendar */}
            <div className='grid grid-cols-3 items-center border-b border-gray-300 my-2 mx-2 h-16 max-h-20'>
                <h1 className='text-black ml-5 justify-self-start'>Gendar</h1>
                <h1 className='text-gray-500'>Select your gender</h1>
                <h1 className='text-blue-700 font-semibold justify-self-end cursor-pointer p-1 hover:bg-blue-100 rounded-lg'>Edit</h1>
            </div>
            {/* Address */}
            <div className='grid grid-cols-3 items-center border-b border-gray-300 my-2 mx-2 h-16 max-h-20'>
                <h1 className='text-black ml-5 justify-self-start'>Address</h1>
                <h1 className='text-gray-500'>Egypt</h1>
                <h1 className='text-blue-700 font-semibold justify-self-end cursor-pointer p-1 hover:bg-blue-100 rounded-lg'>Edit</h1>
            </div>
        </div>
    )
}

export default PersonalDetails