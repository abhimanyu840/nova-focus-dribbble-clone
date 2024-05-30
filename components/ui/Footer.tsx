import { Copyright, Facebook, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="p-2 bottom-0 mx-16">
            <div className="mx-2 flex justify-between">
                <div className="Logo">
                    <span className="text-2xl font-bold ">
                        Dribbble
                    </span>
                </div>
                <ul className='flex gap-6 font-semibold '>
                    <Link href={'/'}><li className='cursor-pointer hover:text-gray-600 text-sm mx-1'>For Designers</li></Link>
                    <Link href={'/'}><li className='cursor-pointer hover:text-gray-600 text-sm mx-1'>Hire Talent</li></Link>
                    <Link href={'/'}><li className='cursor-pointer hover:text-gray-600 text-sm mx-1'>Inspiration</li></Link>
                    <Link href={'/'}><li className='cursor-pointer hover:text-gray-600 text-sm mx-1'>Advertising</li></Link>
                    <Link href={'/'}><li className='cursor-pointer hover:text-gray-600 text-sm mx-1'>Blog</li></Link>
                    <Link href={'/'}><li className='cursor-pointer hover:text-gray-600 text-sm mx-1'>About</li></Link>
                    <Link href={'/'}><li className='cursor-pointer hover:text-gray-600 text-sm mx-1'>Careers</li></Link>
                    <Link href={'/'}><li className='cursor-pointer hover:text-gray-600 text-sm mx-1'>Support</li></Link>
                </ul>
                <ul className='flex gap-6 font-semibold '>
                    <Link href={'/'}><li className='cursor-pointer hover:text-gray-600 text-sm mx-1'><Twitter /></li></Link>
                    <Link href={'/'}><li className='cursor-pointer hover:text-gray-600 text-sm mx-1'><Facebook /></li></Link>
                    <Link href={'/'}><li className='cursor-pointer hover:text-gray-600 text-sm mx-1'><Instagram /></li></Link>
                    <Link href={'/'}><li className='cursor-pointer hover:text-gray-600 mx-1'><FaPinterest className='text-2xl' /></li></Link>
                </ul>
            </div>
            <div className="flex justify-between mb-4 mt-24">
                <div className="font-light text-gray-400 flex text-sm">
                    <Copyright className='text-sm mr-2 font-light' />2024 Dribbble. All rights reserved.
                    <ul className='flex gap-6 font-semibold '>
                        <Link href={'/'}><li className='cursor-pointer hover:text-gray-600 text-sm font-light mx-3'>Terms</li></Link>
                        <Link href={'/'}><li className='cursor-pointer hover:text-gray-600 text-sm font-light mx-3'>Privacy</li></Link>
                        <Link href={'/'}><li className='cursor-pointer hover:text-gray-600 text-sm font-light mx-3'>Cookies</li></Link>
                    </ul>
                </div>
                <div className='font-light text-gray-400'>
                    <ul className='flex gap-6 font-semibold '>
                        <Link href={'/'}><li className='cursor-pointer hover:text-gray-600 text-sm font-light mx-3'>Jobs</li></Link>
                        <Link href={'/'}><li className='cursor-pointer hover:text-gray-600 text-sm font-light mx-3'>Designers</li></Link>
                        <Link href={'/'}><li className='cursor-pointer hover:text-gray-600 text-sm font-light mx-3'>Freelancers</li></Link>
                        <Link href={'/'}><li className='cursor-pointer hover:text-gray-600 text-sm font-light mx-3'>Tags</li></Link>
                        <Link href={'/'}><li className='cursor-pointer hover:text-gray-600 text-sm font-light mx-3'>Places</li></Link>
                        <Link href={'/'}><li className='cursor-pointer hover:text-gray-600 text-sm font-light mx-3'>Resources</li></Link>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
