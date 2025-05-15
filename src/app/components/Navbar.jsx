'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'motion/react';
import { IoArrowForward } from 'react-icons/io5';
import Link from 'next/link';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <motion.div
            className='bg-white h-[5rem] flex items-center justify-between px-5 md:px-10 lg:px-[6rem] relative'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* logo */}
            <Link href={'/'} className='flex flex-col items-center gap-1 z-50'>
                <Image src={'/images/logo.png'} alt='logo' width={70} height={70} />
                <h5 className='font-semibold text-[#FED23D]'>EstateEdge</h5>
            </Link>

            {/* Desktop Navigation */}
            <ul className='hidden md:flex items-center gap-5 font-medium cursor-pointer'>
                <Link href={'/pages/about'} className='hover:text-[#FED23D] transition'>About us</Link>
                <li className='hover:text-[#FED23D] transition'>Our Team</li>
                <li className='hover:text-[#FED23D] transition'>Services</li>
            </ul>

            <button className='hidden md:flex items-center gap-2 bg-black px-10 py-3 rounded-full text-[#F5F2ED] cursor-pointer group hover:scale-105 transition duration-200'>
                Let's Talk
                <span className='-rotate-45 group-hover:rotate-0 transition duration-200'><IoArrowForward size={20}/></span>
            </button>

            {/* Mobile Menu Button */}
            <button
                className='md:hidden text-2xl z-50'
                onClick={toggleMenu}
                aria-label='Toggle menu'
            >
                {isOpen ? <FiX /> : <FiMenu />}
            </button>

            {/* Mobile Slider Menu */}
            <div
                className={`fixed top-0 left-0 w-full h-screen bg-white z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    } md:hidden`}
            >
                <div className='flex flex-col items-center justify-center h-full gap-10'>
                    <ul className='flex flex-col items-center gap-8 font-medium text-xl'>
                        <Link href={'/pages/about'} className='hover:text-[#FED23D] transition' onClick={toggleMenu}>
                            About us
                        </Link>
                        <li className='hover:text-[#FED23D] transition' onClick={toggleMenu}>
                            Our Team
                        </li>
                        <li className='hover:text-[#FED23D] transition' onClick={toggleMenu}>
                            Services
                        </li>
                    </ul>
                    <button className='flex items-center gap-2 bg-black px-10 py-3 rounded-full text-[#F5F2ED] cursor-pointer hover:bg-gray-800 transition'>
                        Let's Talk
                        <IoArrowForward size={20}/>
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

const listAnimation = (text) => {
    return (
        <div>
            <li>{text}</li>
            <li>{text}</li>
        </div>
    )
}

export default Navbar;