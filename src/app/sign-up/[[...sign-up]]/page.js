'use client'

import React from 'react'
import Navabar from '@/components/Navabar'
import { SignUp } from '@clerk/nextjs'
import Footer from '@/components/Footer'

export default function page() {
    return (
        <>
            <Navabar />
            <div className="h-screen w-full flex justify-center items-center">
                <SignUp />
            </div>
            <Footer />
        </>
    )
}
