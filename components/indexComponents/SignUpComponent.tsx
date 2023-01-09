import React, { useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { getIp } from '../../fetching/getIp'

type Props = {}

const SignUpComponent = (props: Props) => {
    const { data } = useQuery(
        ["getIp"],
        getIp,
        { staleTime: Infinity }
    );
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [password2, setPassword2] = useState('')
    const [password2Error, setPassword2Error] = useState('')
    const [modal, setModal] = useState(false)
    const [modal2, setModal2] = useState(false)

    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const options = {
            method: 'POST',
            url: 'https://data.mongodb-api.com/app/data-mkxzz/endpoint/data/v1/signup',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: {
                name: email.substring(0, email.indexOf('@')),
                email: email,
                password: password,
                password2: password2,
                address: data.country_name
            }
        };

        const res = await axios.request(options)
        const error = res.data.errors
        console.log(error)
        if (!error) {
            setModal(true)
            setModal2(false)
        } else {
            if (error.email) {
                setEmailError(error.email)
            }
            if (error.password) {
                setPasswordError(error.password)
            }
            if (error.password2) {
                setPassword2Error(error.password2)
            }
        }

    }

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const options = {
            method: 'POST',
            url: 'https://booking-back-oumak52pt-kkmawe.vercel.app/signin',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: {
                email: email,
                password: password,
            }
        };

        const res = await axios.request(options)

        const error = res.data.errors
        const token = res.data.token
        if (!error) {
            localStorage.setItem('token', token)
            window.location.reload()
        } else {
            if (error.email) {
                setEmailError(error.email)
            }
            if (error.password) {
                setPasswordError(error.password)
            }
        }

    }

    // onclick outside hide siginin
    const modalOutside = useRef(null)
    const handleModalClickOutside = () => {
        setModal(false)
    }
    useOnClickOutside(modalOutside, handleModalClickOutside)

    // onclick outside hide siginup
    const modal2Outside = useRef(null)
    const handleModal2ClickOutside = () => {
        setModal2(false)
    }
    useOnClickOutside(modal2Outside, handleModal2ClickOutside)
    // const prof = new URL('blob:http://localhost:3000/8eaee323-37d2-4b8c-8fa0-8555649d8d8d')
    // console.log(prof.toJSON())
    return (
        <div className='relative'>
            <div className='topHeaderClass w-fit'>
                <button
                    onClick={() => {
                        setModal(!modal)
                    }}
                    className='w-16 rounded-full text-whitefont-semibold clickButton'>Login</button>
            </div>
            {/* Login Modal */}
            <div ref={modalOutside} id="authentication-modal" data-modal-placement="center" tabIndex={1} aria-hidden="true"
                className={modal ? "overflow-y-auto overflow-x-hidden fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-50 w-[400px] h-fit justify-center items-center" : "hidden"}>
                <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                            <svg onClick={() => {
                                setModal(!modal)
                            }} aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only" >Close modal</span>
                        </button>
                        <div className="py-6 px-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                            <form className="space-y-6" method='POST' onSubmit={handleLogin}>
                                <div>
                                    <label htmlFor="emailLogin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                                    <input
                                        onChange={(e) => {
                                            setEmail(e.target.value)
                                            setEmailError('')
                                        }}
                                        type="email" value={email} name="emailLogin" id="emailLogin" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                                    <h1 className='text-sm text-red-500 ml-2'>{emailError}</h1>

                                </div>
                                <div>
                                    <label htmlFor="passwordLogin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                                    <input
                                        onChange={(e) => {
                                            setPassword(e.target.value)
                                            setPasswordError('')
                                        }}
                                        type="password" value={password} name="passwordLogin" id="passwordLogin" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                    <h1 className='text-sm text-red-500 ml-2'>{passwordError}</h1>
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
                                        </div>
                                        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                    </div>
                                    <a className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                                </div>
                                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                    Not registered? <a className="text-blue-700 hover:underline cursor-pointer dark:text-blue-500"
                                        onClick={() => {
                                            setModal(false)
                                            setModal2(true)
                                        }}
                                    >Create account</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Signup Modal */}
            <div ref={modal2Outside} id="authentication-modal2" data-modal-placement="center" tabIndex={1} aria-hidden="true"
                className={modal2 ? "overflow-y-auto overflow-x-hidden fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-50 w-[400px] h-fit justify-center items-center" : "hidden"}>
                <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                            <svg onClick={() => {
                                setModal2(!modal2)
                            }} aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only" >Close modal</span>
                        </button>
                        <div className="py-6 px-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                            <form className="space-y-6" method='POST' onSubmit={handleSignUp}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                                    <input
                                        onChange={(e) => {
                                            setEmail(e.target.value)
                                            setEmailError('')
                                        }}
                                        type="email" value={email} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                                    <h1 className='text-sm text-red-500 ml-2'>{emailError}</h1>

                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                                    <input
                                        onChange={(e) => {
                                            setPassword(e.target.value)
                                            setPasswordError('')
                                        }}
                                        type="password" value={password} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                    <h1 className='text-sm text-red-500 ml-2'>{passwordError}</h1>
                                </div>
                                <div>
                                    <label htmlFor="password2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Repeat password</label>
                                    <input
                                        onChange={(e) => {
                                            setPassword2(e.target.value)
                                            setPassword2Error('')
                                        }}
                                        type="password" value={password2} name="password2" id="password2" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                    <h1 className='text-sm text-red-500 ml-2'>{password2Error}</h1>
                                </div>
                                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Creat a new account</button>
                                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                    Registered? <a className="text-blue-700 hover:underline cursor-pointer dark:text-blue-500"
                                        onClick={() => {
                                            setModal(true)
                                            setModal2(false)
                                        }}
                                    >Login</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpComponent