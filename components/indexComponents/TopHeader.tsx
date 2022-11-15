/* eslint-disable @next/next/no-img-element */
import React, { useState, Suspense, useRef, useEffect } from 'react'
import { HomeIcon } from '@heroicons/react/24/solid'
import { ArrowLeftOnRectangleIcon, UserIcon } from '@heroicons/react/24/outline'
import { isError, useQuery } from "@tanstack/react-query";
import { getUserData } from '../../fetching/getUserData'
import LoadingSpinner from './LoadingSpinner';
import { Avatar } from 'react-profile-avatar'
import 'react-profile-avatar/dist/index.css'
import { useOnClickOutside } from 'usehooks-ts'
import { useRouter } from 'next/router'
import Image from 'next/image';
import profileBlank from '../../public/profileBlank.png'

type Props = {}

const TopHeader = (props: Props) => {
    // set the image from database
    const [photo, setPhoto] = useState(String)
    // Router 
    const router = useRouter()

    // Get user data
    const { data, refetch, isError } = useQuery(
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

    // Logout Handler
    const logoutHandler = () => {
        localStorage.removeItem('token')
        refetch()
    }
    // setting Handler
    const settingHandler = () => {
        router.push({
            pathname: '/settings'
        })
    }

    useEffect(() => {
        setPhoto(`data:image/png;base64,${data?.data?.photo?.data}`)
    }, [data?.data?.photo?.data, refetch])
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
                // Sign up
                isError ? (
                    <Suspense fallback={<LoadingSpinner />}>
                        <SignUp />
                    </Suspense>

                ) : (
                    // Profile
                    <div ref={dropdown} className='relative'>
                        <div className='topHeaderClass w-fit pr-5 ' onClick={() => {
                            setSetting(!setting)
                        }} >
                            {
                                data?.data?.photo ? (
                                    <Image
                                        className='rounded-full'
                                        src={photo ? photo : profileBlank}
                                        alt='Profile-pic'
                                        width={25}
                                        height={25}
                                    />
                                ) : (
                                    <Avatar
                                        name={data?.data?.name}
                                        colour={'#288bc4'}
                                        size={25}
                                    />
                                )
                            }

                            <h1 className='text-xs md:text-base text-white/90'>{data?.data?.name}</h1>
                        </div>
                        {/* DropDown Modal */}
                        <div className={setting ? 'absolute cursor-pointer top-full right-1/4 mt-2 z-50 bg-white flex flex-col whitespace-nowrap w-fit rounded-md space-y-2 text-gray-500' : 'hidden'}>
                            <div className='flex flex-col items-start relative w-52 '>
                                <div className="absolute left-44 -top-1.5 h-0 w-0 border-x-4 border-x-transparent border-b-[8px] border-b-white"></div>
                                <div className='flex items-center space-x-5 w-full p-2.5 hover:bg-gray-200 rounded-md' onClick={settingHandler}>
                                    <UserIcon
                                        className='w-5 h-5 text-black'
                                    />
                                    <h1 className='text-base text-gray-800'>Manage Preferences</h1>

                                </div>
                                <div className='flex items-center space-x-5 w-full p-2.5 hover:bg-gray-200 rounded-md' onClick={logoutHandler}>
                                    <ArrowLeftOnRectangleIcon
                                        className='w-6 h-6 text-black'
                                    />
                                    <div>
                                        <h1 className='text-base text-gray-800'>Log out</h1>
                                        <h1 className='text-xs text-gray-400'>{data?.data?.name}</h1>
                                    </div>
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