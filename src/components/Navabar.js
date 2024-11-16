import React from 'react'
import DarkModeToggle from '@/utils/darkModeToogle'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'

const Navabar = () => {
  return (
    <>
    <nav className="fixed w-full py-4 px-14 border-b border-muted dark:border-gray-700/20 flex justify-between items-center">
                    <div className="flex gap-10 items-center">
                        <Link href={'/'} className='text-2xl font-semibold'>
                            <h1>NexoTalks</h1>
                        </Link>
                        <Link href={'/chat'} className='text-base font-medium'>
                            <h3>Chat</h3>
                        </Link>
                    </div>
                    <div className="flex items-center gap-5">
                        <DarkModeToggle />
                        <SignedOut>
                            <SignInButton>
                                <button className='inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-8 rounded-md px-3 text-xs dark:bg-white dark:text-black dark:hover:bg-gray-200'>Sign In </button>
                            </SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                </nav>
    </>
  )
}

export default Navabar