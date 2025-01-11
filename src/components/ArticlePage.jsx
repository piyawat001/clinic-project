// อัพเดท src/components/ArticlePage.jsx
import { useState } from 'react';
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';
import ArticleDetail from './ArticleDetail';

const ArticlePage = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      id: 1,
      image: image1,
      title: "กรุชอนามัย และประชาชนดูแลสุขภาพ คลายวิตกโรคจากความร้อน",
      description: "การดูแลสุขภาพช่องปากเป็นเรื่องสำคัญ ซึ่งควรทำความสะอาดอย่างน้อยวันละ 2-3 ครั้ง",
      author: "ThaiHealth Official",
      date: "23 มกราคม 2567",
      fullContent: `การดูแลสุขภาพช่องปากที่ถูกต้อง และการป้องกันโรคในช่วงอากาศร้อน

      1. ดื่มน้ำสะอาดให้เพียงพอ
      2. หลีกเลี่ยงการอยู่กลางแจ้ง
      3. สังเกตอาการผิดปกติ
      4. พักผ่อนให้เพียงพอ

      หากมีอาการผิดปกติควรรีบปรึกษาแพทย์...`
    },
    {
      id: 2,
      image: image2,
      title: "แนะเรื่องอาการเปลี่ยนแปลง เลี้ยงลูกคู่แม่อยู่เย็น",
      description: "เมื่อลูกน้อยมีไข้ พ่อแม่ควรรู้จักวิธีดูแลเบื้องต้น",
      author: "ThaiHealth Official",
      date: "29 มกราคม 2565",
      fullContent: `แนวทางการดูแลเด็กและการสังเกตอาการที่ผิดปกติ...`
    },
    {
      id: 3,
      image: image3,
      title: "พยาบาลงาน บริการช่วย และดูแลสุขภาพ ลดโรค ลดเลี่ยง",
      description: "หลักการทานอาหาร เพื่อป้องกันความเสี่ยงต่อโรคต่างๆ",
      author: "ThaiHealth Official",
      date: "29 มกราคม 2565",
      fullContent: `การรักษาสุขภาพและการป้องกันโรคในชีวิตประจำวัน...`
    }
  ];

  if (selectedArticle) {
    return (
      <ArticleDetail
        article={selectedArticle}
        onBack={() => setSelectedArticle(null)}
      />
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4 text-center">บทความและข่าวสารทั่วไป</h1>
      <div className="space-y-4">
        {articles.map((article) => (
          <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <img
                  src="/api/placeholder/24/24"
                  alt="Author avatar"
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-sm">{article.author}</span>
                <span className="text-sm text-gray-500">{article.date}</span>
              </div>
              <h2 className="text-lg font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{article.description}</p>
              <button 
                className="bg-blue-900 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-800"
                onClick={() => setSelectedArticle(article)}
              >
                เพิ่มเติม...
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlePage;