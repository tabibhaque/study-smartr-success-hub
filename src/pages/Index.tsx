
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Subjects from '../components/Subjects';
import Resources from '../components/Resources';
import Testimonials from '../components/Testimonials';
import Booking from '../components/Booking';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Subjects />
      <Resources />
      <Testimonials />
      <Booking />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
