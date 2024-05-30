import React from 'react'
import { Search } from 'lucide-react'
import { Button } from './ui/button'

const Navbar = () => {
    return (
        <nav className="py-6 px-4">
            <div className="nav flex items-center justify-between">
                <ul className='flex gap-4 font-semibold '>
                    <li className='cursor-pointer hover:text-gray-600 text-sm mx-1'>Find Designers</li>
                    <li className='cursor-pointer hover:text-gray-600 text-sm mx-1'>Inspirations</li>
                    <li className='cursor-pointer hover:text-gray-600 text-sm mx-1'>Courses</li>
                    <li className='cursor-pointer hover:text-gray-600 text-sm mx-1'>Jobs</li>
                    <li className='cursor-pointer hover:text-gray-600 text-sm mx-1'>Go Pro</li>
                </ul>
                <div className="Logo">
                    <span className="text-2xl font-bold ">
                        Dribbble
                    </span>
                </div>
                <div className="mx-2 flex gap-4 mr-6">
                    <span className='bg-slate-100  flex items-center text-gray-600 font-light px-2 rounded-full'>
                        <Search />
                        <input type='text' placeholder={'search'} className='bg-slate-100 px-2 py-2  rounded-full'>
                        </input>
                    </span>
                    <Button variant="ghost">Log In</Button>
                    <Button variant="black">Sign up</Button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
