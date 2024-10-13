import React, { useState, useEffect } from 'react';


function Carousel() {
  const carouselImages = [
    'https://images.deepai.org/art-image/e591ca610c0c4ed7a218ac812cf5e5cd/african-american-with-dreads-e878da.jpg',
    'https://images.deepai.org/art-image/9c3006b6f9014652a66b410460eed32a/african-american-with-braids.jpg',
    'https://images.deepai.org/art-image/8139316934894ae593a80d51d69f6b9e/hair-gel-for-afro-americans.jpg',
    'https://images.deepai.org/art-image/5f5173aa3cd74ed29526f32f2a173e60/scalp-oil-for-african-american-people-make-it_Bw4jMdR.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <div className="carousel max-w-full mx-auot">
      <img src={carouselImages[currentIndex]} alt="Product" className="w-full h-auto object-cover rounded-lg shadow-md" />
    </div>
  );
}

export default Carousel;
