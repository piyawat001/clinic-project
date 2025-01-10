// src/components/AboutPage.jsx
import { useState } from 'react';
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';
import image4 from '../assets/4.jpg';
import image5 from '../assets/5.jpg';

const AboutPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: image1,
      title: "เกี่ยวกับเรา",
      subtitle: "คลินิกนายแพทย์สุทธิลักษณ์",
      location: "ต.ปะโค จ.หนองคาย"
    },
    {
      image: image2
    },
    {
      image: image3
    },
    {
      image: image4
    },
    {
      image: image5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="p-4">
      <div className="text-center mb-4 space-y-2">
        <h1 className="text-xl font-semibold">{slides[0].title}</h1>
        <h2>{slides[0].subtitle}</h2>
        <p>{slides[0].location}</p>
      </div>

      <div className="relative">
        <div className="aspect-[3/4] relative overflow-hidden rounded-lg">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${
                index === currentSlide ? 'translate-x-0' : index < currentSlide ? '-translate-x-full' : 'translate-x-full'
              }`}
            >
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-contain bg-white"
              />
            </div>
          ))}

          {/* Previous button */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50"
            aria-label="Previous slide"
          >
            ←
          </button>

          {/* Next button */}
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50"
            aria-label="Next slide"
          >
            →
          </button>
        </div>

        {/* Dots navigation */}
        <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full ${
                index === currentSlide ? 'bg-blue-900' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;