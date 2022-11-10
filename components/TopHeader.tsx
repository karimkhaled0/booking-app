/* eslint-disable @next/next/no-img-element */
import React, { useState, Suspense, useRef, useEffect } from 'react'
import Image from 'next/image'
import profilePic from '../images/profileCircle.png'
import { HomeIcon } from '@heroicons/react/24/solid'
import { UserIcon } from '@heroicons/react/24/outline'
import { useQuery } from "@tanstack/react-query";
import { getUserData } from '../fetching/getUserData'
import LoadingSpinner from './LoadingSpinner';
import { Avatar } from 'react-profile-avatar'
import 'react-profile-avatar/dist/index.css'
import { useOnClickOutside } from 'usehooks-ts'

type Props = {}

const TopHeader = (props: Props) => {
    // Get user data
    const { data } = useQuery(
        ["signup"],
        getUserData,
        { staleTime: Infinity }
    );
    // register modal lazy
    const SignUp = React.lazy(() => import('./SignUpComponent'));

    // Show setting
    const [setting, setSetting] = useState(false)

    // onclick outside hide dropdown
    const dropdown = useRef(null)
    const handleClickOutside = () => {
        setSetting(false)
    }
    useOnClickOutside(dropdown, handleClickOutside)

    return (

        <div className='flex justify-end w-full space-x-5 pr-20'>
            {/* Become a partner */}
            <div className='topHeaderClass w-44'>
                <div className='h-[25px] w-[25px] bg-white/80 rounded-full flex items-center justify-center'>
                    <HomeIcon
                        className="h-5 w-5 text-[#2E3758]"
                    />
                </div>
                <h1 className='text-xs md:text-base font-thin text-white/90 text-center'>Become a Partner</h1>
            </div>
            {/* Profile */}
            {
                data?.error ? (
                    <Suspense fallback={<LoadingSpinner />}>
                        <SignUp />
                    </Suspense>

                ) : (
                    <div ref={dropdown} className='relative'>
                        <div className='topHeaderClass w-fit pr-5 ' onClick={() => {
                            setSetting(!setting)
                        }} >
                            <Avatar
                                name={data?.data?.name}
                                colour={'#288bc4'}
                                size={25}
                            />
                            {/* <Image
                            className='rounded-full'
                            src={profilePic}
                            alt='Profile-pic'
                            width={20}
                            height={20}
                        /> */}
                            <h1 className='text-xs md:text-base font-thin text-white/90'>{data?.data?.name}</h1>
                        </div>
                        {/* DropDown Modal */}
                        <div className={setting ? 'absolute cursor-pointer top-full right-1/4 mt-2 z-50 bg-white flex flex-col whitespace-nowrap w-fit rounded-lg p-2 space-y-2 text-gray-500' : 'hidden'}>
                            <div className='flex items-center space-x-2 justify-between relative'>
                                <div className="absolute left-44 -top-3 h-0 w-0 border-x-4 border-x-transparent border-b-[8px] border-b-white"></div>
                                <div className='flex  items-center space-x-5'>
                                    <UserIcon
                                        className='w-4 h-4 text-gray-800'
                                    />
                                    <h1>Manage Preferences</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            }



        </div>
    )
}

export default TopHeader