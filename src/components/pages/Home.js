import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Intro from '../Intro';
import Cards from '../Cards';
import EnergyMgt from '../EnergyMgt';
import Footer from '../Footer';



function Home() {
  return (
    <>
      <HeroSection />
      <Intro />
      <Cards />
      <EnergyMgt />
      <Footer />
    </>
  );
}

export default Home