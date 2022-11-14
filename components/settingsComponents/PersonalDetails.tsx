import { CameraIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import profileBlank from '../../public/profileBlank.png'
import { useQuery } from "@tanstack/react-query";
import { getUserData } from '../../fetching/getUserData'
import axios from 'axios'
import { useOnClickOutside } from 'usehooks-ts';
type Props = {}

const PersonalDetails = (props: Props) => {
    const { data, refetch } = useQuery(
        ["signup"],
        getUserData,
        { staleTime: Infinity }
    );
    // For uploading photo
    const [profilePhoto, setProfilePhoto] = useState<File>(Object)
    // Preview the image when uploading
    const [imagePreview, setImagePreview] = useState(Object)
    // set the image from database
    const [photo, setPhoto] = useState(String)
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
            url: `http://localhost:8000/api/user/upload/${data?.data?._id}`,
            headers: {
                'Content-Type': '',
                authorization: `Bearer ${localStorage.token}`
            },
            data: form,
            onUploadProgress: (progressEvent: any) => {
                setProgress(Math.round((progressEvent.loaded * 100) / progressEvent.total))
            }
        };
        const config = {

        }
        axios.request(options).then(function (response) {
            refetch()
            setUploaded('Successfully uploaded')
            setUploadError('')
        }).catch(function (error) {
            console.error(error);
        });
    }

    useEffect(() => {
        setPhoto(`data:image/png;base64,${data?.data?.photo.data}`)
    }, [data?.data?.photo.data, profilePhoto, refetch])

    return (
        <div className='ml-5'>
            {/* text and photo */}
            <div className='flex items-center justify-between px-5 py-2'>
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
                            src={photo ? photo : profileBlank}
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
                            <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                                <svg onClick={() => {
                                    setModal(!modal)
                                }} aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                <span className="sr-only" >Close modal</span>
                            </button>
                            <div className="py-6 px-6 lg:px-8">
                                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Upload your avatar</h3>
                                <form encType="multipart/form-data" onSubmit={uploadPhoto} className='flex items-center space-x-5'>
                                    <div className='w-28 h-28'>
                                        <Image
                                            className='rounded-full'
                                            src={imagePreview.name ? imagePreview.name : photo || profileBlank}
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
            <div className='grid grid-cols-3 items-center border-y border-gray-300 my-2 mx-2 h-16 max-h-20'>
                <h1 className='text-black ml-5 justify-self-start'>Name</h1>
                <h1 className='text-gray-500'>Let us know what to call you</h1>
                <h1 className='text-blue-700 font-semibold justify-self-end cursor-pointer p-1 hover:bg-blue-100 rounded-lg'>Edit</h1>
            </div>
            {/* Email */}
            <div className='grid grid-cols-3 items-center border-b border-gray-300 my-2 pb-2 mx-2 h-fit'>
                <h1 className='text-black ml-5 justify-self-start'>Email address</h1>
                <div className='flex flex-col'>
                    <h1 className='text-gray-500'>kkmawe@gmail.com</h1>
                    <h1 className='text-gray-500 w-[500px]'>This is the email address you use to sign in.
                        It’s also where we send your booking confirmations.</h1>
                </div>
                <h1 className='text-blue-700 font-semibold justify-self-end cursor-pointer p-1 hover:bg-blue-100 rounded-lg'>Edit</h1>
            </div>
            {/* Phone */}
            <div className='grid grid-cols-3 items-center border-b border-gray-300 my-2 pb-2 mx-2 h-fit'>
                <h1 className='text-black ml-5 justify-self-start'>Phone number</h1>
                <div className='flex flex-col'>
                    <h1 className='text-gray-500'>Add your phone number</h1>
                    <h1 className='text-gray-500 w-[500px]'>Properties or attractions you book can use this number to contact you.
                        You can also use it to sign in.</h1>
                </div>
                <h1 className='text-blue-700 font-semibold justify-self-end cursor-pointer p-1 hover:bg-blue-100 rounded-lg'>Edit</h1>
            </div>
            {/* Date of Birth */}
            <div className='grid grid-cols-3 items-center border-b border-gray-300 my-2 mx-2 h-16 max-h-20'>
                <h1 className='text-black ml-5 justify-self-start'>Date of birth</h1>
                <h1 className='text-gray-500'>Enter your date of birth</h1>
                <h1 className='text-blue-700 font-semibold justify-self-end cursor-pointer p-1 hover:bg-blue-100 rounded-lg'>Edit</h1>
            </div>
            {/* Gendar */}
            <div className='grid grid-cols-3 items-center border-b border-gray-300 my-2 mx-2 h-16 max-h-20'>
                <h1 className='text-black ml-5 justify-self-start'>Gendar</h1>
                <h1 className='text-gray-500'>Select your gender</h1>
                <h1 className='text-blue-700 font-semibold justify-self-end cursor-pointer p-1 hover:bg-blue-100 rounded-lg'>Edit</h1>
            </div>
            {/* Address */}
            <div className='grid grid-cols-3 items-center border-b border-gray-300 my-2 mx-2 h-16 max-h-20'>
                <h1 className='text-black ml-5 justify-self-start'>Address</h1>
                <h1 className='text-gray-500'>Egypt</h1>
                <h1 className='text-blue-700 font-semibold justify-self-end cursor-pointer p-1 hover:bg-blue-100 rounded-lg'>Edit</h1>
            </div>
        </div>
    )
}

export default PersonalDetails