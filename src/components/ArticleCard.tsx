import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Heart, MessageCircle } from 'lucide-react';
import { Article } from '../data/article';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-800 hover:border-gray-700">
      <div className="relative">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-48 object-cover"
        />
        {article.featured && (
          <span className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </span>
        )}
        <div className="absolute top-4 right-4 bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
          {article.category}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-gray-400 text-sm mb-3">
          <Clock className="w-4 h-4 mr-1" />
          <span>{article.readTime} min read</span>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
          {article.title}
        </h3>
        
        <p className="text-gray-400 mb-4 line-clamp-3">
          {article.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-green-400 text-sm">
              #{tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={article.author.avatar} 
              alt={article.author.name}
              className="w-8 h-8 rounded-full mr-3"
            />
            <div>
              <p className="text-white font-medium text-sm">{article.author.name}</p>
              <p className="text-gray-400 text-xs">{article.date}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 text-gray-400">
            <div className="flex items-center">
              <Heart className="w-4 h-4 mr-1" />
              <span className="text-sm">{article.likes}</span>
            </div>
            <div className="flex items-center">
              <MessageCircle className="w-4 h-4 mr-1" />
              <span className="text-sm">{article.comments}</span>
            </div>
          </div>
        </div>
        
        <Link 
          to={`/blog/${article.id}`}
          className="inline-flex items-center text-green-500 hover:text-green-400 font-medium mt-4 transition-colors"
        >
          Read More
          <span className="ml-2">→</span>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;