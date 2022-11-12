import Image from 'next/image'
import React from 'react'
import bannerPlane from '../../public/bannerPlane.png'

type Props = {}

const Banner = (props: Props) => {
    return (
        <div className='flex justify-between ml-[360px] mx-auto max-w-5xl px-10 pt-3 max-h-full bg-[#FFC54D] rounded-2xl items-center shadow-lg shadow-orange-400'>
            <div className='flex flex-col space-y-5'>
                <h1 className='text-3xl capitalize font-semibold'>book your perfect deals</h1>
                <div className='flex items-center space-x-3'>
                    <h1 className='text-7xl text-red-600'>$547</h1>
                    <h1 className='text-sm text-red-600 uppercase tracking-[5px] mt-2'>Starting at</h1>
                </div>
            </div>
            <div className='w-[445px] h-[205px] relative'>
                <Image
                    className=''
                    src={bannerPlane}
                    alt='best Offer1'
                    layout='fill'
                />
            </div>
            <button className='p-5 px-6 text-red-500 text-lg font-light rounded-xl backdrop-blur-2xl bg-white/5 clickButton'>Book Now</button>
        </div>
    )
}

export default Banner