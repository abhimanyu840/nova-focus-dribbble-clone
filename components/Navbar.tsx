'use client'
import React, { useState } from 'react'
import { ChevronDown, Search } from 'lucide-react'
import { Button } from './ui/button'

const Navbar = () => {
    const [isDesignersModalVisible, setIsDesignersModalVisible] = useState(false);
    const [isCoursesModalVisible, setIsCoursesModalVisible] = useState(false);

    const handleMouseEnterDesigners = () => {
        setIsDesignersModalVisible(true);
    };

    const handleMouseLeaveDesigners = () => {
        setIsDesignersModalVisible(false);
    };

    const handleMouseEnterCourses = () => {
        setIsCoursesModalVisible(true);
    };

    const handleMouseLeaveCourses = () => {
        setIsCoursesModalVisible(false);
    };

    return (
        <nav className="py-6 px-4 relative">
            <div className="nav flex items-center justify-between ">
                <ul className='flex gap-4 font-semibold '>
                    <li
                        className='cursor-pointer hover:text-gray-600 text-sm mx-1 flex relative'
                        onMouseEnter={handleMouseEnterDesigners}
                        onMouseLeave={handleMouseLeaveDesigners}
                    >
                        Find Designers<ChevronDown className='ml-0.5' />
                        {isDesignersModalVisible && (
                            <div className="absolute left-0 w-48 bg-white border rounded shadow-lg p-4 mt-7 z-50">
                                <p className="text-sm">Designer search</p>
                                <p className="text-xs text-gray-500">Quickly find your next designer</p>
                                <p className="text-sm mt-2">Post a job</p>
                                <p className="text-xs text-gray-500">The #1 job board for design talent</p>
                            </div>
                        )}
                    </li>
                    <li className='cursor-pointer hover:text-gray-600 text-sm mx-1'>Inspirations</li>
                    <li
                        className='cursor-pointer hover:text-gray-600 text-sm mx-1 flex relative'
                        onMouseEnter={handleMouseEnterCourses}
                        onMouseLeave={handleMouseLeaveCourses}
                    >
                        Courses<ChevronDown className='ml-0.5' />
                        {isCoursesModalVisible && (
                            <div className="absolute left-0 mt-7 w-48 bg-white border rounded shadow-lg p-4 z-50">
                                <p className="text-sm">UX Diploma</p>
                                <p className="text-xs text-gray-500">Learn ux design from scratch in 6 months</p>
                                <p className="text-sm">UI certificate</p>
                                <p className="text-xs text-gray-500">12 week UI skill building from designers</p>
                                <hr className='my-1' />
                                <p className="text-sm">Live interactive workshops</p>
                                <p className="text-xs text-gray-500">with design professionals</p>

                            </div>
                        )}
                    </li>
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
