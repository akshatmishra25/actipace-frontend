import React from 'react'
import Image from 'next/image';
import whiteLogo from '../../public/assets/actipace-light-logo.png'
import flag from '../../public/assets/india-flag.png'
import dropdown from '../../public/assets/dropdown.svg'
import facebook from '../../public/assets/facebook.png'
import insta from '../../public/assets/insta.png'
import twitter from '../../public/assets/x.png'
import youtube from '../../public/assets/youtube.png'
function Footer() {
  return (
    <div className='flex-row bg-[#071D2B] p-4'>
        <div className='flex justify-around'>
            <div className='grid items-center justify-center p-8 gap-6 text-xs'>
                <Image src={whiteLogo} width={150} alt='actipace-white-logo'/>
                <div className='flex justify-center items-center gap-1 mb-8'>
                    <Image src={flag} width={15} alt='india flag' />
                    <p>India (English)</p>
                    <Image src={dropdown} width={16} alt='dropdown' />
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <Image src={facebook} width={24} alt='india flag' />
                    <Image src={insta} width={24} alt='instagram logo' />
                    <Image src={twitter} width={24} alt='twitter logo' />
                    <Image src={youtube} width={24} alt='youtube logo' />
                </div>
            </div>
            <div className='flex content-start justify-evenly p-8 gap-x-48'>
                <div className='grid justify-center text-sm content-start gap-6'>
                    <div className='text-white font-medium'>Developed By</div>
                    <p className='text-white text-xs font-extralight max-w-40'>G-103, HTC Market, Anjana Farm, Mithi Khadi Road, Surat, Gujarat</p>
                </div>
                <div className='grid justify-center text-sm content-start gap-6'>
                    <div className='text-white font-medium'>Support</div>
                    <div className='grid justify-center items-center gap-2'>
                        <p className='text-white text-xs font-thin max-w-40'>Customer Service</p>
                        <p className='text-white text-xs font-thin max-w-40'>FAQs</p>
                        <p className='text-white text-xs font-thin max-w-40'>Renewals</p>
                    </div>
                </div>
                <div className='grid justify-center text-sm content-start gap-6'>
                    <div className='text-white font-medium'>About</div>
                    <div className='grid justify-center items-center gap-2'>
                        <p className='text-white text-xs font-thin max-w-40'>About</p>
                        <p className='text-white text-xs font-thin max-w-40'>Careers</p>
                        <p className='text-white text-xs font-thin max-w-40'>Contact Us</p>
                        <p className='text-white text-xs font-thin max-w-40'>Your Privacy</p>
                        <p className='text-white text-xs font-thin max-w-40'>Download</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='text-white text-xs font-thin flex items-center justify-center p-8'>
            <p>© Copyright Actipace Security - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer;