"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const Team = () => {
    return (
        <div className=' pb-20 bg-white px-4 sm:px-6 xl:px-0'>
            <motion.div 
                className='max-w-7xl mx-auto py-10'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                <motion.span 
                    className='text-sm uppercase font-semibold text-[#2C3E50]'
                    variants={itemVariants}
                >
                    Team
                </motion.span>

                <motion.h2
                    className='font-semibold text-2xl sm:text-3xl md:text-4xl leading-snug mb-5'
                    variants={itemVariants}
                >
                    Meet the Experts Behind <br className='hidden sm:block' /> EstateEdge
                </motion.h2>

                <div className='flex flex-col lg:flex-row items-center justify-between gap-10 mt-10'>
                    <motion.div
                        className='border-4 sm:border-8 border-[#FED23D] rounded-xl w-[300px] h-[200px] md:h-[400px] lg:w-[500px] lg:h-[550px] max-w-[500px] -rotate-6'
                        initial={{ scale: 0.9, rotate: -10, opacity: 0 }}
                        whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                        transition={{ duration: 0.6 ,delay:0.5}}
                        viewport={{ once: true }}
                    >
                        <Image 
                            src='https://images.unsplash.com/photo-1624237642035-d2329fbadb9c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
                            width={500} 
                            height={500} 
                            alt='team' 
                            className=' object-cover rotate-6  rounded-lg w-full h-full'
                        />
                    </motion.div>

                    <motion.div
                        className='w-full lg:w-[50%]'
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 ,delay:0.5}}
                        viewport={{ once: true }}
                    >
                        <h3 className='font-semibold text-xl sm:text-2xl lg:text-3xl'>
                            A team of dedicated professionals <br />
                            committed to your growth
                        </h3>
                        <h4 className='text-[#636363] mt-4 text-sm sm:text-base'>
                            Our team of real estate marketing specialists is dedicated to helping you dominate your market. With years of experience and a passion for results, we’re here to guide you every step of the way.
                        </h4>

                        <motion.div className='flex flex-col gap-5 mt-8' variants={containerVariants}>
                            {
                                data.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className='bg-[#F5F2ED] py-3 px-6 sm:px-8 border-l-4 border-[#FED23D]'
                                        initial={{ x: -20, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                                        viewport={{ once: true }}
                                    >
                                        <h4 className='font-semibold text-base sm:text-lg'>{item.title}</h4>
                                        <p className='text-[#636363] text-sm sm:text-base'>{item.des}</p>
                                    </motion.div>
                                ))
                            }
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}

const data = [
    {
        title: 'Paid Advertising Experts',
        des: 'We craft targeted campaigns that drive traffic and generate high-quality leads'
    },
    {
        title: 'Lead Generation Specialists',
        des: 'We deliver exclusive, ready-to-engage leads that boost your conversion rates'
    },
    {
        title: 'Branding Strategists',
        des: 'We help you build a standout brand that dominates your market'
    }
];

export default Team;
