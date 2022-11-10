import { TicketIcon, UserGroupIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
import MultiCityBox from '../components/MultiCityBox'

// TODO: make click outside from to in all options of bookflight

type Props = {}


const MultiCity = (props: Props) => {
    // default value is string rather than number because of typescript
    const [person, setPerson] = useState('1')

    // multi flights
    const [numberOfRows, setNumberOfRows] = useState([1, 2, 3])
    // Using concat instead of push in states to return a new array with the old one and the new added values
    const addRow = () => {
        setNumberOfRows(numberOfRows.concat(numberOfRows.length + 1))
    }
    return (
        <div className='h-full'>
            {/* from, to and class */}
            <div className='space-y-3 relative'>
                {
                    numberOfRows?.map((i) => (
                        <MultiCityBox key={i} index={i} />
                    ))
                }
            </div>
            {/* CLass & Persons & button */}
            <div className='flex items-center justify-between mx-5 space-x-10'>
                <div className='w-full'>
                    {/* Control the add button of max 6 */}

                    {
                        numberOfRows.length == 6 ? (
                            <button
                                disabled
                                className='uppercase bg-gray-300 px-4 py-3 rounded-xl text-white font-semibold mt-10'
                            >Add one more flight
                            </button>
                        ) : (
                            <button
                                className='uppercase bg-[#288bc4] px-4 py-3 rounded-xl text-white font-semibold clickButton mt-10'
                                onClick={addRow}>Add one more flight
                            </button>
                        )
                    }
                </div>
                {/* Class Search */}
                <div className='flex flex-col space-y-2'>
                    {/* Person Icon */}
                    <div className='flex items-center space-x-1'>
                        <TicketIcon
                            className='h-4 w-4 text-gray-400'
                        />
                        <h1 className='text-gray-400'>Class</h1>
                    </div>
                    {/* Person Search */}
                    <div className='flex items-center'>
                        <select className="block p-1 text-base text-gray-900 bg-gray-50 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                            <option value='ec' className='font-light' defaultValue='ec'>Economy Class</option>
                            <option className='font-light'>Premium Economy Class</option>
                            <option className='font-light'>Business Class</option>
                            <option className='font-light'>First Class</option>
                        </select>
                    </div>
                </div>
                {/* Persons */}
                <div className='flex flex-col space-y-2'>
                    {/* Person Icon */}
                    <div className='flex items-center space-x-1'>
                        <UserGroupIcon
                            className='h-4 w-4 text-gray-400'
                        />
                        <h1 className='text-gray-400'>Persons</h1>
                    </div>
                    {/* Person Search */}
                    <div className='flex items-center'>
                        <input
                            type="number"
                            className="w-12 pl-3 text-lg
                                text-blue-500 outline-none"
                            onChange={(e) => setPerson(e.target.value)}
                            value={person}
                            min={1}
                        />
                        <h1 className='text-lg text-gray-600'>Persons</h1>
                    </div>
                </div>
                {/* Search Flight */}
                <div className='w-44'>
                    <button className='uppercase bg-[#DF142D] px-12 py-3 rounded-xl text-white font-semibold clickButton mt-10'>Search flight</button>
                </div>
            </div>
        </div>
    )
}

export default MultiCity