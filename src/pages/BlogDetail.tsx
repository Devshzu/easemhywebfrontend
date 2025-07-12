import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Heart, MessageCircle, Share2, Calendar, BookmarkPlus, Eye, ThumbsUp, Twitter, Facebook, Linkedin } from 'lucide-react';
import { articles } from '../data/article';
import '../pages/blog.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === Number(id));

  if (!article) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Article not found</h1>
          <Link to="/" className="text-green-500 hover:text-green-400">
            Return to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
 <Header/>   
    <div className="bg-gradient-to-br from-black via-gray-900 to-black min-h-screen relative overflow-hidden">
      {/* Immersive background elements */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-blue-400/5 via-green-400/5 to-purple-400/5 rounded-full animate-spin-slow"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          to="/"
          className="inline-flex items-center bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent hover:from-green-400 hover:to-cyan-400 mb-12 transition-all duration-300 hover:translate-x-2 font-semibold text-lg backdrop-blur-sm"
        >
          <ArrowLeft className="w-5 h-5 mr-3 text-green-500" />
          Back to Blog
        </Link>
        
        <article className="relative z-10">
          <header className="mb-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <span className="bg-gradient-to-r from-green-500 via-cyan-500 to-green-600 text-white px-6 py-3 rounded-full text-sm font-semibold mr-6 shadow-2xl border border-green-400/30 backdrop-blur-sm">
                {article.category}
              </span>
              {article.featured && (
                  <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 py-3 rounded-full text-sm font-semibold shadow-2xl border border-yellow-400/30 backdrop-blur-sm">
                  Featured
                </span>
              )}
              </div>
              <div className="flex items-center space-x-4">
                <button className="p-3 bg-gray-800/50 hover:bg-green-600 text-gray-300 hover:text-white rounded-xl transition-all duration-300 backdrop-blur-xl border border-gray-700/50 hover:border-green-500/50 shadow-lg hover:shadow-green-500/25">
                  <BookmarkPlus className="w-5 h-5" />
                </button>
                <button className="p-3 bg-gray-800/50 hover:bg-blue-600 text-gray-300 hover:text-white rounded-xl transition-all duration-300 backdrop-blur-xl border border-gray-700/50 hover:border-blue-500/50 shadow-lg hover:shadow-blue-500/25">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-8 leading-none tracking-tight">
              {article.title}
            </h1>
            
            <p className="text-2xl text-gray-300 mb-12 leading-relaxed font-light max-w-3xl">
              {article.description}
            </p>
            
            {/* <div className="flex items-center justify-between mb-12 p-8 bg-gray-900/30 backdrop-blur-xl rounded-2xl border border-gray-800/50 shadow-2xl">
              <div className="flex items-center">
                <img 
                  src={article.author.avatar} 
                  alt={article.author.name}
                  className="w-16 h-16 rounded-full mr-6 ring-4 ring-green-500/50 shadow-2xl"
                />
                <div>
                  <p className="text-white font-bold text-lg">{article.author.name}</p>
                  <p className="text-gray-400">{article.author.title}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-8 text-gray-400">
                <div className="flex items-center bg-gray-800/50 px-4 py-2 rounded-xl backdrop-blur-sm border border-gray-700/50">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="text-sm">{article.date}</span>
                </div>
                <div className="flex items-center bg-gray-800/50 px-4 py-2 rounded-xl backdrop-blur-sm border border-gray-700/50">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="text-sm">{article.readTime} min read</span>
                </div>
                <div className="flex items-center bg-gray-800/50 px-4 py-2 rounded-xl backdrop-blur-sm border border-gray-700/50">
                  <Eye className="w-4 h-4 mr-1" />
                  <span className="text-sm">{Math.floor(Math.random() * 5000) + 1000}</span>
                </div>
              </div>
            </div> */}
            
            <div className="flex items-center justify-between mb-12 p-6 bg-gray-900/20 backdrop-blur-xl rounded-2xl border border-gray-800/30 shadow-xl">
              <div className="flex items-center space-x-6">
                <button className="flex items-center text-gray-400 hover:text-red-500 transition-all duration-300 px-6 py-3 rounded-xl hover:bg-red-500/10 border border-transparent hover:border-red-500/30">
                  <Heart className="w-5 h-5 mr-2" />
                  <span className="font-medium">{article.likes}</span>
                </button>
                <button className="flex items-center text-gray-400 hover:text-blue-500 transition-all duration-300 px-6 py-3 rounded-xl hover:bg-blue-500/10 border border-transparent hover:border-blue-500/30">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  <span className="font-medium">{article.comments}</span>
                </button>
                <button className="flex items-center text-gray-400 hover:text-green-500 transition-all duration-300 px-6 py-3 rounded-xl hover:bg-green-500/10 border border-transparent hover:border-green-500/30">
                  <ThumbsUp className="w-5 h-5 mr-2" />
                  <span className="font-medium">Like</span>
                </button>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 font-medium mr-4">Share:</span>
                <button className="p-3 text-gray-400 hover:text-blue-400 hover:bg-blue-400/10 rounded-xl transition-all duration-300 border border-transparent hover:border-blue-400/30">
                  <Twitter className="w-4 h-4" />
                </button>
                <button className="p-3 text-gray-400 hover:text-blue-600 hover:bg-blue-600/10 rounded-xl transition-all duration-300 border border-transparent hover:border-blue-600/30">
                  <Facebook className="w-4 h-4" />
                </button>
                <button className="p-3 text-gray-400 hover:text-blue-500 hover:bg-blue-500/10 rounded-xl transition-all duration-300 border border-transparent hover:border-blue-500/30">
                  <Linkedin className="w-4 h-4" />
                </button>
              </div>
            </div>
          </header>
          
          <div className="mb-12 relative overflow-hidden rounded-3xl shadow-2xl">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
          
          <div 
            className="prose prose-xl prose-invert max-w-none mb-12 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          
          <div className="border-t border-gray-800/50 pt-12 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Tags</h3>
            <div className="flex flex-wrap gap-4">
              {article.tags.map((tag) => (
                <span 
                  key={tag}
                  className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 text-green-400 px-6 py-3 rounded-2xl hover:from-green-500 hover:to-cyan-500 hover:text-white transition-all duration-300 cursor-pointer transform hover:scale-105 backdrop-blur-xl border border-gray-700/50 hover:border-green-500/50 shadow-lg hover:shadow-green-500/25"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </article>
        
        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-3xl p-10 border border-gray-700/50 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-cyan-500/5 to-purple-500/5 rounded-3xl"></div>
          <div className="flex items-center mb-6">
            <img 
              src={article.author.avatar} 
              alt={article.author.name}
              className="w-20 h-20 rounded-full mr-8 ring-4 ring-green-500/50 shadow-2xl"
            />
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{article.author.name}</h3>
              <p className="text-gray-400 text-lg">{article.author.title}</p>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed text-lg mb-8">
            {article.author.name} is a passionate writer and expert in {article.category.toLowerCase()}. 
            Follow their work for more insights and industry updates.
          </p>
          <div className="flex items-center space-x-6">
            <button className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white px-8 py-4 rounded-2xl transition-all duration-300 font-semibold shadow-lg hover:shadow-green-500/25 transform hover:scale-105">
              Follow Author
            </button>
            <button className="border-2 border-gray-600/50 text-gray-300 hover:text-white hover:border-green-500/50 px-8 py-4 rounded-2xl transition-all duration-300 backdrop-blur-xl hover:bg-green-500/10 font-semibold">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default BlogDetail;