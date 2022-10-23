import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import iconPlane from '../public/IconPlane.svg'
import iconHotel from '../public/IconHotel.svg'
import iconVilla from '../public/IconVilla.svg'
import iconTaxi from '../public/IconTaxi.svg'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange, DateRangePicker } from 'react-date-range';

import { addDays } from 'date-fns';

import { CalendarDaysIcon, LockClosedIcon, MapPinIcon, UserGroupIcon } from '@heroicons/react/24/solid'

type Props = {
}

const BookFlight = (props: Props) => {
    // Date selection
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(addDays(new Date(), 7))
    const handleSelect = (ranges: any) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }

    const [dateShow, setDateShow] = useState(false)

    const closeDatePicker = useEffect(() => {
        if (endDate.getTime() > startDate.getTime()) {
            setDateShow(false)
        }
    }, [endDate, startDate])

    const [person, setPerson] = useState('1')
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
            <div className='bg-white h-80 w-[1100px] rounded-xl shadow-lg p-10 flex flex-col space-y-2'>
                {/* filters */}
                <div className='flex items-center space-x-5'>
                    <button className='px-5 py-2 rounded-full bg-slate-200 text-gray-500 clickButton'>Oneway</button>
                    <button className='px-5 py-2 rounded-full text-gray-500 clickButton'>Round Trip</button>
                    <button className='px-5 py-2 rounded-full text-gray-500 clickButton'>Multi city</button>
                </div>
                {/* from, to and class */}
                {/* TODO: make search in from and to */}
                <div className='flex items-center justify-between mx-5'>
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
                            <input type="text" className="block text-start p-2 w-64 text-gray-900 bg-gray-50 rounded-lg border border-gray-400 sm:text-md focus:ring-blue-500 focus:border-blue-500 " />
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
                            <input type="text" className="block text-start p-2 w-64 text-gray-900 bg-gray-50 rounded-lg border border-gray-400 sm:text-md focus:ring-blue-500 focus:border-blue-500 " />
                        </div>
                    </div>
                    {/* CLass and Persons */}
                    <div className='flex flex-col space-x-5 space-y-2 items-center'>
                        {/* Persons */}
                        <div className='flex flex-col space-y-2'>
                            {/* Person Icon */}
                            <div className='flex items-center space-x-1'>
                                <UserGroupIcon
                                    className='h-4 w-4 text-gray-400'
                                />
                                <h1 className='text-gray-400'>Class</h1>
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
                        {/* Class Search */}
                        <select id="countries" className="block p-1 text-sm text-gray-900 bg-gray-50 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                            <option selected>Economy Class</option>
                            <option>Business Class</option>
                            <option>First Class</option>
                        </select>
                    </div>
                </div>
                {/* When */}
                <div className='flex items-center justify-between mx-5 relative'>
                    {/* Departure */}
                    <div className='flex flex-col space-y-2'>
                        <div className='flex items-center space-x-1'>
                            <CalendarDaysIcon
                                className='h-4 w-4 text-gray-400'
                            />
                            <h1 className='text-gray-400'>Departure</h1>
                        </div>
                        <div>
                            <button
                                className='clickButton text-lg hover:bg-gray-200 p-1 rounded-lg'
                                onClick={() => {
                                    setDateShow(!dateShow)
                                }}
                            >{selectionRange.startDate.toDateString()}</button>
                        </div>
                    </div>
                    {/* Return */}
                    <div className='flex flex-col space-y-2'>
                        <div className='flex items-center space-x-1'>
                            <CalendarDaysIcon
                                className='h-4 w-4 text-gray-400'
                            />
                            <h1 className='text-gray-400'>Return</h1>
                        </div>
                        <div>
                            <button
                                className='clickButton text-lg hover:bg-gray-200 p-1 rounded-lg'
                                onClick={() => {
                                    setDateShow(!dateShow)
                                }}
                            >{selectionRange.endDate.toDateString()}</button>
                        </div>
                    </div>
                    {/* Search Flight */}
                    <div className=''>
                        <button className='uppercase bg-[#DF142D] px-6 py-5 rounded-xl text-white font-semibold clickButton mt-10'>Search flight</button>
                    </div>
                    {/* DateRange Picker */}
                    {
                        dateShow ? (
                            <DateRange
                                direction={'horizontal'}
                                dateDisplayFormat={'yyyy-MM-dd'}
                                months={2}
                                showDateDisplay={false}
                                className='rounded-lg absolute top-10'
                                ranges={[selectionRange]}
                                minDate={new Date()}
                                rangeColors={['#288bc4']}
                                onChange={handleSelect}
                                onShownDateChange={() => {
                                    setDateShow(false)
                                    console.log('hi')
                                }}
                            />
                        ) : null
                    }
                </div>
            </div >
        </div >
    )
}

export default BookFlight

/*  */