/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import profilePic from '../images/profileCircle.png'
import { HomeIcon } from '@heroicons/react/24/solid'


type Props = {}

const TopHeader = (props: Props) => {

    return (

        <div className='flex justify-end w-full'>
            {/* Become a partner */}
            <div className='topHeaderClass w-52'>
                <div className='h-[30px] w-[30px] bg-white/80 rounded-full flex items-center justify-center'>
                    <HomeIcon
                        className="h-6 w-6 text-[#2E3758]"
                    />
                </div>
                <h1 className='text-xs md:text-lg text-white'>Become a Partner</h1>
            </div>
            {/* Profile */}
            <div className='topHeaderClass w-44'>
                <Image
                    className='rounded-full'
                    src={profilePic}
                    alt='Profile-pic'
                    width={30}
                    height={30}
                />
                <h1 className='text-xs md:text-lg text-white'>Karim Khaled</h1>
            </div>

        </div>
    )
}

export default TopHeader