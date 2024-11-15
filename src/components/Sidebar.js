import DarkModeToggle from '@/utils/darkModeToogle'
import { SignedIn, UserButton } from '@clerk/nextjs'
import { Dock, HomeIcon, Megaphone, MessageCircleMore, MessageSquare, MoonIcon, Scan, UserRound } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    return (
        <>
            <div className="h-screen w-auto fixed border-r border-muted dark:border-gray-700/50 flex flex-col justify-between items-center">
                <div className="px-2 py-4 grid gap-2">
                    <Link href={'/'} className='size-9 font-medium text-sm flex justify-center items-center hover:bg-muted rounded-lg hover:dark:bg-gray-700/50'>
                        <HomeIcon className='size-5' />
                    </Link>
                    <Link href={''} className='size-9 font-medium text-sm flex justify-center items-center bg-muted rounded-lg dark:bg-gray-700/50'>
                        <MessageSquare className='size-5' />
                    </Link>
                    <Link href={''} className='size-9 font-medium text-sm flex justify-center items-center hover:bg-muted rounded-lg hover:dark:bg-gray-700/50'>
                        <UserRound className='size-5' />
                    </Link>
                    <Link href={''} className='size-9 font-medium text-sm flex justify-center items-center hover:bg-muted rounded-lg hover:dark:bg-gray-700/50'>
                        <Scan className='size-5' />
                    </Link>
                    <Link href={''} className='size-9 font-medium text-sm flex justify-center items-center hover:bg-muted rounded-lg hover:dark:bg-gray-700/50'>
                        <MessageCircleMore className='size-5' />
                    </Link>
                    <Link href={''} className='size-9 font-medium text-sm flex justify-center items-center hover:bg-muted rounded-lg hover:dark:bg-gray-700/50'>
                        <MessageCircleMore className='size-5' />
                    </Link>
                    <Link href={''} className='size-9 font-medium text-sm flex justify-center items-center hover:bg-muted rounded-lg hover:dark:bg-gray-700/50'>
                        <Dock className='size-5' />
                    </Link>
                    <Link href={''} className='size-9 font-medium text-sm flex justify-center items-center hover:bg-muted rounded-lg hover:dark:bg-gray-700/50'>
                        <Megaphone className='size-5' />
                    </Link>
                </div>
                <div className="px-2 py-4 flex flex-col gap-2 items-center justify-center">
                    <DarkModeToggle />
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>
        </>
    )
}

export default Sidebar