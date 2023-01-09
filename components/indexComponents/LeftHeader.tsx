import { Bars3BottomLeftIcon, Bars3BottomRightIcon, BriefcaseIcon, ChevronRightIcon, GlobeEuropeAfricaIcon, HomeIcon, QuestionMarkCircleIcon, UserPlusIcon, WalletIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React, { useState } from 'react'
import sky from '../../public/sky4.png'
import logo from '../../public/Logo.png'

type Props = {
    home: boolean,
    wallet: boolean,
    booking: boolean,
    business: boolean,
    explore: boolean,
    support: boolean,
    headerOpen: boolean
}

const LeftHeader = ({ home, wallet, booking, business, explore, support, headerOpen = true }: Props) => {
    const [open, setOpen] = useState(headerOpen)

    // open is for optimize the left header with icons only or bigger with all details
    // the open variable is true when the left header is bigger
    // false when it's small with icons only
    // The props is for highlight the page where the user in
    return (
        <div className={open ? 'flex flex-col justify-between h-[650px] w-[250px] bg-[#288bc4] absolute left-10 rounded-xl shadow-xl p-5 z-30' : 'flex flex-col items-center justify-between h-[650px] w-[80px] bg-[#288bc4] absolute left-10 rounded-xl shadow-xl p-5 z-30'}>

            {
                open ? null : (
                    <div className='w-full h-auto absolute bottom-20'>
                        <Image
                            src={sky}
                            alt='sky'
                            layout='responsive'
                        />
                    </div>
                )
            }

            {/* Top */}
            <div className='flex items-center justify-between'>

                {
                    open ? (
                        <h3 className='font-fasthand font-semibold text-white text-xl -rotate-6'>KarimBook</h3>
                    ) : null
                }


                {/* Open */}
                <Bars3BottomLeftIcon
                    className={open ? 'h-6 w-6 text-white clickButton' : 'hidden'}
                    onClick={() => {
                        setOpen(false)
                    }}
                />


                {/* Close */}
                <Bars3BottomRightIcon
                    className={open ? 'hidden' : 'h-6 w-6 text-white -rotate-180 clickButton'}
                    onClick={() => {
                        setOpen(true)
                    }}
                />

            </div>


            {/* Middle */}
            {
                open ? (
                    <div className='flex flex-col space-y-4 items-center justify-center'>
                        <div className={home ? 'leftHeaderButton bg-[#30a1e2]' : 'leftHeaderButton'}>
                            <HomeIcon className='h-6 w-6 text-white' />
                            <h1 className='text-white font-semibold'>Home</h1>
                        </div>
                        <div className={wallet ? 'leftHeaderButton bg-[#30a1e2]' : 'leftHeaderButton'}>
                            <WalletIcon className='h-6 w-6 text-white' />
                            <h1 className='text-white font-semibold'>Wallet</h1>
                        </div>
                        <div className={booking ? 'leftHeaderButton bg-[#30a1e2]' : 'leftHeaderButton'}>
                            <UserPlusIcon className='h-6 w-6 text-white' />
                            <h1 className='text-white font-semibold'>Booking</h1>
                        </div>
                        <div className={business ? 'leftHeaderButton bg-[#30a1e2]' : 'leftHeaderButton'}>
                            <BriefcaseIcon className='h-6 w-6 text-white' />
                            <h1 className='text-white font-semibold'>Business</h1>
                        </div>
                        <div className={explore ? 'leftHeaderButton bg-[#30a1e2]' : 'leftHeaderButton'}>
                            <GlobeEuropeAfricaIcon className='h-6 w-6 text-white' />
                            <h1 className='text-white font-semibold'>Explore</h1>
                        </div>
                        <div className={support ? 'leftHeaderButton bg-[#30a1e2]' : 'leftHeaderButton'}>
                            <QuestionMarkCircleIcon className='h-6 w-6 text-white' />
                            <h1 className='text-white font-semibold'>Support</h1>
                        </div>
                    </div>
                ) : (
                    <div className='flex flex-col space-y-7 items-center justify-center'>
                        <HomeIcon className={home ? 'h-6 w-6 text-red-200 clickButton' : 'h-6 w-6 text-white clickButton'} />
                        <WalletIcon className={wallet ? 'h-6 w-6 text-red-200 clickButton' : 'h-6 w-6 text-white clickButton'} />
                        <UserPlusIcon className={booking ? 'h-6 w-6 text-red-200 clickButton' : 'h-6 w-6 text-white clickButton'} />
                        <BriefcaseIcon className={business ? 'h-6 w-6 text-red-200 clickButton' : 'h-6 w-6 text-white clickButton'} />
                        <GlobeEuropeAfricaIcon className={explore ? 'h-6 w-6 text-red-200 clickButton' : 'h-6 w-6 text-white clickButton'} />
                        <QuestionMarkCircleIcon className={support ? 'h-6 w-6 text-red-200 clickButton' : 'h-6 w-6 text-white clickButton'} />
                    </div>
                )
            }


            {/* Bottom */}
            {
                open ? (
                    <div className='justify-around bg-white leftHeaderButton cursor-pointer'>
                        <div className='w-8 h-8'>
                            <Image
                                src={logo}
                                alt='logo'
                                layout='responsive'
                            />
                        </div>
                        <div>
                            <h1 className='text-black'>Get Premium</h1>
                            <p className='text-xs text-gray-500'>$39/m</p>
                        </div>
                        <ChevronRightIcon className='h-4 w-4 text-gray-500' />
                    </div>
                ) : (
                    <div className='bg-white p-1 rounded-full clickButton'>
                        <div className='w-8 h-8'>
                            <Image
                                src={logo}
                                alt='logo'
                                layout='responsive'
                            />
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default LeftHeader
