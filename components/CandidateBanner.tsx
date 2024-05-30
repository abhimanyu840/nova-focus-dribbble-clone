'use client'
import React from 'react';
import Image from 'next/image';
import face from '@/public/face.png';
import { Bookmark, Heart } from 'lucide-react';
import { Button } from './ui/button';

const CandidateBanner = () => {
    return (
        <div className='container flex justify-between rounded shadow-sm bg-white z-10 sticky top-0 '>
            <div className='flex items-center py-4'>
                <div className="relative">
                    <Image width={20} height={20} className="w-10 h-10 rounded-full" src={face} alt="face" />
                    <span className="bottom-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                </div>
                <div className="flex flex-col">
                    <div className='flex'>
                        <h5 className="text-sm font-bold mx-1 cursor-pointer">John Doe</h5>
                        <span className='text-sm font-light'>for</span>
                        <h5 className="text-sm font-bold mx-1 cursor-pointer">Ronas IT | UI/UX Team</h5>
                    </div>
                    <div className='flex ml-2 justify-around'>
                        <span className='font-light text-green-500 text-xs'>Available for work</span>
                        <span className='font-light text-gray-400 text-xs cursor-pointer'>Follow</span>
                    </div>
                </div>
            </div>
            <div className="icons ml-4 items-center flex gap-2">
                <span className="mr-2 p-2 rounded-full border border-gray-300 cursor-pointer">
                    <Heart className='text-sm' />
                </span>
                <span className="mr-2 p-2 rounded-full border border-gray-300 cursor-pointer">
                    <Bookmark className='text-sm' />
                </span>
                <div className="mr-2">
                    <Button variant={'black'}>Get In Touch</Button>
                </div>
            </div>
        </div>
    );
}

export default CandidateBanner;
