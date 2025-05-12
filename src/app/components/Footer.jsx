'use client'
import Image from 'next/image'
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { motion } from 'motion/react';

function Footer() {
    return (
        <motion.div
         className='bg-[#191506] py-10'
         initial={{ y: 100, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }}
         transition={{ duration: 1, delay: 0.5 }}
        >
            <div className='container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-5'>
                <div>
                    <Image src={'/images/logo.png'} alt='logo' width={70} height={70} />

                    <p className='text-[#F5F2ED] text-[1rem] pt-3 pb-4 w-full lg:w-[50%]'>
                        At EstateEdge, we help real estate agents dominate their market with targeted campaigns, high-quality leads, and predictable results. Let us transform your business toda
                    </p>
                    <div className='flex items-center gap-2 pb-2'>
                        <IoCallOutline color='#FED23D' size={20}/>
                        <span className='text-[#F5F2ED] text-[1rem]'>123-456-7890</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <CiMail color='#FED23D' size={20}/>
                        <span className='text-[#F5F2ED] text-[1rem]'>U9lKo@example.com</span>
                    </div>
                </div>
                <div className='flex items-start flex-wrap md:flex-nowrap md:justify-center gap-5 lg:gap-10'>
                    <div className='text-white'>
                        <h2 className='text-[1rem] font-bold'>Pages</h2>
                        <ul className='text-[#BCBCBC] flex flex-col gap-2 mt-2 whitespace-nowrap'>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className='text-white'>
                        <h2 className='text-[1rem] font-bold'>Help & Support</h2>
                        <ul className='text-[#BCBCBC] flex flex-col gap-2 mt-2 whitespace-nowrap'>
                            <li>FAQ</li>
                            <li>Guides & Tutorials</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>
                    <div className='text-white'>
                        <h2 className='text-[1rem] font-bold'>Contact Information</h2>
                        <ul className='text-[#BCBCBC] flex flex-col gap-2 mt-2 whitespace-nowrap'>
                            <li>123-456-7890</li>
                            <li>U9lKo@example.com</li>
                        </ul>                        
                    </div>
                </div>
            </div>
            <div className='container mx-auto px-4 text-white mt-14 flex flex-col md:flex-row md:items-center gap-5 justify-between'>
                <div className='flex items-center gap-2'>
                    <FaSquareFacebook size={24} className='cursor-pointer'/>
                    <FaTwitter size={24} className='cursor-pointer'/>
                    <FaSquareInstagram size={24} className='cursor-pointer'/>
                    <FaLinkedin size={24} className='cursor-pointer'/>
                </div>
                <span className='text-sm text-[#BCBCBC]'>© 2025 Lux U Digital. All Rights Reserved.</span>
            </div>
        </motion.div>
    )
}

export default Footer