'use client'
import React, { useState, ReactNode } from 'react';
import { motion } from "framer-motion";


interface SlidingProductCardProps {
    children: ReactNode;
    title: string;
}


const show = {
    display: 'block',
    transition: {
      type: "ease-in-out",
      duration: 1,
    
    }
};

const hide = {
    display: "none",
    transition: {
        type: "ease-in-out",
        duration: 1,
    }
};

const SlidingProductCard: React.FC<SlidingProductCardProps> = ({ children, title }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
        
        className='w-full border-y border-gray-200 cursor-pointer px-4 py-6 text-sm'>
            <div className='flex justify-between items-center ' onClick={() => setIsOpen(!isOpen)}>
                <p className='font-semibold'>{title}</p>
                <span className={`transform ${isOpen ? 'rotate-45' : 'rotate-0'} text-3xl transition-transform duration-500`}>&#43;</span>
            </div>
            <motion.div initial={{display: 'none'}} animate={isOpen ? show : hide} className='py-4' >
                {children}
            </motion.div>
        </motion.div>
    );
};

export default SlidingProductCard;
