import React from 'react';
import { Check, Star, Zap } from 'lucide-react';

const Pricing = () => {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: [
        'Up to 5 projects',
        'Basic analytics',
        'Email support',
        '10GB storage',
        'Standard templates'
      ],
      gradient: 'from-blue-500 to-purple-600',
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Unlimited projects',
        'Advanced analytics',
        'Priority support',
        '100GB storage',
        'Premium templates',
        'Team collaboration',
        'Custom integrations'
      ],
      gradient: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom development',
        'Unlimited storage',
        'White-label solution',
        'Advanced security',
        'SLA guarantee'
      ],
      gradient: 'from-pink-500 to-orange-500',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="relative py-20 overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-pink-900/10"
        style={{ transform: `translateY(${scrollY * 0.25}px)` }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Select the perfect plan for your needs. All plans include our core features with no hidden fees.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-b from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 hover:from-gray-800/80 hover:to-gray-700/80 transition-all duration-500 transform hover:scale-105 border ${plan.popular ? 'border-purple-400 shadow-purple-500/50' : 'border-gray-700/50 hover:border-gray-600/50'} shadow-xl`}
              style={{ 
                transform: `translateY(${Math.sin(scrollY * 0.01 + index) * 6}px) ${plan.popular ? 'scale(1.05)' : ''}` 
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full flex items-center">
                    <Star className="w-4 h-4 text-white mr-1" />
                    <span className="text-white font-bold text-sm">Most Popular</span>
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-black text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-1">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full bg-gradient-to-r ${plan.gradient} py-4 rounded-full font-bold text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center`}>
                {plan.popular && <Zap className="w-5 h-5 mr-2" />}
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;