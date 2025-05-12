'use client'
import { IoArrowForward } from "react-icons/io5";
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { AnimatedTooltip } from '../ui/animated-tooltip'

function Hero() {
    return (
        <div className='relative flex mt-10 mb-20 container mx-auto'>
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <h1 className='text-[4rem] font-semibold'>Dominate Real Estate <br /> Marketing with <br />
                    EstateEdge
                </h1>
                <h3 className='text-[1.5rem] py-5'>
                    Generate High-Quality Leads, Dominate Your <br /> Market, and Skyrocket Your Sales with EstateEdge
                </h3>
                <button className='hidden md:flex items-center gap-2 bg-[#FED23D] px-10 py-3 rounded-full text-black cursor-pointer group hover:scale-105 transition duration-200'>
                    Schedule  Consultation Now
                    <span className='-rotate-45 group-hover:rotate-0 transition duration-200'><IoArrowForward size={20}/></span>
                </button>
                <div className='flex items-center mt-2'>
                    <AnimatedTooltip items={people} />
                </div>
            </motion.div>
            <motion.div
                className='relative flex-1 h-[500px] md:h-[600px] w-full mt-10 md:mt-0'
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
            >
                <motion.div
                    className='absolute top-0 left-[4rem]'
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                >
                    <Image src={'/images/hero-1.png'} alt='hero1' width={319} height={319} />
                </motion.div>

                <motion.div
                    className='absolute top-[20rem] left-[10rem]'
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                >
                    <Image src={'/images/hero-2.png'} alt='hero2' width={319} height={319} />
                </motion.div>

                <motion.div
                    className='absolute top-[4rem] right-48'
                    animate={{ x: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                >
                    <Image src={'/images/hero-3.png'} alt='hero3' width={319} height={236} />
                </motion.div>

                <motion.div
                    className='absolute top-[15rem] left-0'
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity }}
                >
                    <Image src={'/images/client.png'} alt='client' width={231} height={89} />
                </motion.div>

                <motion.div
                    className='absolute top-[20rem] right-[16rem] z-10'
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                >
                    <Image src={'/images/booked.png'} alt='booked' width={188} height={144} />
                </motion.div>
            </motion.div>
        </div>
    )
}

const people = [
    {
        id: 1,
        name: "John Doe",
        designation: "Software Engineer",
        image:
            "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
        id: 2,
        name: "Robert Johnson",
        designation: "Product Manager",
        image:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 3,
        name: "Jane Smith",
        designation: "Data Scientist",
        image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 4,
        name: "Emily Davis",
        designation: "UX Designer",
        image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 5,
        name: "Tyler Durden",
        designation: "Soap Developer",
        image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
        id: 6,
        name: "Dora",
        designation: "The Explorer",
        image:
            "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
];

export default Hero