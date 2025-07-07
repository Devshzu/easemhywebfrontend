import React from 'react';
import { Star, Users, TrendingUp } from 'lucide-react';

const Customers = () => {
  const avatars = [
    'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200',
    'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=200',
    'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=200',
    'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=200',
    'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=200',
    'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200',
  ];

  const stats = [
    { icon: Users, value: '1M+', label: 'Happy Customers' },
    { icon: Star, value: '4.9', label: 'Rating' },
    { icon: TrendingUp, value: '150%', label: 'Growth' }
  ];

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
          +1M Happy Customers
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Join millions of satisfied users who have transformed their workflow with our innovative solutions.
        </p>
        
        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center mb-2">
                <stat.icon className="w-6 h-6 text-purple-400 mr-2" />
                <span className="text-3xl font-bold text-white">{stat.value}</span>
              </div>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
        
        {/* Customer Avatars */}
        <div className="flex justify-center gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {avatars.map((avatar, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border-4 border-purple-400 shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-110 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={avatar}
                alt={`Customer ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customers;