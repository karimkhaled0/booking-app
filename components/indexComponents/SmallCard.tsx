import Image from 'next/image'
import React from 'react'
import cityImage from '../../public/cityImage.png'

type Props = {}

const SmallCard = (props: Props) => {
    return (
        <div className='flex w-[462px] bg-white p-5 mt-5 rounded-xl space-x-7 shadow-lg shadow-gray-300 mb-5'>
            {/* Image */}
            <div className='w-[180px] h-[140px] relative'>
                <Image
                    className=''
                    src={cityImage}
                    alt='City image'
                    layout='fill'
                />
            </div>
            {/* Details */}
            <div className='mt-2 w-full flex flex-col justify-between'>
                <div>
                    {/* Name of city */}
                    <h4 className='text-sm text-gray-500'>City Name</h4>
                    {/* Discount Details */}
                    <h3 className='text-xl font-thin text-gray-500'>Up to $599 discount</h3>
                </div>


                {/* Cupon ---- Book Now*/}
                <div className='flex justify-between items-center'>
                    <h4 className='text-sm text-gray-500'>Cupon: DHSHJAB09D</h4>
                    <button className='bg-red-200 py-1 w-28 rounded-full text-red-700 text-sm font-semibold clickButton'>Book Now</button>
                </div>

            </div>
        </div>
    )
}

export default SmallCard