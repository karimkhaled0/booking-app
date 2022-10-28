import { CalendarDaysIcon, MapPinIcon, TicketIcon, UserGroupIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react'

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';

import { addDays } from 'date-fns';

type Props = {}

const RoundTrip = (props: Props) => {
    // Date selection
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(addDays(new Date(), 5))
    const handleSelect = (ranges: any) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }

    // This is for hide date picker when end date selected
    const [dateShow, setDateShow] = useState(false)

    const closeDatePicker = useEffect(() => {
        if (endDate.getTime() > startDate.getTime()) {
            setDateShow(false)
        }
    }, [endDate, startDate])

    // default value is string rather than number because of typescript
    const [person, setPerson] = useState('1')
    return (
        <div>
            {/* from, to and class */}
            {/* TODO: make search in from and to */}
            <div className='flex items-center justify-between mx-5 space-x-5'>
                {/* From */}
                <div className='flex flex-col space-y-2'>
                    {/* From Icon */}
                    <div className='flex items-center space-x-1'>
                        <MapPinIcon
                            className='h-4 w-4 text-gray-400'
                        />
                        <h1 className='text-gray-400'>FROM</h1>
                    </div>
                    {/* From Search */}
                    <div>
                        <input type="text" className="block text-start p-2 w-64 text-gray-900 bg-gray-50 rounded-sm border border-gray-400 sm:text-md focus:ring-blue-500 focus:border-blue-500 " />
                    </div>
                </div>
                {/* TO */}
                <div className='flex flex-col space-y-2'>
                    {/* TO Icon */}
                    <div className='flex items-center space-x-1'>
                        <MapPinIcon
                            className='h-4 w-4 text-gray-400'
                        />
                        <h1 className='text-gray-400'>TO</h1>
                    </div>
                    {/* TO Search */}
                    <div>
                        <input type="text" className="block text-start p-2 w-64 text-gray-900 bg-gray-50 rounded-sm border border-gray-400 sm:text-md focus:ring-blue-500 focus:border-blue-500 " />
                    </div>
                </div>
                {/* When */}
                <div className='flex w-full relative'>
                    {/* Departure */}
                    <div className='flex flex-col space-y-2 w-full'>
                        <div className='flex items-center space-x-1'>
                            <CalendarDaysIcon
                                className='h-4 w-4 text-gray-400'
                            />
                            <h1 className='text-gray-400'>Departure</h1>
                        </div>
                        <div className='border border-gray-400 rounded-sm p-0.5 hover:bg-gray-200 clickButton' onClick={() => {
                            setDateShow(!dateShow)
                        }}>
                            <button
                                className='text-lg p-1 font-light'
                            >{selectionRange.startDate.toDateString()}</button>
                        </div>
                    </div>
                    {/* Return */}
                    <div className='flex flex-col space-y-2 w-full' >
                        <div className='flex items-center space-x-1'>
                            <CalendarDaysIcon
                                className='h-4 w-4 text-gray-400'
                            />
                            <h1 className='text-gray-400'>Return</h1>
                        </div>
                        <div className='border border-l-0 border-gray-400 rounded-sm p-0.5 hover:bg-gray-200 clickButton' onClick={() => {
                            setDateShow(!dateShow)
                        }}>
                            <button
                                className='text-lg p-1 font-light'
                            >{selectionRange.endDate.toDateString()}</button>
                        </div>
                    </div>
                    {/* DateRange Picker */}
                    {
                        dateShow ? (
                            <DateRange
                                direction={'horizontal'}
                                dateDisplayFormat={'yyyy-MM-dd'}
                                months={2}
                                showDateDisplay={false}
                                className='rounded-lg absolute top-20 right-0 z-20 shadow-xl border-blue-300 border'
                                ranges={[selectionRange]}
                                minDate={new Date()}
                                rangeColors={['#288bc4']}
                                onChange={handleSelect}
                            />
                        ) : null
                    }
                </div>
            </div>
            {/* CLass & Persons & button */}
            <div className='flex items-center justify-between mx-5'>
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
                    <button className='uppercase bg-[#DF142D] px-6 py-5 rounded-xl text-white font-semibold clickButton mt-10'>Search flight</button>
                </div>
            </div>
        </div>
    )
}

export default RoundTrip