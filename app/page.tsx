'use client'
import React, { useState } from 'react';
import CandidateBanner from '@/components/CandidateBanner';
import Image from 'next/image';
import one from '@/public/one.png';
import two from '@/public/two.png';
import three from '@/public/three.png';
import four from '@/public/four.png';
import five from '@/public/five.png';
import six from '@/public/six.png';
import seven from '@/public/seven.png';
import eight from '@/public/eight.png';
import Modal from '@/components/Modal';  // Import the Modal component

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleImageClick = (imgSrc:any) => {
    setCurrentImage(imgSrc);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className='container min-h-[180vh] mt-8'>
      <h1 className="font-semibold text-lg">
        Corporate Website
        <div className="sticky top-0">
          <CandidateBanner />
        </div>
        <div className='flex flex-col items-center justify-center mt-5'>
          <div className="img border rounded-md cursor-pointer">
            <Image height={1000} width={900} src={one} alt='img' priority onClick={() => handleImageClick(one)} />
          </div>

          <div className='mt-10 flex items-center flex-col w-[60vw]'>
            <h2 className="text-2xl font-bold">Have a project idea? We are available for new projects!</h2>
            <h2 className="text-2xl font-bold">hello@ronasit.com | Telegram | WhatsApp | Website</h2>
            <div className="text-lg font-normal mx-10">
              <p className='mt-8'>
                Having a well-designed website with useful information gives off the impression that you are running a reliable and credible business. Meet our new concept of a design studio’s corporate website!
              </p>
              <p className='mt-8'>
                The first screen displays the company’s motto. The next two screens display the company description and a list of its services. Another screen displays the list of the team members and their responsibilities. The last screen displays the contact information.
              </p>
              <p className='mt-8'>
                Our designers used neutral grey shades for the background and added blurry gradients as the main colorful accent. This simple color scheme doesn’t distract users from observing the company’s portfolio.
              </p>
              <p className='mt-8'>
                The minimal design, large print, and colorful accents convey the company’s mission and emphasize its creativity. The simple navigation and clear information layout make the website pleasant to use.
              </p>
            </div>
          </div>

          {[two, three, four, five, six, seven, eight].map((imgSrc, index) => (
            <div key={index} className="img border rounded-md mt-10 cursor-pointer mb-10">
              <Image height={1000} width={900} src={imgSrc} alt={`img-${index}`} priority onClick={() => handleImageClick(imgSrc)} />
            </div>
          ))}
        </div>
      </h1>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} imgSrc={currentImage} />
    </div>
  );
}

export default Home;
