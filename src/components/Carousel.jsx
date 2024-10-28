import React, { useEffect, useState } from 'react';
import './Carousel.css'; // Adds a separate CSS file for styling

function Carousel() {
    const carouselImages = [
        'https://images.deepai.org/art-image/e591ca610c0c4ed7a218ac812cf5e5cd/african-american-with-dreads-e878da.jpg',
        'https://images.deepai.org/art-image/9c3006b6f9014652a66b410460eed32a/african-american-with-braids.jpg',
        'https://images.deepai.org/art-image/8139316934894ae593a80d51d69f6b9e/hair-gel-for-afro-americans.jpg',
        'https://images.deepai.org/art-image/5f5173aa3cd74ed29526f32f2a173e60/scalp-oil-for-african-american-people-make-it_Bw4jMdR.jpg',
        'https://images.deepai.org/art-image/5f5173aa3cd74ed29526f32f2a173e60/scalp-oil-for-african-american-people-make-it_Bw4jMdR.jpg',
        'https://images.deepai.org/art-image/179890e5ef7e4a4cb78febd9d6ee41d7/afro-american-hair-product-d3cbae.jpg',
        'https://images.deepai.org/art-image/90ef5453eaa7460192ae43c1cbf42d59/afro-american-hair-product-and-model.jpg',
        'https://images.deepai.org/art-image/d8d3e3a8d5be401f98abc5ebd7b2d5b0/afro-american-hair-product-and-model-hairstyle.jpg',
        'https://images.deepai.org/art-image/1abdf15cf33642af862acb3f503d38ec/afro-american-hair-product-3f2679.jpg',
        'https://images.deepai.org/art-image/ed081aaa7414466494faa5f811c6be25/afro-american-male-model-hair-product.jpg',
        'https://images.deepai.org/art-image/2d447e0a72ec4539b4dcf214bf359a37/afro-america-styling-hair-with-hair-care-product.jpg',
        'https://images.deepai.org/art-image/1aec867984dc4ecfa9b48f5e71a496ba/afro-american-hair-product-and-hair-care-with_qc0Ij2z.jpg'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
        }, 4000); // Change every 4 seconds

        return () => clearInterval(interval);
    }, [carouselImages.length]);

    return (
        <div className="carousel-container">
            <div className="carousel">
                <img src={carouselImages[currentIndex]} alt="Product" className="carousel-image" />
            </div>
        </div>
    );
}

export default Carousel;



