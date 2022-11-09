import { ChevronRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React from 'react'
import bestOffer1 from '../public/bestOffer1.png'

type Props = {}

const BestOffer = (props: Props) => {
    return (
        <div className='flex flex-col ml-[360px] mx-auto max-w-5xl p-8 max-h-full bg-white rounded-2xl space-y-10'>
            <div className='flex items-center justify-between'>
                <h1 className='text-2xl text-gray-800'>Best Offer</h1>
                <h1 className='text-lg text-blue-500 cursor-pointer hover:underline hover:decoration-stone-900'>View all</h1>
            </div>
            {/* Card max: 6 */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-4'>
                    <div className='w-[50px] h-[50px] relative'>
                        <Image
                            className=''
                            src={bestOffer1}
                            alt='best Offer1'
                            layout='fill'
                        />
                    </div>
                    <h1 className='text-xl text-gray-500'>Via - </h1>
                    <h1 className='text-xl text-gray-900'> Delhi, Toronto, Mexico</h1>
                </div>
                <h1 className='text-lg text-gray-700'>$506</h1>
                <h1 className='text-lg text-gray-700'>15 Aug - 22 Aug</h1>
                <div className='flex items-center space-x-1 cursor-pointer hover:bg-blue-200 rounded-full p-2 px-3 clickButton'>
                    <button className='text-lg text-gray-700 '>Book Now</button>
                    <ChevronRightIcon
                        className='h-4 w-4 text-black'
                    />
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-4'>
                    <div className='w-[50px] h-[50px] relative'>
                        <Image
                            className=''
                            src={bestOffer1}
                            alt='best Offer1'
                            layout='fill'
                        />
                    </div>
                    <h1 className='text-xl text-gray-500'>Via - </h1>
                    <h1 className='text-xl text-gray-900'> Delhi, Toronto, Mexico</h1>
                </div>
                <h1 className='text-lg text-gray-700'>$506</h1>
                <h1 className='text-lg text-gray-700'>15 Aug - 22 Aug</h1>
                <div className='flex items-center space-x-1 cursor-pointer hover:bg-blue-200 rounded-full p-2 px-3 clickButton'>
                    <button className='text-lg text-gray-700 '>Book Now</button>
                    <ChevronRightIcon
                        className='h-4 w-4 text-black'
                    />
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-4'>
                    <div className='w-[50px] h-[50px] relative'>
                        <Image
                            className=''
                            src={bestOffer1}
                            alt='best Offer1'
                            layout='fill'
                        />
                    </div>
                    <h1 className='text-xl text-gray-500'>Via - </h1>
                    <h1 className='text-xl text-gray-900'> Delhi, Toronto, Mexico</h1>
                </div>
                <h1 className='text-lg text-gray-700'>$506</h1>
                <h1 className='text-lg text-gray-700'>15 Aug - 22 Aug</h1>
                <div className='flex items-center space-x-1 cursor-pointer hover:bg-blue-200 rounded-full p-2 px-3 clickButton'>
                    <button className='text-lg text-gray-700 '>Book Now</button>
                    <ChevronRightIcon
                        className='h-4 w-4 text-black'
                    />
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-4'>
                    <div className='w-[50px] h-[50px] relative'>
                        <Image
                            className=''
                            src={bestOffer1}
                            alt='best Offer1'
                            layout='fill'
                        />
                    </div>
                    <h1 className='text-xl text-gray-500'>Via - </h1>
                    <h1 className='text-xl text-gray-900'> Delhi, Toronto, Mexico</h1>
                </div>
                <h1 className='text-lg text-gray-700'>$506</h1>
                <h1 className='text-lg text-gray-700'>15 Aug - 22 Aug</h1>
                <div className='flex items-center space-x-1 cursor-pointer hover:bg-blue-200 rounded-full p-2 px-3 clickButton'>
                    <button className='text-lg text-gray-700 '>Book Now</button>
                    <ChevronRightIcon
                        className='h-4 w-4 text-black'
                    />
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-4'>
                    <div className='w-[50px] h-[50px] relative'>
                        <Image
                            className=''
                            src={bestOffer1}
                            alt='best Offer1'
                            layout='fill'
                        />
                    </div>
                    <h1 className='text-xl text-gray-500'>Via - </h1>
                    <h1 className='text-xl text-gray-900'> Delhi, Toronto, Mexico</h1>
                </div>
                <h1 className='text-lg text-gray-700'>$506</h1>
                <h1 className='text-lg text-gray-700'>15 Aug - 22 Aug</h1>
                <div className='flex items-center space-x-1 cursor-pointer hover:bg-blue-200 rounded-full p-2 px-3 clickButton'>
                    <button className='text-lg text-gray-700 '>Book Now</button>
                    <ChevronRightIcon
                        className='h-4 w-4 text-black'
                    />
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-4'>
                    <div className='w-[50px] h-[50px] relative'>
                        <Image
                            className=''
                            src={bestOffer1}
                            alt='best Offer1'
                            layout='fill'
                        />
                    </div>
                    <h1 className='text-xl text-gray-500'>Via - </h1>
                    <h1 className='text-xl text-gray-900'> Delhi, Toronto, Mexico</h1>
                </div>
                <h1 className='text-lg text-gray-700'>$506</h1>
                <h1 className='text-lg text-gray-700'>15 Aug - 22 Aug</h1>
                <div className='flex items-center space-x-1 cursor-pointer hover:bg-blue-200 rounded-full p-2 px-3 clickButton'>
                    <button className='text-lg text-gray-700 '>Book Now</button>
                    <ChevronRightIcon
                        className='h-4 w-4 text-black'
                    />
                </div>
            </div>


        </div>
    )
}

export default BestOffer