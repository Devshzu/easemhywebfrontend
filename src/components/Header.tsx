import React from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800/50">
      {/* Navigation */}
      <nav className="container mx-auto px-4 flex items-center justify-between py-4">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-8 h-8 text-purple-400" />
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Innovate
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#products" className="hover:text-purple-400 transition-colors duration-300">Products</a>
          <a href="#features" className="hover:text-purple-400 transition-colors duration-300">Features</a>
          <a href="#pricing" className="hover:text-purple-400 transition-colors duration-300">Pricing</a>
          <a href="#about" className="hover:text-purple-400 transition-colors duration-300">About</a>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-2 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800 z-50">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col space-y-4">
              <a href="#products" className="hover:text-purple-400 transition-colors duration-300">Products</a>
              <a href="#features" className="hover:text-purple-400 transition-colors duration-300">Features</a>
              <a href="#pricing" className="hover:text-purple-400 transition-colors duration-300">Pricing</a>
              <a href="#about" className="hover:text-purple-400 transition-colors duration-300">About</a>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-2 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 mt-4">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;