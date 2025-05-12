'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

function Partners() {
  return (
    <motion.div
      className=' bg-[#191506] my-10'
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <div className='min-h-[14rem] container mx-auto py-10'>
        <h2 className='text-[#F5F2ED] text-center text-[1rem]'>Our Trusted Partners</h2>
        <div className='flex flex-wrap items-center justify-center gap-16 mt-8 px-10'>
          {
            images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
              >
                <Image key={index} src={image} alt='partner' width={100} height={100} />
              </motion.div>
            ))
          }
        </div>
      </div>
    </motion.div>
  )
}

const images = ["/images/Partner-1.png", "/images/Partner-2.png", "/images/Partner-3.png", "/images/Partner-4.png", "/images/Partner-5.png"]

export default Partners