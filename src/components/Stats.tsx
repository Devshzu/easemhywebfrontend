import React from 'react';
import { Users, Globe, Award, Zap } from 'lucide-react';

const Stats = () => {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { icon: Users, value: '1M+', label: 'Active Users', color: 'from-blue-500 to-purple-600' },
    { icon: Globe, value: '150+', label: 'Countries', color: 'from-green-500 to-blue-500' },
    { icon: Award, value: '99.9%', label: 'Uptime', color: 'from-yellow-500 to-orange-500' },
    { icon: Zap, value: '10x', label: 'Faster', color: 'from-pink-500 to-red-500' }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-blue-900/10"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Trusted by Millions
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join the global community that's already experiencing the future of innovation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-2xl bg-gradient-to-b from-gray-900/50 to-gray-800/50 backdrop-blur-sm hover:from-gray-800/50 hover:to-gray-700/50 transition-all duration-500 transform hover:scale-105 border border-gray-700/50 hover:border-gray-600/50 shadow-xl"
              style={{ 
                transform: `translateY(${Math.sin(scrollY * 0.01 + index) * 5}px) scale(${1 + Math.sin(scrollY * 0.01 + index) * 0.02})` 
              }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;