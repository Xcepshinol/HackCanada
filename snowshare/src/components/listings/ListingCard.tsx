import React from 'react';

interface ListingCardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  onClick: () => void;
}

const ListingCard: React.FC<ListingCardProps> = ({ title, description, imageUrl, price, onClick }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer" onClick={onClick}>
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <p className="text-gray-900 font-bold text-xl mt-2">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ListingCard;