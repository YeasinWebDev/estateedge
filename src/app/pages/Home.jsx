import React from 'react'
import Hero from '../components/Home/Hero'
import Partners from '../components/Home/Partners'
import Numbers from '../components/Home/Numbers'
import Team from '../components/Home/Team'
import Services from '../components/Home/Services'
import WhyChoose from '../components/Home/WhyChoose'

function Home() {
  return (
    <div>
        <Hero />
        <Partners/>
        <Numbers/>
        <Team/>
        <WhyChoose/>
        <Services/>
    </div>
  )
}

export default Home