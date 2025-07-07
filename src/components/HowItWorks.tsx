import React from 'react';
import { UserPlus, Settings, Rocket } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: 'Step 1: Sign Up',
      description: 'Create your account in seconds and explore our comprehensive suite of tools designed for your success.',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: Settings,
      title: 'Step 2: Customize',
      description: 'Tailor your experience with our intuitive customization options to match your unique workflow.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Rocket,
      title: 'Step 3: Launch',
      description: 'Start using your personalized setup immediately and watch your productivity soar to new heights.',
      gradient: 'from-pink-500 to-orange-500'
    }
  ];

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-16 shadow-2xl border border-gray-700">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get started in three simple steps and transform your workflow today.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative text-center p-8 rounded-2xl bg-gradient-to-b from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 transition-all duration-500 transform hover:scale-105 cursor-pointer border border-gray-600 hover:border-gray-500 shadow-xl"
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <step.icon className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
              <p className="text-gray-300 leading-relaxed">{step.description}</p>
              
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transform translate-x-full -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;