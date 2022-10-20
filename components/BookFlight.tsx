import Image from 'next/image'
import React from 'react'
import iconPlane from '../public/IconPlane.svg'
import iconHotel from '../public/IconHotel.svg'
import iconVilla from '../public/IconVilla.svg'
import iconTaxi from '../public/IconTaxi.svg'
import { LockClosedIcon } from '@heroicons/react/24/solid'

type Props = {}

const BookFlight = (props: Props) => {
    return (
        <div className='flex flex-col mt-44 pl-20 mx-auto w-[1000px] relative space-y-5'>
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
            <div className='bg-white h-80 w-[1100px] rounded-xl shadow-lg'>
                {/* TODO: implement search buttons */}
            </div>
        </div>
    )
}

export default BookFlight