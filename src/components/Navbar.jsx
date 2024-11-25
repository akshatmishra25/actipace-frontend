import Image from 'next/image'
import React from 'react'
import logo from "../../public/assets/logo.png"
import MS from "../../public/assets/msft-logo.png"
import Link from 'next/link'

function Navbar() {
  return (
    <div className='flex bg-white items-center justify-between px-32 py-4 text-sm'>
        <Image src={logo} width={170} alt='actipace-logo'/>
        <div className='flex p-4 text-black gap-x-4'>
            <Link href='/' className='hover:text-[#31BF5C] cursor-pointer'>Home</Link>
            <Link href='/' className='hover:text-[#31BF5C] cursor-pointer'>Products</Link>
            <Link href='/' className='hover:text-[#31BF5C] cursor-pointer'>Dealer Registration</Link>
            <Link href='/' className='hover:text-[#31BF5C] cursor-pointer'>Support</Link>
            <Link href='/' className='hover:text-[#31BF5C] cursor-pointer'>About</Link>
            <Link href='/' className='hover:text-[#31BF5C] cursor-pointer'>Pricing</Link>
            <Link href='/' className='hover:text-[#31BF5C] cursor-pointer'>Award</Link>
            <Link href='/' className='hover:text-[#31BF5C] cursor-pointer'>Contact</Link>
        </div>
        <div className='bg-[#31BF5C] flex gap-2 text-white p-2'>
            <Image src={MS} width={20} alt='msft-logo'/>
            <p className='font-bold'>Free Download</p>
        </div>
    </div>
  )
}

export default Navbar