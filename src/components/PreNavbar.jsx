"use client"
import React from 'react'
import Link from 'next/link'
function PreNavbar() {
  return (
    <div className="flex items-center justify-center bg-[#071D2B] p-3 drop-shadow-lg">
        <p className="text-white font-medium mr-4 text-sm">Offers protection against viruses</p>
        <Link href='/' className="text-white font-medium text-sm underline underline-offset-4">Download Now</Link>
    </div>
  )
}

export default PreNavbar