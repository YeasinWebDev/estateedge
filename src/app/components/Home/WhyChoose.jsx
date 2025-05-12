'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { GoGoal } from "react-icons/go";
import { FaHandshake } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import Image from 'next/image';
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

function WhyChoose() {
    return (
        <div className='flex flex-col lg:flex-row items-stretch justify-center bg-[#191506]'>
            {/* LEFT SIDE */}
            <div className=' px-4 py-5 md:px-[6rem] flex flex-col justify-center w-full xl:w-[50%]'>
                <div className='flex flex-col items-start'>
                    <motion.span
                        className='text-sm uppercase font-semibold text-[#2C3E50]'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        variants={itemVariants}
                    >
                        why choose us
                    </motion.span>

                    <motion.h2
                        className='font-semibold text-2xl sm:text-3xl md:text-4xl leading-snug mb-5 text-white'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        variants={itemVariants}
                    >
                        What Sets Us <br /> Apart?
                    </motion.h2>

                    <motion.p
                        className='font-semibold text-[0.8rem] md:text-[1rem] leading-snug mb-5 text-[#BCBCBC]'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        variants={itemVariants}
                    >
                        We’ve helped real estate agents achieve unprecedented growth. Here’s how we transformed Todd Watkins’ business, closing $1.6M in sales volume within 90 days.
                    </motion.p>
                </div>

                <div className='grid grid-cols-2 gap-5'>
                    {data.map((item, index) => (
                        <motion.div key={index} 
                            initial={{ y: -20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.7 + index * 0.2 }}
                        >
                            <div className='text-black text-xl bg-[#FED23D] w-fit p-2 rounded-full'>{item.icon}</div>
                            <h2 className='text-white text-[1rem] md:text-[1.5rem] font-semibold my-2'>{item.title}</h2>
                            <p className='text-[#BCBCBC] text-[0.8rem]'>{item.des}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <motion.div className=' h-full w-full hidden xl:block xl:w-[50%]'
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1 }}
            >
                <Image
                    src={'/images/group.jpg'}
                    alt='group'
                    width={1000}
                    height={1000}
                    className='w-full h-full object-cover'
                />
            </motion.div>
        </div>

    )
}


const data = [
    {
        icon: <GoGoal />,
        title: 'Targeted Advertising',
        des: 'We create and manage campaigns on platforms like Facebook and Google to drive traffic to your listings and website'
    },
    {
        icon: <FaHandshake />,
        title: 'High-Quality Leads',
        des: 'We deliver exclusive, ready-to-engage leads that significantly boost your conversion rates'
    },
    {
        icon: <MdOutlineDateRange />,
        title: 'Market Dominance',
        des: 'We help you build a strong brand that stands out and becomes the go-to in your area'
    },
    {
        icon: <IoIosPeople />,
        title: 'Proven Results',
        des: 'See measurable growth in as little as 90 days with our systemized approach'
    }
]
export default WhyChoose