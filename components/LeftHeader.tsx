/* eslint-disable @next/next/no-img-element */
import { Bars3BottomLeftIcon, Bars3BottomRightIcon, BriefcaseIcon, ChevronRightIcon, GlobeEuropeAfricaIcon, HomeIcon, QuestionMarkCircleIcon, UserPlusIcon, WalletIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'

type Props = {
    home: boolean,
    wallet: boolean,
    booking: boolean,
    business: boolean,
    explore: boolean,
    support: boolean
}

const LeftHeader = ({ home, wallet, booking, business, explore, support }: Props) => {
    const [open, setOpen] = useState(true)

    // open is for optimize the left header with icons only or bigger with all details
    // the open variable is true when the left header is bigger
    // false when it's small with icons only
    // The props is for highlight the page where the user in
    return (
        <div className={open ? 'flex flex-col  justify-between h-[650px] w-[250px] bg-[#288bc4] absolute left-10 rounded-xl shadow-xl p-5' : 'flex flex-col items-center justify-between h-[650px] w-[80px] bg-[#288bc4] absolute left-10 rounded-xl shadow-xl p-5 relative'}>

            {
                open ? null : (
                    <img src='/sky4.png' alt="s" className='w-full h-auto absolute bottom-20' />
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
                        <HomeIcon className='h-6 w-6 text-white clickButton' />
                        <WalletIcon className='h-6 w-6 text-white clickButton' />
                        <UserPlusIcon className='h-6 w-6 text-white clickButton' />
                        <BriefcaseIcon className='h-6 w-6 text-white clickButton' />
                        <GlobeEuropeAfricaIcon className='h-6 w-6 text-white clickButton' />
                        <QuestionMarkCircleIcon className='h-6 w-6 text-white clickButton' />
                    </div>
                )
            }


            {/* Bottom */}
            {
                open ? (
                    <div className='justify-around bg-white leftHeaderButton cursor-pointer'>
                        <img className='w-8 h-8' src="/logo.png" alt="s" />
                        <div>
                            <h1>Get Premium</h1>
                            <p className='text-xs text-gray-500'>$39/m</p>
                        </div>
                        <ChevronRightIcon className='h-4 w-4 text-gray-500' />
                    </div>
                ) : (
                    <div className='bg-white p-1 rounded-full clickButton'>
                        <img className='w-8 h-8' src="/logo.png" alt="s" />
                    </div>
                )
            }
        </div>
    )
}

export default LeftHeader
