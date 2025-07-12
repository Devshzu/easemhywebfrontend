import React from 'react';
import { Rocket, Globe, Shield, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Rocket,
      title: 'Lightning Fast',
      description: 'Experience unprecedented speed and performance'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connect with users worldwide seamlessly'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security you can trust'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work together effortlessly with your team'
    }
  ];

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black mb-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          We're Changing Culture
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Our innovative approach is reshaping how people work, create, and connect in the digital age.
        </p>
      </div>
      
      <div className="flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group text-center p-6 rounded-2xl bg-gradient-to-b from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 transition-all duration-500 transform hover:scale-105 border border-gray-700 hover:border-gray-600 shadow-xl"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <feature.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
            <p className="text-gray-400 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;