import { CalendarDaysIcon, MapPinIcon, TicketIcon, UserGroupIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react'

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar } from 'react-date-range';


type Props = {}

const MultiCity = (props: Props) => {
    // Date selection
    const [startDate, setStartDate] = useState(new Date())
    const handleSelect = (item: any) => {
        setStartDate(item)
    }

    // This is for hide date picker when end date selected
    const [dateShow, setDateShow] = useState(false)

    const closeDatePicker = useEffect(() => {
        if (startDate.getTime()) {
            setDateShow(false)
        }
    }, [startDate])

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
            {/* TODO: make search in from and to */}
            <div className='space-y-3 relative'>
                {/* using state to re-render the component */}
                {
                    numberOfRows.map((i) => (
                        <div key={i} className='flex items-center justify-between mx-5 space-x-5'>
                            <div className='relative'>
                                <h1 className='absolute text-lg font-semibold text-gray-500 right-0 rounded-full w-[30px] h-[30px] border border-gray-400 text-center z-20'>{i}</h1>
                            </div>
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
                                    >{startDate.toDateString()}</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
                {/* TODO: make each date seperate */}
                {/* make the datrRange out of map to avoid multiple dateRange */}
                {/* DateRange Picker */}
                {
                    dateShow ? (
                        <Calendar
                            date={startDate}
                            direction={'horizontal'}
                            dateDisplayFormat={'yyyy-MM-dd'}
                            className='rounded-lg absolute top-0 right-0 z-20 shadow-xl border-blue-300 border'
                            minDate={new Date()}
                            color={'#288bc4'}
                            onChange={handleSelect}
                        />
                    ) : null
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
                                onClick={addRow}
                            >Add one more flight
                            </button>
                        ) : (
                            <button
                                className='uppercase bg-[#288bc4] px-4 py-3 rounded-xl text-white font-semibold clickButton mt-10'
                                onClick={addRow}
                            >Add one more flight
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