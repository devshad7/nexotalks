'use client'

import React from 'react'
import Navabar from '@/components/Navabar'
import { SignIn } from '@clerk/nextjs'

export default function page() {
    return (
        <>
            <Navabar />
            <div className="h-screen w-full flex justify-center items-center">
                <SignIn />
            </div>
        </>
    )
}