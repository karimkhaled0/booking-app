import React from 'react'

type Props = {}

const Payment = (props: Props) => {
    return (
        <div className='ml-5'>
            {/* Title */}
            <div className='flex items-center justify-between px-5 py-2'>
                <div className='space-y-2'>
                    <h1 className='text-3xl text-black font-bold'>Payment details</h1>
                    <h1 className='text-sm text-gray-500'>Securely add or remove payment methods to make it easier when you book.</h1>
                </div>
            </div>
            {/* Payment cards */}
            <div className='grid grid-cols-3 items-center border-y border-gray-300 my-2 mx-2 h-16 max-h-20'>
                <h1 className='text-black ml-5 justify-self-start'>Payment cards</h1>
                <h1 className='text-gray-500 w-[500px]'>Pay with new card</h1>
                <h1 className='text-blue-700 font-semibold justify-self-end cursor-pointer p-1 hover:bg-blue-100 rounded-lg'>Add card</h1>
            </div>
        </div>
    )
}

export default Payment