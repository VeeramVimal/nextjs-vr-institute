import React, { useState } from 'react';

const cards = [
    {
      title: 'Card 1',
      description: 'Description for Card 1.',
      image: 'https://example.com/card1.jpg',
    },
    {
      title: 'Card 2',
      description: 'Description for Card 2.',
      image: 'https://example.com/card2.jpg',
    },
    // Add more cards as needed
  ];

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : cards.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < cards.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="container mx-auto px-6">
      <div className="relative overflow-hidden">
        <div className="flex transition-transform ease-in-out duration-300 transform translate-x-[-100%]">
          {cards.map((card, index) => (
            <div key={index} className={`max-w-sm mx-auto`}>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg p-6">
                {/* <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-32 object-cover mb-4 rounded-md"
                /> */}
                <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-0">
        <button onClick={handlePrev} className="text-gray-500 mr-2">
          Previous
        </button>
        <button onClick={handleNext} className="text-gray-500">
          Next
        </button>
      </div>
    </div>
  );
};

export default CardCarousel;
