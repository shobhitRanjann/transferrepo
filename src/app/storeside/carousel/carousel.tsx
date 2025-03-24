"use client"
import { useEffect, useState } from "react";

export default function Carousel() {
  const slides = [
    { id: 1, imglink: 'https://plus.unsplash.com/premium_photo-1732721750556-f5aef2460dfd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', value: '44 million' },
    { id: 2, imglink: 'https://plus.unsplash.com/premium_photo-1732721751495-993c0114c384?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', value: '$119 trillion' },
    { id: 3, imglink: 'https://plus.unsplash.com/premium_photo-1732721751509-d487d00373be?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3w0fHx8ZW58MHx8fHx8', value: '46,000' },
  ]


  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically update carousel every few milliseconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides.length]);

  const updateCarousel = (index: number) => {
    setCurrentIndex((index + slides.length) % slides.length);
  };
  return (
    <>

      <div className="  mx-auto mt-0 lg:max-w-7xl w-4/5">
        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          {/* Slides */}
          <div
            className="flex transition-transform duration-500 w-full h-full rounded-2xl object-cover sm:h-96"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <img src={slide.imglink} alt={`Slide ${index + 1}`} className="w-full" />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => updateCarousel(currentIndex - 1)}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
          >
            &#8592;
          </button>
          <button
            onClick={() => updateCarousel(currentIndex + 1)}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
          >
            &#8594;
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => updateCarousel(index)}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
                }`}
            ></button>
          ))}
        </div>
      </div>
    </>
  )
}