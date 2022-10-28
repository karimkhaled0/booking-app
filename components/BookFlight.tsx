import Image from 'next/image'
import React, { Suspense, useState } from 'react'
import iconPlane from '../public/IconPlane.svg'
import iconHotel from '../public/IconHotel.svg'
import iconVilla from '../public/IconVilla.svg'
import iconTaxi from '../public/IconTaxi.svg'


import { LockClosedIcon } from '@heroicons/react/24/solid'
import LoadingSpinner from './loadingSpinner'

type Props = {
}

const BookFlight = (props: Props) => {
    // Lazy & Suspense
    const OneWay = React.lazy(() => import('../components/OneWay'))
    const RoundTrip = React.lazy(() => import('../components/RoundTrip'))
    const MultiCity = React.lazy(() => import('../components/MultiCity'))

    // flight selection
    const [oneWay, setOneWay] = useState(false)
    const [roundTrip, setRoundTrip] = useState(true)
    const [multiCity, setMultiCity] = useState(false)

    return (
        <div className='flex flex-col mt-44 pl-20 mx-auto w-[1000px] space-y-5'>
            {/* Choose Section */}
            <div className='flex items-center space-x-5'>
                <div className='BookFlightButtons clickButton bg-[#288bc4]'>
                    <Image
                        src={iconPlane}
                        alt='Plane Icon'
                        width={25}
                        height={25}
                    />
                    <h1 className='uppercase text-sm text-white font-semibold'>Flights</h1>
                </div>
                {/* Locked For now */}
                <div className='BookFlightButtons opacity-40' title='Not Available'>
                    <LockClosedIcon
                        className='h-3 w-3 text-white self-end'
                    />
                    <Image
                        src={iconHotel}
                        alt='Plane Icon'
                        width={25}
                        height={25}
                    />
                    <h1 className='uppercase text-sm text-white font-semibold'>Hotel</h1>
                </div>
                <div className='BookFlightButtons opacity-40' title='Not Available'>
                    <LockClosedIcon
                        className='h-3 w-3 text-white self-end'
                    />
                    <Image
                        src={iconVilla}
                        alt='Plane Icon'
                        width={25}
                        height={25}
                    />
                    <h1 className='uppercase text-sm text-white font-semibold'>Villa</h1>
                </div>
                <div className='BookFlightButtons opacity-40' title='Not Available'>
                    <LockClosedIcon
                        className='h-3 w-3 text-white self-end'
                    />
                    <Image
                        src={iconTaxi}
                        alt='Plane Icon'
                        width={25}
                        height={25}
                    />
                    <h1 className='uppercase text-sm text-white font-semibold'>Taxi</h1>
                </div>
            </div>
            {/* Booking Search */}
            <div className='bg-white w-[1100px] rounded-xl shadow-lg p-10 flex flex-col space-y-5'>
                {/* filters */}
                <div className='flex items-center space-x-5'>
                    <button className={
                        oneWay ? 'px-5 py-2 rounded-full text-black font-semibold clickButton bg-slate-300' : 'px-5 py-2 rounded-full text-gray-500 clickButton'
                    } onClick={() => {
                        setOneWay(true)
                        setRoundTrip(false)
                        setMultiCity(false)
                    }}>Oneway</button>
                    <button className={
                        roundTrip ? 'px-5 py-2 rounded-full text-black font-semibold clickButton bg-slate-300' : 'px-5 py-2 rounded-full text-gray-500 clickButton'
                    } onClick={() => {
                        setOneWay(false)
                        setRoundTrip(true)
                        setMultiCity(false)
                    }}>Round Trip</button>
                    <button className={
                        multiCity ? 'px-5 py-2 rounded-full text-black font-semibold clickButton bg-slate-300' : 'px-5 py-2 rounded-full text-gray-500 clickButton'
                    } onClick={() => {
                        setOneWay(false)
                        setRoundTrip(false)
                        setMultiCity(true)
                    }}>Multi city</button>
                </div>
                {
                    oneWay && (
                        <Suspense fallback={<LoadingSpinner />}>
                            <OneWay />
                        </Suspense>
                    )
                }
                {
                    roundTrip && (
                        <Suspense fallback={<LoadingSpinner />}>
                            <RoundTrip />
                        </Suspense>
                    )
                }
                {
                    multiCity && (
                        <Suspense fallback={<LoadingSpinner />}>
                            <MultiCity />
                        </Suspense>
                    )
                }
            </div >
        </div >
    )
}

export default BookFlight

/*  */