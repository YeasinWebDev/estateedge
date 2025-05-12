'use client'
import { motion } from 'framer-motion'
import Image from 'next/image';


const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};
function Services() {
    return (
        <div className='py-10 container mx-auto w-full'>
            <div className='flex flex-col items-center'>
                <motion.span
                    className='text-sm uppercase font-semibold text-[#2C3E50]'
                    initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 ,delay:0.5}}
                        variants={itemVariants}
                >
                    SERVICES
                </motion.span>

                <motion.h2
                    className='font-semibold text-2xl sm:text-3xl md:text-4xl leading-snug mb-5'
                    initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 ,delay:0.7}}
                        variants={itemVariants}
                >
                    Our Core Services
                </motion.h2>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-5">
                {
                    data.map((item, index) => (
                        <motion.div 
                        key={index}
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                        
                        >
                            {
                                item.image ? <div>
                                    <Image src={item.image} alt='service' width={300} height={320} className='object-cover h-[15rem] rounded-3xl md:h-full'/>
                                </div>
                                    :
                                    <div className={`py-4 px-5 w-[18.8rem] h-[15rem] md:h-[20rem] rounded-3xl flex-col flex justify-between`} style={{ backgroundColor: item.bg, color: item.color }}>
                                        <div>
                                            <h2 className='font-semibold text-[1.2rem] mb-1'>{item.title}</h2>
                                            <p className='text-[1rem] text-[BCBCBC]'>{item.des}</p>
                                        </div>
                                        <div className='flex justify-end'>
                                            {
                                                item.bg === '#191506' ? <Image src='/images/services-icon-1.png' alt='arrow' width={30} height={30} className='object-cover' />
                                                    : <Image src='/images/services-icon-2.png' alt='arrow' width={50} height={50} className='object-cover' />
                                            }
                                        </div>
                                    </div>
                            }
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}


const data = [
    {
        bg: '#191506',
        color: '#F5F2ED',
        title: 'Targeted Paid Advertising',
        des: 'We create and manage campaigns on platforms like Facebook and Google to drive traffic to your listings and website'
    },
    {
        image: '/images/services.png'
    },
    {
        bg: '#fff6d8',
        color: '#191506',
        title: 'High-Quality Lead Generation',
        des: 'We deliver exclusive, ready-to-engage leads that significantly boost your conversion rates'
    },
    {
        image: '/images/services-2.png'
    },
    {
        image: '/images/services-3.png'
    },
    {
        bg: '#191506',
        color: '#F5F2ED',
        title: 'Branding & Market Dominance',
        des: 'We help you build a strong brand that stands out and becomes the go-to in your area'
    },
    {
        image: '/images/services-4.png'
    },
    {
        bg: '#fff6d8',
        color: '#191506',
        title: 'Advanced Analytics & Support',
        des: 'Track your campaign performance in real-time with our advanced dashboard and expert support team'
    }
]

export default Services