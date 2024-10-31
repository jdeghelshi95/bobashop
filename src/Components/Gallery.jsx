import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';


export default function Gallery() {
  const images = [
    'https://i.imgur.com/lIqjIOn.jpeg',
    'https://i.imgur.com/19rGxxt.jpeg',
    'https://i.imgur.com/7fhFatO.jpeg',
    'https://i.imgur.com/hgpREUy.jpeg',
  ];
  
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState('next'); // to manage slide direction

  const nextImage = () => {
    setDirection('next');
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setDirection('prev');
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  // Auto-play with 5-second interval
  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentImage]);

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative w-full max-w-lg h-[400px] overflow-hidden">
        {images.map((image, index) => (
          <Transition
            key={index}
            show={index === currentImage}
            enter="transition duration-700 ease-in-out transform"
            enterFrom={direction === 'next' ? 'translate-x-full opacity-0' : '-translate-x-full opacity-0'}
            enterTo="translate-x-0 opacity-100"
            leave="transition duration-700 ease-in-out transform"
            leaveFrom="translate-x-0 opacity-100"
            leaveTo={direction === 'next' ? '-translate-x-full opacity-0' : 'translate-x-full opacity-0'}
            className="absolute inset-0"
          >
            <img src={image} alt={`Gallery ${index}`} className="w-full h-full object-cover" />
          </Transition>
        ))}
      </div>
      <div className="flex space-x-4">
        <button
          onClick={prevImage}
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-all flex items-center justify-center"
        >
          <span>&#8592;</span> {/* Left arrow */}
        </button>
        <button
          onClick={nextImage}
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-all flex items-center justify-center"
        >
          <span>&#8594;</span> {/* Right arrow */}
        </button>
      </div>
    </div>
  );
}
