import React from 'react'
import Hero from '../components/ServiceComp/Hero';
import EmpServCard from '../components/ServiceComp/EmpServCard';
import ContactSection from '../components/ServiceComp/ContactSection';
import Satisfaction from '../components/ServiceComp/Satisfaction';

const Services = () => {
  return (
    <div>
        <Hero/>
        <EmpServCard/>
        <Satisfaction/>
        <ContactSection/>
        
    </div>
  )
}

export default Services;