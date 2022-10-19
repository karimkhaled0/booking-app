/* eslint-disable @next/next/no-img-element */
import { Bars3CenterLeftIcon, BriefcaseIcon, ChevronRightIcon, GlobeEuropeAfricaIcon, HomeIcon, QuestionMarkCircleIcon, UserPlusIcon, WalletIcon } from '@heroicons/react/24/solid'
import React from 'react'

type Props = {
    home: boolean,
    wallet: boolean,
    booking: boolean,
    business: boolean,
    explore: boolean,
    support: boolean
}

const LeftHeader = ({ home, wallet, booking, business, explore, support }: Props) => {
    return (
        <div className='flex flex-col justify-between h-[650px] w-[250px] bg-[#288bc4] absolute left-10 rounded-xl shadow-xl p-5'>
            {/* Top */}
            <div className='flex items-center justify-between'>
                <h3 className='font-semibold text-white'>KarimBooking</h3>
                <Bars3CenterLeftIcon
                    className='h-6 w-6 text-white rotate-180 cursor-pointer'
                />
            </div>
            {/* Middle */}
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
            {/* Bottom */}
            <div className='flex items-center justify-around bg-white rounded-full py-2 leftHeaderButton cursor-pointer hover:shadow-xl'>
                <img className='w-8 h-8' src="/logo.png" alt="s" />
                <div>
                    <h1>Get Premium</h1>
                    <p className='text-xs text-gray-500'>$39/m</p>
                </div>
                <ChevronRightIcon className='h-4 w-4 text-gray-500' />
            </div>
        </div>
    )
}

export default LeftHeader