import React from 'react';
import Image from 'next/image';
import { Cross, CrossIcon, X } from 'lucide-react';

const Modal = ({ isOpen, onClose, imgSrc }: any) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
            <div className="relative">
                <button className="absolute top-0 right-0 m-4 text-white" onClick={onClose}><X/></button>
                <Image src={imgSrc} alt="Modal Image" width={1000} height={1000} className="rounded-md" />
            </div>
        </div>
    );
};

export default Modal;
