import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="h-14 w-full absolute bottom-0 flex justify-between items-center px-14 text-muted-foreground dark:text-gray-400">
        <div className="text-sm">
            <span>NexoTalks ©2024. All rights reserved</span>
        </div>
        <div className="text-sm">
            <span>Developed by Team <a href="https://nexolinx.com" target='_blank' className='text-emerald-500'>Nexolinx</a></span>
        </div>
    </div>
    </>
  )
}

export default Footer