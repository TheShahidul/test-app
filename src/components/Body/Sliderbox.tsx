import { useEffect, useRef, useState } from 'react';

import img1 from '../imgs/img-1.jpg';
import img2 from '../imgs/img-2.jpg';
import img3 from '../imgs/img-3.jpg';
import img4 from '../imgs/img-4.jpg';

const images = [
  img1,
  img2,
  img3,
  img4,
];
const SliderBox = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;
  const slideInterval = useRef<ReturnType<typeof setInterval> | null>(null);
  const delay = 5000; // 5 seconds per slide

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  const startAutoSlide = () => {
    stopAutoSlide(); // Clear any previous
    slideInterval.current = setInterval(nextSlide, delay);
  };

  const stopAutoSlide = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  return (
    <div
      className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-md group"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      {/* Image container */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Prev/Next buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow-md"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow-md"
      >
        ❯
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderBox;