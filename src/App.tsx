import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Features from './components/Features';
import Customers from './components/Customers';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <Hero />
      <ProductShowcase />
      <Features />
      <Stats />
      <Customers />
      <Testimonials />
      <HowItWorks />
      <Pricing />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;