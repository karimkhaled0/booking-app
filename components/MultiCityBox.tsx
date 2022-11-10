import { CalendarDaysIcon, GlobeEuropeAfricaIcon, MapPinIcon, PaperAirplaneIcon, TicketIcon, UserGroupIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react'

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar } from 'react-date-range';
import { autoCompleteFrom, autoCompleteTo } from '../fetching/getAutoComplete'
import { useQuery } from "@tanstack/react-query";
type Props = {
    index: number,
}

const MultiCityBox = ({ index }: Props) => {
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [fromValue, setFromValue] = useState('')
    const [toValue, setToValue] = useState('')
    // Fetching with query
    const useQueryMultiple = () => {
        const res1 = useQuery(
            ["getAutoComplete", { queryFrom: from }],
            autoCompleteFrom,
            { staleTime: Infinity }
        );
        const res2 = useQuery(
            ["getAutoComplete", { queryTo: to }],
            autoCompleteTo,
            { staleTime: Infinity }
        );
        return [res1, res2];
    }
    const [
        { isLoading: loading1, data: data1 },
        { isLoading: loading2, data: data2 }
    ] = useQueryMultiple()

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
    return (
        <div className='flex items-center justify-between mx-5 space-x-5'>
            <div className='relative'>
                <h1 className='absolute text-lg font-semibold text-gray-500 right-0 rounded-full w-[30px] h-[30px] border border-gray-400 text-center z-20'>{index}</h1>
            </div>
            {/* From */}
            <div className='flex flex-col space-y-2 relative'>
                {/* From Icon */}
                <div className='flex items-center space-x-1'>
                    <MapPinIcon
                        className='h-4 w-4 text-gray-400'
                    />
                    <h1 className='text-gray-400'>FROM</h1>
                </div>
                {/* From Search */}
                <div className=''>
                    <input
                        onChange={(e) => {
                            setFrom(e.target.value)
                            setFromValue(e.target.value)
                        }}
                        type="text" value={fromValue} className="whitespace-nowrap inline-block text-ellipsis overflow-hidden text-start font-semibold p-2 w-64 text-gray-900 bg-gray-50 rounded-sm border border-gray-400 sm:text-md focus:ring-blue-500 focus:border-blue-500 " />
                    {/* Airport Selection FROM */}
                    <div className={from ? 'absolute z-40 bg-white shadow-xl flex flex-col w-64 rounded-lg border-2 p-2 space-y-2 text-gray-500' : 'hidden'}>
                        {
                            data1?.map((airport: any) => {
                                if (!airport.airportName) {
                                    return (
                                        <div key={airport.id} className='flex items-center space-x-2 justify-between z-30'>
                                            <GlobeEuropeAfricaIcon
                                                className='h-6 w-6 text-gray-500'
                                            />
                                            <button
                                                onClick={() => {
                                                    setFromValue(`${airport.cityName}, ${airport.countryName} (${airport.cityCode})`)
                                                    setFrom('')
                                                }}
                                                className='text-left p-1.5 hover:text-blue-700 w-full'
                                            >{`${airport.cityName}, ${airport.countryName}`}</button>
                                            <h1 className='hover:text-blue-700'>{airport.cityCode}</h1>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div key={airport.id} className='flex items-center space-x-2 justify-between z-30'>

                                            <PaperAirplaneIcon
                                                className='h-5 w-5 text-gray-500'
                                            />
                                            <button
                                                onClick={() => {
                                                    setFromValue(`${airport.airportName}, ${airport.countryName} (${airport.airportCode})`)
                                                    setFrom('')
                                                }}
                                                className='text-left p-1.5 hover:text-blue-700 w-full'
                                            >{`${airport.airportName}, ${airport.countryName}`}</button>
                                            <h1 className='hover:text-blue-700'>{airport.airportCode}</h1>
                                        </div>
                                    )
                                }

                            })
                        }
                    </div>
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
                <div className='relative'>
                    <input
                        onChange={(e) => {
                            setTo(e.target.value)
                            setToValue(e.target.value)
                        }}
                        type="text" value={toValue} className="whitespace-nowrap inline-block text-ellipsis overflow-hidden text-start font-semibold p-2 w-64 text-gray-900 bg-gray-50 rounded-sm border border-gray-400 sm:text-md focus:ring-blue-500 focus:border-blue-500 " />
                    {/* Airport Selection TO */}
                    <div className={to ? 'absolute z-40 bg-white shadow-xl flex flex-col w-64 rounded-lg border-2 p-2 space-y-2 text-gray-500' : 'hidden'}>
                        {
                            data2?.map((airport: any) => {
                                if (!airport.airportName) {
                                    return (
                                        <div key={airport.id} className='flex items-center space-x-2 justify-between z-30'>
                                            <GlobeEuropeAfricaIcon
                                                className='h-5 w-5 text-gray-500'
                                            />
                                            <button
                                                onClick={() => {
                                                    setToValue(`${airport.cityName}, ${airport.countryName} (${airport.cityCode})`)
                                                    setTo('')
                                                }}
                                                className='text-left p-1.5 hover:text-blue-700 w-full'
                                            >{`${airport.cityName}, ${airport.countryName}`}</button>
                                            <h1 className='hover:text-blue-700'>{airport.cityCode}</h1>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div key={airport.id} className='flex items-center space-x-2 justify-between  z-30'>

                                            <PaperAirplaneIcon
                                                className='h-5 w-5 text-gray-500'
                                            />
                                            <button
                                                onClick={() => {
                                                    setToValue(`${airport.airportName}, ${airport.countryName} (${airport.airportCode})`)
                                                    setTo('')
                                                }}
                                                className='text-left p-1.5 hover:text-blue-700 w-full'
                                            >{`${airport.airportName}, ${airport.countryName}`}</button>
                                            <h1 className='hover:text-blue-700'>{airport.airportCode}</h1>
                                        </div>
                                    )
                                }

                            })
                        }
                    </div>
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
                <div className='border border-gray-400 rounded-sm p-0.5 hover:bg-gray-400 clickButton' onClick={() => {
                    setDateShow(!dateShow)
                }}>
                    <button
                        className='text-lg p-1 text-gray-800 hover:text-white font-light'
                    >{startDate.toDateString()}</button>
                </div>
            </div>
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
    )
}

export default MultiCityBox