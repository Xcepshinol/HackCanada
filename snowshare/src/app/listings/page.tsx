import React from 'react';
import ListingCard from '@/components/listings/ListingCard';
import ListingFilters from '@/components/listings/ListingFilters';

const ListingsPage = () => {
  // Sample data for listings
  const listings = [
    { id: 1, title: 'Help with Moving', description: 'Need assistance moving furniture.', location: 'New York' },
    { id: 2, title: 'Grocery Shopping', description: 'Looking for someone to do grocery shopping.', location: 'Los Angeles' },
    { id: 3, title: 'Dog Walking', description: 'Need someone to walk my dog.', location: 'Chicago' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Listings</h1>
      <ListingFilters />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
};

export default ListingsPage;