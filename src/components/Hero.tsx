import React from 'react';
import { ArrowRight, Star, Zap, ChevronDown, Sparkles, Play, Users, Award, TrendingUp } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = React.useState(0);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const images = [
    'https://images.pexels.com/photos/1547971/pexels-photo-1547971.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
  ];

  const stats = [
    { icon: Users, value: '50K+', label: 'Happy Users' },
    { icon: Award, value: '99%', label: 'Satisfaction' },
    { icon: TrendingUp, value: '200%', label: 'Growth Rate' },
  ];

  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-black">
      {/* Dynamic Background with Mouse Interaction */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-blue-900/30"
        style={{ 
          transform: `translateY(${scrollY * 0.5}px)`,
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.1) 0%, transparent 50%)`
        }}
      />
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }} />
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-float ${
              i % 3 === 0 ? 'w-1 h-1 bg-purple-400/40' :
              i % 3 === 1 ? 'w-2 h-2 bg-blue-400/30' :
              'w-3 h-3 bg-pink-400/20'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-purple-600/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-600/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-pink-600/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Floating Badge */}
<div className="inline-flex items-center gap-2 bg-gray-900/50 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-4 animate-fade-in mt-[38%] md:mt-0">
          <Sparkles className="w-4 h-4 text-purple-400 animate-spin" />
          <span className="text-sm text-gray-300">✨ Now with AI-Powered Features</span>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        </div>

        {/* Enhanced Main Title */}
        <h2
         className="text-5xl md:text-8xl lg:text-7xl font-black mb-2 md:mb-8 leading-tight"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        >
          <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
            We Make
          </span>
          <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x" style={{ animationDelay: '0.5s' }}>
            Good Stuff
          </span>
        </h2>
        
        {/* Enhanced Image Gallery with Glow Effects */}
        <div 
        className="flex justify-center gap-4 mb-1 md:mb-12 overflow-x-auto pb-4 scrollbar-hide"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 group cursor-pointer"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                transform: `translateY(${Math.sin(scrollY * 0.01 + index) * 15}px) scale(${1 + Math.sin(scrollY * 0.01 + index) * 0.08})`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur-md opacity-0 group-hover:opacity-75 transition-opacity duration-500" />
              <div className="relative w-28 h-28 rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Subtitle with More Icons */}
       <div className="flex items-center justify-center gap-3 mb-2 md:mb-8 flex-wrap">
          <Star className="w-6 h-6 text-yellow-400 animate-spin" />
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            Awesome · Amazing · Incredible
          </h2>
          <Zap className="w-6 h-6 text-yellow-400 animate-pulse" />
        </div>
        
     <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4 md:mb-12 leading-relaxed">
  Transform your ideas into reality with our cutting-edge products designed for the modern world.
  {/* Experience innovation like never before with AI-powered solutions. */}
</p>


        {/* Stats Section */}
        {/* <div className="flex justify-center gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-900/50 backdrop-blur-sm border border-purple-500/30 rounded-full mb-2 mx-auto group-hover:border-purple-400 transition-colors duration-300">
                <stat.icon className="w-6 h-6 text-purple-400" />
              </div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div> */}
        
        {/* Enhanced Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="group relative bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 px-10 py-5 rounded-full font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/50 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <span className="relative flex items-center">
              Explore Products
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </button>
          
          <button className="group relative px-10 py-5 rounded-full border-2 border-purple-400/50 text-purple-400 font-bold text-lg hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
            <div className="absolute inset-0 bg-purple-400/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
            <span className="relative flex items-center">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </span>
          </button>
        </div>

        {/* Trust Indicators
        <div className="flex items-center justify-center gap-6 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>Trusted by 50,000+ users</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-600" />
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-400" />
            <span>4.9/5 rating</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-600" />
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-blue-400" />
            <span>Lightning fast</span>
          </div>
        </div> */}
      </div>

      {/* Enhanced Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-400 uppercase tracking-wider">Scroll Down</span>
          <ChevronDown className="w-6 h-6 text-purple-400" />
        </div>
      </div> */}

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-size: 200% 200%; background-position: left center; }
          50% { background-size: 200% 200%; background-position: right center; }
        }
        
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
          background-size: 200% 200%;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Hero;