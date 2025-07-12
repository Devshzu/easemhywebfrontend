import React from 'react';
import { Package, Palette, Cpu, ArrowRight } from 'lucide-react';

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: 'Rex Pro',
      description: 'All-in-one creative suite',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: Package,
      gradient: 'from-orange-500 to-red-500',
      features: ['Creative Tools', 'Cloud Sync', 'AI-Powered']
    },
    {
      id: 2,
      name: 'Orange Crush',
      description: 'Multi-functional design platform',
      image: 'https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: Palette,
      gradient: 'from-yellow-500 to-orange-500',
      features: ['Design Tools', 'Templates', 'Collaboration']
    },
    {
      id: 3,
      name: 'Blue Core',
      description: 'Advanced development framework',
      image: 'https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: Cpu,
      gradient: 'from-blue-500 to-purple-500',
      features: ['Fast Performance', 'Secure', 'Scalable']
    }
  ];

  return (
    <section className="container mx-auto px-4 py-20 bg-black" id="products">
      <div className="text-center mb-16">
        <h3 className="text-3xl font-bold mb-4 text-gray-200">Unleash Your Potential</h3>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Discover our revolutionary products designed to accelerate your workflow and unlock new possibilities.
        </p>
      </div>
      
      {/* Fixed responsive grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
      <div className="flex flex-col gap-8 md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-gradient-to-b from-gray-900 to-gray-800 rounded-3xl p-6 sm:p-8 hover:from-gray-800 hover:to-gray-700 transition-all duration-500 transform hover:scale-105 cursor-pointer border border-gray-700 hover:border-gray-600 shadow-2xl hover:shadow-purple-500/20"
          >
            <div className="relative mb-6">
              <div className="w-full h-40 sm:h-48 rounded-2xl overflow-hidden mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className={`absolute -top-2 -right-2 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${product.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                <product.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
            </div>
            
            <h4 className="text-xl sm:text-2xl font-bold mb-2 text-white">{product.name}</h4>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">{product.description}</p>
            
            <div className="space-y-2 mb-6">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-center text-sm text-gray-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 flex-shrink-0"></div>
                  {feature}
                </div>
              ))}
            </div>
            
            <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 group-hover:shadow-lg flex items-center justify-center text-sm sm:text-base">
              Learn More
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;