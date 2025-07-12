import {
    Heart,
    DollarSign,
    UtensilsCrossed,
    ShoppingCart,
    Zap,
    Cloud,
    Plane,
    Music,
    Users,
    Share2,
    Truck,
    GraduationCap,
    Home,
    PlaneTakeoff,
    Wheat,
    Radio,
    Fuel,
    Car,
    Shield,
    Factory,
  } from "lucide-react"
import { useNavigate } from 'react-router-dom';
  
  const IndustriesSection = () => {
    const navigate = useNavigate();
    const industries = [
      { icon: Heart, name: "Healthcare" },
      { icon: DollarSign, name: "Finance" },
      { icon: UtensilsCrossed, name: "Restaurant" },
      { icon: ShoppingCart, name: "eCommerce" },
      { icon: Zap, name: "Electric Vehicle (EV)" },
      { icon: Cloud, name: "SaaS" },
      { icon: Plane, name: "Travel" },
      { icon: Music, name: "Entertainment" },
      { icon: Users, name: "On-Demand" },
      { icon: Share2, name: "Social Media" },
      { icon: Truck, name: "Logistics" },
      { icon: GraduationCap, name: "Education" },
      { icon: Home, name: "Real Estate" },
      { icon: PlaneTakeoff, name: "Aviation" },
      { icon: Wheat, name: "Agriculture" },
      { icon: Radio, name: "Telecom" },
      { icon: Fuel, name: "Oil and Gas" },
      { icon: Car, name: "Automotive" },
      { icon: Shield, name: "Insurance" },
      { icon: Factory, name: "Manufacturing" },
    ]
  
    return (
      <section className="bg-black py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12 md:mb-16">
              <div className="mb-8 lg:mb-0 lg:max-w-2xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-tight">
                  A Unified Vision That Caters To Diverse Industry Demands
                </h2>
              </div>
              <div className="lg:flex-shrink-0">
                <button onClick={() => navigate('/industry-we-serve')} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 w-full lg:w-auto">
                  Explore More In Industries
                </button>
              </div>
            </div>
  
            {/* Industries Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="group relative bg-black border border-gray-800 rounded-lg p-6 md:p-8 hover:border-gray-700 transition-all duration-300 cursor-pointer"
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <industry.icon className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:text-blue-400 transition-colors duration-300" />
                  </div>
  
                  {/* Industry Name */}
                  <div className="text-center">
                    <h3 className="text-white font-medium text-sm md:text-base group-hover:text-blue-400 transition-colors duration-300">
                      {industry.name}
                    </h3>
                  </div>
  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default IndustriesSection
  