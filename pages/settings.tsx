/* eslint-disable react-hooks/rules-of-hooks */
import Head from 'next/head'
import Image from 'next/image'
import React, { Suspense, useEffect, useState } from 'react'
import TopHeader from '../components/indexComponents/TopHeader'
import skyImage from '../public/sky4.png'
import planeImage from '../public/plane.png'
import { AdjustmentsHorizontalIcon, BellAlertIcon, CreditCardIcon, LockClosedIcon, UserPlusIcon, UsersIcon } from '@heroicons/react/24/outline'
import LeftHeader from '../components/indexComponents/LeftHeader'
import { useRouter } from 'next/router'
import LoadingSpinner from '../components/indexComponents/LoadingSpinner'
import { useQuery } from "@tanstack/react-query";
import { getUserData } from '../fetching/getUserData'
type Props = {}

const settings = (props: Props) => {
    const { isError } = useQuery(
        ["userData"],
        getUserData,
        { staleTime: Infinity }
    );
    const router = useRouter()
    const PersonalDetails = React.lazy(() => import('../components/settingsComponents/PersonalDetails'));
    const Preferences = React.lazy(() => import('../components/settingsComponents/Preferences'));
    const Security = React.lazy(() => import('../components/settingsComponents/Security'));
    const Payment = React.lazy(() => import('../components/settingsComponents/Payment'));
    const Notification = React.lazy(() => import('../components/settingsComponents/Notification'));
    const Travellers = React.lazy(() => import('../components/settingsComponents/Travellers'));

    const [personal, setPersonal] = useState(true)
    const [preferences, setPreferences] = useState(false)
    const [security, setSecurity] = useState(false)
    const [payment, setPayment] = useState(false)
    const [notification, setNotification] = useState(false)
    const [travellers, setTravellers] = useState(false)

    useEffect(() => {
        if (isError) {
            router.push({
                pathname: '/'
            })
        }
    }, [isError, router])
    return (
        // TODO: make the edit buttons functions
        // TODO: make language and currancies select
        <div className='bg-white text-white h-screen w-screen overflow-y-scroll
            z-0 overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#288bc4]/80 relative'>
            <Head>
                <title>KarimBook</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Head Section */}
            <div className='h-16 from-[#1a507c] via-[#1a507cc7] to-white bg-gradient-to-b relative'>
                {/* Background Image */}

                {/* Sky image */}
                <div className='w-full h-3'>
                    <div className='w-full h-20 absolute -bottom-3'>
                        <Image
                            src={skyImage}
                            alt='Sky'
                            layout='fill'
                            objectFit='cover'
                            priority={true}

                        />
                    </div>
                </div>
                <h3
                    className='absolute top-4 left-60 font-fasthand font-semibold text-white text-3xl -rotate-6 cursor-pointer'
                    onClick={() => {
                        router.push({
                            pathname: '/'
                        })
                    }}
                >KarimBook</h3>

                {/* Top Header*/}
                <TopHeader />
            </div >
            {
                isError ? null : (
                    <div className='max-w-6xl mx-auto grid grid-cols-4 my-4'>
                        {/* Left side */}
                        <div className='h-fit border border-gray-300 rounded-lg'>
                            {/* Personal details */}
                            <div className={personal ? 'p-5 border-b border-l-4 border-l-blue-500 border-b-gray-300 flex items-center space-x-5 group cursor-pointer' : 'p-5 border-b border-gray-300 flex items-center space-x-5 group cursor-pointer'} onClick={() => {
                                setPersonal(true)
                                setPreferences(false)
                                setSecurity(false)
                                setPayment(false)
                                setNotification(false)
                                setTravellers(false)
                            }}>
                                <UserPlusIcon
                                    className={personal ? 'h-9 w-9 text-blue-500 border border-gray-100 p-2 bg-gray-200 rounded-full' : 'h-9 w-9 group-hover:text-blue-500 text-gray-800 border border-gray-100 p-2 bg-gray-200 rounded-full'}
                                />
                                <h1 className={personal ? 'text-base text-blue-500 group-hover:underline' : 'text-base group-hover:text-blue-500 text-gray-800 group-hover:underline'}>Personal details</h1>
                            </div>
                            {/* Prefernces */}
                            <div className={preferences ? 'p-5 border-b border-l-4 border-l-blue-500 border-b-gray-300 flex items-center space-x-5 group cursor-pointer' : 'p-5 border-b border-gray-300 flex items-center space-x-5 group cursor-pointer'} onClick={() => {
                                setPersonal(false)
                                setPreferences(true)
                                setSecurity(false)
                                setPayment(false)
                                setNotification(false)
                                setTravellers(false)
                            }}>
                                <AdjustmentsHorizontalIcon
                                    className={preferences ? 'h-9 w-9 text-blue-500 border border-gray-100 p-2 bg-gray-200 rounded-full' : 'h-9 w-9 group-hover:text-blue-500 text-gray-800 border border-gray-100 p-2 bg-gray-200 rounded-full'}
                                />
                                <h1 className={preferences ? 'text-base text-blue-500 group-hover:underline' : 'text-base group-hover:text-blue-500 text-gray-800 group-hover:underline'}>Prefernces</h1>
                            </div>
                            {/* Security */}
                            <div className={security ? 'p-5 border-b border-l-4 border-l-blue-500 border-b-gray-300 flex items-center space-x-5 group cursor-pointer' : 'p-5 border-b border-gray-300 flex items-center space-x-5 group cursor-pointer'} onClick={() => {
                                setPersonal(false)
                                setPreferences(false)
                                setSecurity(true)
                                setPayment(false)
                                setNotification(false)
                                setTravellers(false)
                            }}>
                                <LockClosedIcon
                                    className={security ? 'h-9 w-9 text-blue-500 border border-gray-100 p-2 bg-gray-200 rounded-full' : 'h-9 w-9 group-hover:text-blue-500 text-gray-800 border border-gray-100 p-2 bg-gray-200 rounded-full'}
                                />
                                <h1 className={security ? 'text-base text-blue-500 group-hover:underline' : 'text-base group-hover:text-blue-500 text-gray-800 group-hover:underline'}>Security</h1>
                            </div>
                            {/* Payment details */}
                            <div className={payment ? 'p-5 border-b border-l-4 border-l-blue-500 border-b-gray-300 flex items-center space-x-5 group cursor-pointer' : 'p-5 border-b border-gray-300 flex items-center space-x-5 group cursor-pointer'} onClick={() => {
                                setPersonal(false)
                                setPreferences(false)
                                setSecurity(false)
                                setPayment(true)
                                setNotification(false)
                                setTravellers(false)
                            }}>
                                <CreditCardIcon
                                    className={payment ? 'h-9 w-9 text-blue-500 border border-gray-100 p-2 bg-gray-200 rounded-full' : 'h-9 w-9 group-hover:text-blue-500 text-gray-800 border border-gray-100 p-2 bg-gray-200 rounded-full'}
                                />
                                <h1 className={payment ? 'text-base text-blue-500 group-hover:underline' : 'text-base group-hover:text-blue-500 text-gray-800 group-hover:underline'}>Payment details</h1>
                            </div>
                            {/* Email notification */}
                            <div className={notification ? 'p-5 border-b border-l-4 border-l-blue-500 border-b-gray-300 flex items-center space-x-5 group cursor-pointer' : 'p-5 border-b border-gray-300 flex items-center space-x-5 group cursor-pointer'} onClick={() => {
                                setPersonal(false)
                                setPreferences(false)
                                setSecurity(false)
                                setPayment(false)
                                setNotification(true)
                                setTravellers(false)
                            }}>
                                <BellAlertIcon
                                    className={notification ? 'h-9 w-9 text-blue-500 border border-gray-100 p-2 bg-gray-200 rounded-full' : 'h-9 w-9 group-hover:text-blue-500 text-gray-800 border border-gray-100 p-2 bg-gray-200 rounded-full'}
                                />
                                <h1 className={notification ? 'text-base text-blue-500 group-hover:underline' : 'text-base group-hover:text-blue-500 text-gray-800 group-hover:underline'}>Email notification</h1>
                            </div>
                            {/* Other travellers */}
                            <div className={travellers ? 'p-5 border-b border-l-4 border-l-blue-500 border-b-gray-300 flex items-center space-x-5 group cursor-pointer' : 'p-5 border-b border-gray-300 flex items-center space-x-5 group cursor-pointer'} onClick={() => {
                                setPersonal(false)
                                setPreferences(false)
                                setSecurity(false)
                                setPayment(false)
                                setNotification(false)
                                setTravellers(true)
                            }}>
                                <UsersIcon
                                    className={travellers ? 'h-9 w-9 text-blue-500 border border-gray-100 p-2 bg-gray-200 rounded-full' : 'h-9 w-9 group-hover:text-blue-500 text-gray-800 border border-gray-100 p-2 bg-gray-200 rounded-full'}
                                />
                                <h1 className={travellers ? 'text-base text-blue-500 group-hover:underline' : 'text-base group-hover:text-blue-500 text-gray-800 group-hover:underline'}>Other travellers</h1>
                            </div>
                        </div>
                        {/* Right side */}
                        <div className='col-span-3'>
                            {
                                personal && (
                                    <Suspense fallback={<LoadingSpinner />}>
                                        <PersonalDetails />
                                    </Suspense>
                                )
                            }
                            {
                                preferences && (
                                    <Suspense fallback={<LoadingSpinner />}>
                                        <Preferences />
                                    </Suspense>
                                )
                            }
                            {
                                security && (
                                    <Suspense fallback={<LoadingSpinner />}>
                                        <Security />
                                    </Suspense>
                                )
                            }
                            {
                                payment && (
                                    <Suspense fallback={<LoadingSpinner />}>
                                        <Payment />
                                    </Suspense>
                                )
                            }
                            {
                                notification && (
                                    <Suspense fallback={<LoadingSpinner />}>
                                        <Notification />
                                    </Suspense>
                                )
                            }
                            {
                                travellers && (
                                    <Suspense fallback={<LoadingSpinner />}>
                                        <Travellers />
                                    </Suspense>
                                )
                            }
                        </div>
                    </div>
                )
            }
        </div >
    )
}

export default settings