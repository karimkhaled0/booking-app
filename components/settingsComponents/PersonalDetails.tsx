import { CameraIcon, CheckCircleIcon, ExclamationCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import profileBlank from '../../public/profileBlank.png'
import { useQuery } from "@tanstack/react-query";
import { getUserData } from '../../fetching/getUserData'
import axios from 'axios'
import { useOnClickOutside } from 'usehooks-ts';
type Props = {}


const PersonalDetails = (props: Props) => {
    const { data, refetch, isError } = useQuery(
        ["userData"],
        getUserData,
        { staleTime: Infinity }
    );
    // user data
    const [name, setName] = useState('Let us know what to call you')
    const [email, setEmail] = useState('Add your email')
    const [phoneNumber, setPhoneNumber] = useState('Add your phone number')
    const [birth, setBirth] = useState('Enter your date of birth')
    const [gendar, setGendar] = useState('Select your gender')
    const [address, setAddress] = useState('Add your address')
    // edit user data
    const [editName, setEditName] = useState(false)

    // updated states
    const [updatedFirstName, setUpdatedFirstName] = useState('')
    const [updatedLastName, setUpdatedLastName] = useState('')

    // edit user data errors
    const [updatedFirstNameError, setUpdatedFirstNameError] = useState(false)
    const [updatedLastNameError, setUpdatedLastNameError] = useState(false)

    // useEffect to avoid react-hydration-error
    useEffect(() => {
        if (data?.data?.name) {
            setName(data?.data?.name)
        }
        if (data?.data?.email) {
            setEmail(data?.data?.email)
        }
        if (data?.data?.phoneNumber) {
            setPhoneNumber(data?.data?.phoneNumber)
        }
        if (data?.data?.birth) {
            setBirth(data?.data?.birth)
        }
        if (data?.data?.gendar) {
            setGendar(data?.data?.gendar)
        }
        if (data?.data?.address) {
            setAddress(data?.data?.address)
        }

    }, [data?.data?.address, data?.data?.birth, data?.data?.email, data?.data?.gendar, data?.data?.name, data?.data?.phoneNumber])
    const handleEditName = () => {
        setEditName(!editName)
    }

    // updata the data
    const updateData = async () => {
        const options = {
            method: 'PUT',
            url: `https://test-uy42.onrender.com/api/user/${data?.data?._id}`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'authorization': `Bearer ${localStorage.token}`
            },
            data: {
                name: `${updatedFirstName} ${updatedLastName}`,
            }
        };
        if (!updatedFirstName) {
            setUpdatedFirstNameError(true)
        }
        if (!updatedLastName) {
            setUpdatedLastNameError(true)
        } else {
            const res = await axios.request(options).then(function (response) {
                setEditName(false)
                setUpdatedLastName('')
                setUpdatedLastNameError(false)
                setUpdatedFirstName('')
                setUpdatedFirstNameError(false)
            }).catch(function (error) {
                return
            });
        }

        refetch()
    }





    // Photo upload functions *start*
    // For uploading photo
    const [profilePhoto, setProfilePhoto] = useState<File>(Object)
    // Preview the image when uploading
    const [imagePreview, setImagePreview] = useState(Object)
    // set the image from database
    const [photo, setPhoto] = useState('')
    // Prgress
    const [progress, setProgress] = useState(Number)
    // Uploaded successfully
    const [uploaded, setUploaded] = useState(String)
    // Error while uploading
    const [uploadError, setUploadError] = useState(String)
    const [modal, setModal] = useState(false)
    // onclick outside hide siginin
    const modalOutside = useRef(null)
    const handleModalClickOutside = () => {
        setModal(false)
        setProgress(0)
        setUploaded('')
    }
    useOnClickOutside(modalOutside, handleModalClickOutside)


    const handlefile = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (!e.target.files) return
        if (e.target.files[0]?.size > 996457) {
            setUploadError('File is too large max size is 1mb')
        } else {
            setUploadError('')
            setUploaded('')
            setProgress(0)
            setProfilePhoto(e.target.files[0])
            setImagePreview(e.target.files[0] ? { ['name']: window.URL.createObjectURL(e.target.files[0]) } : Object)
        }
    }

    const uploadPhoto = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = new FormData();
        form.append("photo", profilePhoto);
        const options = {
            method: 'PUT',
            url: `https://test-uy42.onrender.com/api/user/upload/${data?.data?._id}`,
            headers: {
                'Content-Type': '',
                authorization: `Bearer ${localStorage.token}`
            },
            data: form,
            onUploadProgress: (progressEvent: any) => {
                setProgress(Math.round((progressEvent.loaded * 100) / progressEvent.total))
            }
        };
        axios.request(options).then(function (response) {
            refetch()
            setUploaded('Successfully uploaded')
            setUploadError('')
        }).catch(function (error) {
            console.error(error);
        });
    }

    useEffect(() => {
        // const photoData = 'data:image/jpeg;base64,' + Buffer.from(`${data?.data?.photo?.data}`, 'base64')
        setPhoto(`data:image/png;base64,${data?.data?.photo?.data}`)
    }, [data?.data?.photo?.data, photo, profilePhoto, refetch])
    // *end*

    return (
        <div className='ml-5'>
            {/* text and photo */}
            <div className='flex items-center border-b border-gray-300 justify-between px-5 py-2'>
                <div className='space-y-2'>
                    <h1 className='text-3xl text-black font-bold'>Personal details</h1>
                    <h1 className='text-sm text-gray-500'>Update your information and find out how it{"'"}s used.</h1>
                </div>
                <div onClick={() => {
                    setModal(!modal)
                }} className='p-0.5 border border-blue-500 rounded-full cursor-pointer clickButton'>
                    <div className='w-16 h-16 z-10 relative'>
                        <Image
                            className='rounded-full'
                            src={photo === 'data:image/png;base64,undefined' ? profileBlank : photo}
                            alt='profile'
                            layout='fill'
                        />
                        <div className='flex justify-center items-center absolute bg-gray-500/50 right-0 left-0 bottom-0 w-full h-7 rounded-bl-full rounded-br-full z-0'>
                            <CameraIcon
                                className='h-4 w-4 text-white'
                            />
                        </div>
                    </div>
                </div>
                {/* upload photo Modal */}
                <div ref={modalOutside} id="authentication-modal" data-modal-placement="center" tabIndex={1} aria-hidden="true"
                    className={modal ? "overflow-y-auto overflow-x-hidden fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-50 w-[500px] h-fit justify-center items-center" : "hidden"}>
                    <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <button onClick={() => {
                                setModal(!modal)
                            }} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                <span className="sr-only" >Close modal</span>
                            </button>
                            <div className="py-6 px-6 lg:px-8">
                                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Upload your avatar</h3>
                                <form encType="multipart/form-data" onSubmit={uploadPhoto} className='flex items-center space-x-5'>
                                    <div className='w-28 h-28'>
                                        <Image
                                            className='rounded-full'
                                            src={photo === 'data:image/png;base64,undefined' ? imagePreview.name ? imagePreview.name : profileBlank : photo}
                                            alt='profile blank'
                                            width={80}
                                            height={80}
                                        />
                                    </div>
                                    <div className='flex flex-col items-end space-y-5'>
                                        <input onChange={handlefile} accept="image/*" name='photo' className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                                        <button className='p-2 px-4 text-white  font-light rounded-xl backdrop-blur-2xl bg-white/5 clickButton' type="submit">Upload</button>
                                    </div>
                                </form>
                                <div className={uploadError ? 'flex items-center justify-center space-x-2 mt-5' : 'hidden'}>
                                    <XCircleIcon
                                        className='h-4 w-4 text-red-500'
                                    />
                                    <h1 className='text-sm text-red-500'>{uploadError}</h1>
                                </div>
                                <div className={progress ? "w-full bg-gray-200 rounded-full dark:bg-gray-700" : 'hidden'}>
                                    <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{
                                        width: `${progress}%`
                                    }}> {progress}%</div>
                                </div>
                                <div className={uploaded ? 'flex items-center justify-center space-x-2 mt-5' : 'hidden'}>
                                    <CheckCircleIcon
                                        className='h-4 w-4 text-green-500'
                                    />
                                    <h1 className='text-sm text-green-500'>{uploaded}</h1>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Name */}
            <div className={editName ? 'personalDetailDiv my-2 mx-2 h-40' : 'personalDetailDiv my-2 mx-2 h-16 max-h-20'}>
                <h1 className={editName ? 'text-black ml-5 place-self-start' : 'text-black ml-5 justify-self-start'}>Name</h1>
                <h1 className={editName ? 'hidden' : 'text-gray-500'}>{name}</h1>
                <h1 className={editName ? 'hidden' : 'edit'} onClick={handleEditName}>Edit</h1>
                {/* Edit name */}
                {
                    editName && (
                        <div className='w-full flex items-center justify-between place-self-start'>
                            <div className='flex items-center space-x-5'>
                                <div>
                                    <label htmlFor="first_name" className="block text-base mb-2 font-medium text-gray-900">First name</label>
                                    <div className='relative'>
                                        <input
                                            onChange={(e) => {
                                                setUpdatedFirstName(e.target.value)
                                                setUpdatedFirstNameError(false)
                                            }}
                                            type="text" value={updatedFirstName} id="first_name" className={updatedFirstNameError ? "nameInputPersonal border-red-500 focus:outline-red-500" : "nameInputPersonal"} required />
                                        <ExclamationCircleIcon
                                            className={updatedFirstNameError ? 'h-5 w-5 absolute text-red-500 right-1 top-1/4' : 'hidden'}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="last_name" className="block text-base mb-2 font-medium text-gray-900">Last name</label>
                                    <div className='relative'>
                                        <input
                                            onChange={(e) => {
                                                setUpdatedLastName(e.target.value)
                                                setUpdatedLastNameError(false)
                                            }}
                                            type="text" value={updatedLastName} id="last_name" className={updatedLastNameError ? "nameInputPersonal border-red-500 focus:outline-red-500" : "nameInputPersonal"} required />
                                        <ExclamationCircleIcon
                                            className={updatedLastNameError ? 'h-5 w-5 absolute text-red-500 right-1 top-1/4' : 'hidden'}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                {
                    editName && (
                        <div className='place-self-end flex flex-col py-2 my-auto space-y-16'>
                            <h1 className='clickButton text-blue-500 hover:underline' onClick={() => {
                                setEditName(false)
                                setUpdatedLastName('')
                                setUpdatedLastNameError(false)
                                setUpdatedFirstName('')
                                setUpdatedFirstNameError(false)
                            }}>Cancel</h1>
                            <button className='clickButton text-white bg-blue-500 px-3 p-2 rounded-lg' onClick={updateData}>Save</button>
                        </div>
                    )
                }


            </div>
            {/* TODO: */}
            {/* Email */}
            <div className='personalDetailDiv my-2 pb-2 mx-2 h-fit'>
                <h1 className='text-black ml-5 justify-self-start'>Email address</h1>
                <div className='flex flex-col'>
                    <h1 className='text-gray-500'>{email}</h1>
                    <h1 className='text-gray-500 w-[500px]'>This is the email address you use to sign in.
                        It{"'"}s also where we send your booking confirmations.</h1>
                </div>
                <h1 className='edit'>Edit</h1>
            </div>
            {/* Phone */}
            <div className='personalDetailDiv my-2 pb-2 mx-2 h-fit'>
                <h1 className='text-black ml-5 justify-self-start'>Phone number</h1>
                <div className='flex flex-col'>
                    <h1 className='text-gray-500'>{phoneNumber}</h1>
                    <h1 className='text-gray-500 w-[500px]'>Properties or attractions you book can use this number to contact you.
                        You can also use it to sign in.</h1>
                </div>
                <h1 className='edit'>Edit</h1>
            </div>
            {/* Date of Birth */}
            <div className='personalDetailDiv my-2 mx-2 h-16 max-h-20'>
                <h1 className='text-black ml-5 justify-self-start'>Date of birth</h1>
                <h1 className='text-gray-500'>{birth}</h1>
                <h1 className='edit'>Edit</h1>
            </div>
            {/* Gendar */}
            <div className='personalDetailDiv my-2 mx-2 h-16 max-h-20'>
                <h1 className='text-black ml-5 justify-self-start'>Gendar</h1>
                <h1 className='text-gray-500'>{gendar}</h1>
                <h1 className='edit'>Edit</h1>
            </div>
            {/* Address */}
            <div className='personalDetailDiv my-2 mx-2 h-16 max-h-20'>
                <h1 className='text-black ml-5 justify-self-start'>Address</h1>
                <h1 className='text-gray-500'>{address}</h1>
                <h1 className='edit'>Edit</h1>
            </div>
        </div>
    )
}

export default PersonalDetails
