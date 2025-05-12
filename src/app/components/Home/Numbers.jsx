'use client'
import React from 'react'
import { motion } from 'framer-motion'

function Numbers() {
    return (
        <div className='container mx-auto px-4'>
            {/* Top Section */}
            <div className='flex flex-col lg:flex-row justify-end py-10'>
                <div className='w-full lg:w-[40%]'>
                    <motion.h2
                        className='font-semibold text-[2rem] lg:text-[2.7rem] leading-snug mb-5'
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Numbers That Speak for Themselves
                    </motion.h2>
                    <motion.p
                        className='text-[#636363] leading-6 text-sm md:text-base'
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        At EstateEdge, we believe in results. Our proven strategies have helped real estate agents achieve unprecedented growth. Here’s a glimpse of what we’ve accomplished together.
                    </motion.p>
                </div>
            </div>

            {/* Numbers Cards */}
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4 py-5'>
                {
                    data.map((item, index) => (
                        <motion.div
                            key={index}
                            className='bg-white hover:bg-[#191506] transition-all duration-300 cursor-pointer px-5 py-6 rounded-xl min-h-[14rem] flex flex-col justify-center group'
                            initial={{ y: -20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.9 + index * 0.3 }}
                        >
                            <h2 className='font-semibold text-[2.5rem] sm:text-[3rem] group-hover:text-white'>{item.number}</h2>
                            <div>
                                <h4 className='text-[1.2rem] font-semibold group-hover:text-white'>{item.title}</h4>
                                <h5 className='text-[0.95rem] text-[#BCBCBC] font-medium'>{item.description}</h5>
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}

const data = [
    {
        number: '456+',
        title: 'Active Clients',
        description: 'We’ve helped over 485 agents grow their businesses with targeted marketing strategies'
    },
    {
        number: '5.6x',
        title: 'Average ROI',
        description: 'Our clients see an average return on investment of 5.6x their ad spend'
    },
    {
        number: '28,000+',
        title: 'Qualified Appointments',
        description: 'We’ve generated over 28,500 qualified appointments for our clients'
    },
    {
        number: '90 Days',
        title: 'Proven Results',
        description: 'See measurable growth in as little as 90 days with our systemized approach'
    }
]

export default Numbers
