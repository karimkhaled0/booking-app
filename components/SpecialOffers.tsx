import React from 'react'
import SmallCard from './SmallCard'
import { ScrollContainer } from 'react-indiana-drag-scroll';
import 'react-indiana-drag-scroll/dist/style.css'
type Props = {}

const SpecialOffers = (props: Props) => {
    return (
        <div className='flex flex-col ml-72 mx-auto max-w-7xl px-8 sm:px-16'>
            <h1 className='text-2xl text-gray-800 self-start'>Special offers</h1>
            {/* Cards */}
            <ScrollContainer>
                <div className='flex items-center space-x-10 p-3'>
                    {/* Card */}
                    <SmallCard />
                    <SmallCard />
                    <SmallCard />
                    <SmallCard />
                    <SmallCard />
                    <SmallCard />
                    <SmallCard />
                    <SmallCard />
                    <SmallCard />
                    <SmallCard />
                    <SmallCard />
                </div>
            </ScrollContainer>
        </div>
    )
}

export default SpecialOffers