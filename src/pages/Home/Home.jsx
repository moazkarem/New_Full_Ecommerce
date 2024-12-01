import React from 'react'
import BestSeller from './BestSeller/BestSeller'
import Hero from './Hero/Hero'
import OurDepartments from './OurDepartments/OurDepartments'
import Partners from './Partners/Partners'

const Home = () => {
  return (
    <div>
        <Hero />
        <OurDepartments />
        <Partners />
        <BestSeller />
    </div>
  )
}

export default Home