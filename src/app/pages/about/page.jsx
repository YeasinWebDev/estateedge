'use client'
import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Team from '../../components/Team'
import WhyChoose from '../../components/Home/WhyChoose'
import Expert from '../../components/Home/Team'


function page() {
  return (
    <div className="bg-[#f5f2ed] min-h-screen">
      <Navbar />

      {/* header */}
      <Header image='https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' title='Our Team' subtitle='Our team of real estate marketing experts is passionate about helping you succeed. With years of experience and a commitment to innovation, we’re here to guide you every step of the way. Meet the professionals who make it all possible' />

      {/* team */}

      <Team data={data} />
      <WhyChoose />
        <Expert />

      <Footer />
    </div>
  )
}

const data = [
  {
    "image": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "name": "Samantha Riley",
    "position": "CEO"
  },
  {
    "image": "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "name": "Alex Morgan",
    "position": "Digital Marketing"
  },
  {
    "image": "https://images.unsplash.com/photo-1491349174775-aaafddd81942?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "name": "Sophia Lee",
    "position": "Content Marketing Manager"
  },
  {
    "image": "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "name": "James Patel",
    "position": "SEO Specialist"
  },
  {
    "image": "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "name": "Emily Chen",
    "position": "Social Media Manager"
  },
  {
    "image": "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "name": "David Kim",
    "position": "PPC Campaign Manager"
  },
  {
    "image": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "name": "Nina Alvarez",
    "position": "Brand Strategist"
  },
  {
    "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "name": "Ryan Blake",
    "position": "Email Marketing"
  }
]

export default page