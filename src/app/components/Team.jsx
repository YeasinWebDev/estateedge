import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

function Team({ data }) {
    return (
        <div className='container mx-auto px-4 mb-40'>
            {/* Title section with animation wrapper */}
            <motion.div
                className='w-full flex items-center justify-center flex-col mt-20'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.5 }}
            >
                <motion.span
                    className='text-sm uppercase font-semibold text-[#2C3E50]'
                    variants={itemVariants}
                >
                    our team
                </motion.span>

                <motion.h2
                    className='font-semibold text-2xl sm:text-3xl md:text-4xl leading-snug mb-5 text-center'
                    variants={itemVariants}
                >
                    The Brains Behind Your <br className='hidden sm:block' /> Success
                </motion.h2>
            </motion.div>

            {/* Team cards (you can animate each one if needed) */}
            <div className='flex flex-wrap items-center justify-center gap-5 2xl:gap-12 my-10'>
                {
                    data.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <Image src={item.image} alt='team' width={200} height={200} className='w-[300px] h-[200px] md:h-[230px] lg:h-[250px] xl:h-[350px] object-cover rounded-xl' />
                            <h2 className='font-semibold text-xl sm:text-2xl md:text-3xl leading-snug mb-2 text-center mt-3'>{item.name}</h2>
                            <p className='font-semibold text-[0.8rem] md:text-[1rem] leading-snug text-[#BCBCBC] text-center'>{item.position}</p>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}

export default Team
