'use client'

import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Navabar from './Navabar'
<<<<<<< HEAD
=======
import Footer from './Footer'
>>>>>>> 85243583e93b2f588ec4006326509cdc2c6f166f

const Home = () => {
    return (
        <>
            <div className="h-screen w-full">
                <Navabar />
                <div className="px-14">
                    <div className="h-screen max-w-2xl mx-auto flex flex-col items-center justify-center text-center gap-8">
                        <div className="py-1 px-3 text-sm leading-6 text-muted-foreground ring-1 ring-gray-900/10 hover:ring-gray-900/20 rounded-full cursor-pointer dark:ring-gray-700/50 dark:text-gray-300">
                            <h4 className='flex gap-1 items-center'>Announcing our next round of funding.<Link href={'/'} className='flex items-center text-emerald-600 dark:text-emerald-500 font-semibold gap-1'>Read More <MoveRight /></Link></h4>
                        </div>
                        <div className="">
                            <h1 className='text-4xl font-bold tracking-tight sm:text-6xl'>Realtime chat and video</h1>
                            <p className='mt-6 text-lg leading-8 text-muted-foreground dark:text-gray-300'>Build a chat or video application in minutes. Our SDKs and APIs make it easy to add messaging, voice, and video to your app.</p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
<<<<<<< HEAD
                                <Link href={'/'} className='rounded-md bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600'>
=======
                                <Link href={'/chat'} className='rounded-md bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600'>
>>>>>>> 85243583e93b2f588ec4006326509cdc2c6f166f
                                    Getting started
                                </Link>
                                <Link href={'/'} className='text-sm font-semibold leading-6 flex items-center gap-1'>
                                    Learn more <MoveRight />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
<<<<<<< HEAD
=======
                <Footer />
>>>>>>> 85243583e93b2f588ec4006326509cdc2c6f166f
            </div>
        </>
    )
}

export default Home