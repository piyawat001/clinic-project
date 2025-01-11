// src/components/ArticleDetail.jsx
import PropTypes from 'prop-types';
import { ArrowLeft } from 'lucide-react';

const ArticleDetail = ({ article, onBack }) => {
  return (
    <div className="p-4">
      {/* Header with back button */}
      <div className="flex items-center gap-2 mb-4">
        <button
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-semibold">บทความและข่าวสารทั่วไป</h1>
      </div>

      {/* Article content */}
      <div className="bg-white rounded-lg overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-64 object-cover"
        />
        
        {/* Social info */}
        <div className="p-4 bg-white border-b">
          <div className="flex items-center gap-2">
            <img
              src="/api/placeholder/32/32"
              alt="Author avatar"
              className="w-8 h-8 rounded-full"
            />
            <div>
              <div className="font-semibold">{article.author}</div>
              <div className="text-sm text-gray-500">{article.date}</div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4">
          <h2 className="text-xl font-semibold">{article.title}</h2>
          <p className="text-gray-600 whitespace-pre-line">
            {article.fullContent}
          </p>
        </div>
      </div>
    </div>
  );
};

ArticleDetail.propTypes = {
  article: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    fullContent: PropTypes.string.isRequired
  }).isRequired,
  onBack: PropTypes.func.isRequired
};

export default ArticleDetail;