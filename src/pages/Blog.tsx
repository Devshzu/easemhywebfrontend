import React, { useState } from 'react';
import { Star } from 'lucide-react';
import Header from '../components/Header';
import CategoryFilter from '../components/CategoryFilter';
import ArticleCard from '../components/ArticleCard';
import Newsletter from '../components/Newsletter';
import { articles } from '../data/article';
import { BookOpen, TrendingUp, Users, Award } from 'lucide-react';
import Footer from '../components/Footer';

const BlogHome = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredArticles = articles.filter(article => 
    selectedCategory === 'All' || article.category === selectedCategory
  );
  
  const featuredArticles = filteredArticles.filter(article => article.featured);
  const latestArticles = filteredArticles.filter(article => !article.featured);

  return (
    <>
      {/* <Hero /> */}
      <Header />
      
      <section className="bg-gradient-to-br from-black via-gray-900 to-black py-32 relative overflow-hidden min-h-screen flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-green-400/10 via-cyan-400/10 to-purple-400/10 rounded-full animate-spin-slow"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex items-center justify-center mb-6">
          <BookOpen className="text-green-400 w-10 h-10 mr-4 animate-pulse" />
          <span className="text-transparent bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text font-semibold text-lg tracking-wide">Latest Insights & Stories</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none tracking-tight ">
        <span className="bg-gradient-to-r from-green-400 via-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient drop-shadow-2xl">
        Our{' '}
          </span>
        
          <span className="bg-gradient-to-r from-green-400 via-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient drop-shadow-2xl">
            Blog
          </span>
        </h1>
        
        <p className="text-2xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed font-light">
          Discover the latest trends, insights, and stories from our team of experts.
        </p>
        <p className="text-xl text-gray-400 mb-16 font-light">
          Stay ahead with cutting-edge knowledge and practical advice.
        </p>
        
        {/* Stats */}
        <div className="flex justify-center space-x-12 mb-16">
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-2xl mb-4 mx-auto backdrop-blur-sm border border-green-500/30 shadow-2xl shadow-green-500/20">
              <TrendingUp className="w-8 h-8 text-green-400" />
            </div>
            <div className="text-4xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">500+</div>
            <div className="text-gray-400 font-medium">Articles</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl mb-4 mx-auto backdrop-blur-sm border border-blue-500/30 shadow-2xl shadow-blue-500/20">
              <Users className="w-8 h-8 text-blue-400" />
            </div>
            <div className="text-4xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">50K+</div>
            <div className="text-gray-400 font-medium">Readers</div>
          </div>
          {/* <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl mb-4 mx-auto backdrop-blur-sm border border-purple-500/30 shadow-2xl shadow-purple-500/20">
              <Award className="w-8 h-8 text-purple-400" />
            </div>
            <div className="text-4xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">25+</div>
            <div className="text-gray-400 font-medium">Awards</div>
          </div> */}
        </div>
        
        <div className="relative max-w-xl mx-auto mb-12">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full px-8 py-6 bg-gray-900/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300 text-lg shadow-2xl shadow-black/50"
          />
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-green-400 transition-all duration-300 p-2 rounded-lg hover:bg-green-500/10">
            <BookOpen className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="bg-gradient-to-r from-green-500 via-cyan-500 to-green-600 hover:from-green-600 hover:via-cyan-600 hover:to-green-700 text-white px-12 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/40 font-semibold text-lg backdrop-blur-sm border border-green-500/20">
            Explore Articles
          </button>
          <button className="border-2 border-gray-600/50 text-gray-300 hover:text-white hover:border-green-500/50 px-12 py-4 rounded-2xl transition-all duration-300 backdrop-blur-xl hover:bg-green-500/10 font-semibold text-lg shadow-xl">
            Subscribe Now
          </button>
        </div>
      </div>
    </section>

      <main className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CategoryFilter 
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          
          {featuredArticles.length > 0 && (
            <section className="mb-20">
              <div className="flex items-center mb-8">
                <Star className="text-green-500 w-6 h-6 mr-3" />
                <h2 className="text-3xl font-bold text-white">Featured Articles</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </section>
          )}
          
          {latestArticles.length > 0 && (
            <section>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <TrendingUp className="text-green-500 w-6 h-6 mr-3" />
                  <h2 className="text-3xl font-bold text-white">Latest Articles</h2>
                </div>
                <span className="text-gray-400">{latestArticles.length} articles found</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {latestArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      
      <Newsletter />
      <Footer/>
    </>
  );
};

export default BlogHome;