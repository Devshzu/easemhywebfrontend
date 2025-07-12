import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Features from './components/Features';
import Customers from './components/Customers';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import TechCapabilitiesImproved from './components/TechCapabilities';
import HowItWork from './components/HowItWork';
import IndustriesSection from './components/IndustryCoverage';
import TechnologyShowcase from './components/TechnologyShowcase';
function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <Hero />
      <ProductShowcase />
      <Features />
      <TechnologyShowcase />
      <TechCapabilitiesImproved />
      <Stats />
      <Customers />
      <Testimonials />
      <HowItWork />
      <Pricing />
      <IndustriesSection />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;