import React from 'react'
import { useQuery } from "@tanstack/react-query";
import { getCurrencyAndLang } from '../../fetching/getCurrencyAndLang'

type Props = {}

const Preferences = (props: Props) => {
    // // Get user data
    // const { data, refetch } = useQuery(
    //     ["getCurrencyAndLang"],
    //     getCurrencyAndLang,
    //     { staleTime: Infinity }
    // );
    // console.log(data)
    return (
        <div className='ml-5'>
            {/* Title */}
            <div className='flex items-center justify-between px-5 py-2'>
                <div className='space-y-2'>
                    <h1 className='text-3xl text-black font-bold'>Preferences</h1>
                    <h1 className='text-sm text-gray-500'>Change your language, currency and accessibility requirements.</h1>
                </div>
            </div>
            {/* Currency */}
            <div className='grid grid-cols-3 items-center border-y border-gray-300 my-2 mx-2 h-16 max-h-20'>
                <h1 className='text-black ml-5 justify-self-start'>Currency</h1>
                <h1 className='text-gray-500'>EGP Egyptian pound</h1>
                <h1 className='text-blue-700 font-semibold justify-self-end cursor-pointer p-1 hover:bg-blue-100 rounded-lg'>Edit</h1>
            </div>
            {/* Language */}
            <div className='grid grid-cols-3 items-center border-b border-gray-300 my-2 mx-2 h-16 max-h-20'>
                <h1 className='text-black ml-5 justify-self-start'>Language</h1>
                <h1 className='text-gray-500'>English</h1>
                <h1 className='text-blue-700 font-semibold justify-self-end cursor-pointer p-1 hover:bg-blue-100 rounded-lg'>Edit</h1>
            </div>
        </div>
    )
}

export default Preferences