import React from 'react';

interface StarRatingProps {
  average: number;
}

const StarRating: React.FC<StarRatingProps> = ({ average }) => {
  // Calculate the number of filled stars
  const filledStars = Math.round(average * 2) / 2;

  // Generate an array of stars to render
  const stars: JSX.Element[] = [];
  for (let i = 1; i <= 5; i++) {
    if (filledStars >= i) {
      // Filled star
      stars.push(<span key={i} className="star filled">&#9733;</span>);
    } else if (filledStars + 0.5 === i) {
      // Half-filled star
      stars.push(<span key={i} className="star half">&#9733;</span>);
    } else {
      // Empty star
      stars.push(<span key={i} className="star">&#9734;</span>);
    }
  }

  return <div className="star-rating">{stars} <span className='text-sm text-gray-400'>{average}</span></div>;
};

export default StarRating;
