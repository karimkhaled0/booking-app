/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import profilePic from '../images/profileCircle.png'
import { HomeIcon } from '@heroicons/react/24/solid'


type Props = {}

const TopHeader = (props: Props) => {

    return (

        <div className='flex justify-end w-full space-x-5 pr-5'>
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
            <div className='topHeaderClass w-36'>
                <Image
                    className='rounded-full'
                    src={profilePic}
                    alt='Profile-pic'
                    width={20}
                    height={20}
                />
                <h1 className='text-xs md:text-base font-thin text-white/90'>Karim Khaled</h1>
            </div>

        </div>
    )
}

export default TopHeader