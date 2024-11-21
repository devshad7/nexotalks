<<<<<<< HEAD
import DarkModeToggle from "@/utils/darkModeToogle";
import {
  Dock,
  HomeIcon,
  Megaphone,
  MessageCircleMore,
  MessageSquare,
  MoonIcon,
  Scan,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Sidebar = () => {
  return (
    <>
      <div className="h-screen w-auto fixed border-r border-muted dark:border-gray-700/50 flex flex-col justify-between items-center bg-gray-100 dark:bg-gray-900">
        <div className="px-2 py-4 grid gap-2">
          <Link
            href={"/"}
            className="size-9 font-medium text-sm flex justify-center items-center hover:bg-gray-300 dark:hover:bg-gray-700/50 rounded-lg hover:backdrop-blur-sm"
          >
            <HomeIcon className="size-5 text-gray-900 dark:text-white" />
          </Link>
          <Link
            href={""}
            className="size-9 font-medium text-sm flex justify-center items-center hover:bg-gray-300 dark:hover:bg-gray-700/50 rounded-lg hover:backdrop-blur-sm"
          >
            <MessageSquare className="size-5 text-gray-900 dark:text-white" />
          </Link>
          <Link
            href={""}
            className="size-9 font-medium text-sm flex justify-center items-center hover:bg-gray-300 dark:hover:bg-gray-700/50 rounded-lg hover:backdrop-blur-sm"
          >
            <UserRound className="size-5 text-gray-900 dark:text-white" />
          </Link>
          <Link
            href={""}
            className="size-9 font-medium text-sm flex justify-center items-center hover:bg-gray-300 dark:hover:bg-gray-700/50 rounded-lg hover:backdrop-blur-sm"
          >
            <Scan className="size-5 text-gray-900 dark:text-white" />
          </Link>
          <Link
            href={""}
            className="size-9 font-medium text-sm flex justify-center items-center hover:bg-gray-300 dark:hover:bg-gray-700/50 rounded-lg hover:backdrop-blur-sm"
          >
            <MessageCircleMore className="size-5 text-gray-900 dark:text-white" />
          </Link>
          <Link
            href={""}
            className="size-9 font-medium text-sm flex justify-center items-center hover:bg-gray-300 dark:hover:bg-gray-700/50 rounded-lg hover:backdrop-blur-sm"
          >
            <Dock className="size-5 text-gray-900 dark:text-white" />
          </Link>
          <Link
            href={""}
            className="size-9 font-medium text-sm flex justify-center items-center hover:bg-muted dark:hover:bg-gray-700/50 rounded-lg"
          >
            <Megaphone className="size-5 text-gray-900 dark:text-white" />
          </Link>
        </div>
        <div className="mb-3 ml-2">
         
          <div className="mb-1 -ml-1">
            <DarkModeToggle />
          </div>

          <div className="mb-4">
            <SignedOut>
              <SignInButton>
                <button className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-8 rounded-md px-3 text-xs dark:bg-white dark:text-black dark:hover:bg-gray-200 mt-2 ml-0">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
          </div>

          <div>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
=======
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
>>>>>>> 85243583e93b2f588ec4006326509cdc2c6f166f
