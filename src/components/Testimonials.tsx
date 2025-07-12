import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Creative Director',
      company: 'Design Studio',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
      quote: 'This platform has completely transformed how we approach creative projects. The tools are intuitive and powerful.',
      rating: 5
    },
    {
      name: 'Marcus Johnson',
      role: 'Tech Lead',
      company: 'StartupCo',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
      quote: 'The performance improvements we\'ve seen are incredible. Our team productivity has increased by 300%.',
      rating: 5
    },
    {
      name: 'Elena Rodriguez',
      role: 'Product Manager',
      company: 'TechCorp',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200',
      quote: 'Best investment we\'ve made this year. The ROI has been phenomenal and the support team is amazing.',
      rating: 5
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-pink-900/10 via-purple-900/10 to-blue-900/10"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what real users have to say about their experience.
          </p>
        </div>
        
        <div className="flex flex-col gap-8 md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-gradient-to-b from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 hover:from-gray-800/80 hover:to-gray-700/80 transition-all duration-500 transform hover:scale-105 border border-gray-700/50 hover:border-gray-600/50 shadow-xl relative"
              style={{ 
                transform: `translateY(${Math.sin(scrollY * 0.01 + index) * 8}px)` 
              }}
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-purple-400/30" />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-purple-400/50 mr-4"
                />
                <div>
                  <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                  <p className="text-purple-400 font-medium">{testimonial.role}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-300 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;