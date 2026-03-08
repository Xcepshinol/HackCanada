import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchListingById } from '../../../lib/api';
import ListingCard from '../../../components/listings/ListingCard';

const ListingPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const getListing = async () => {
        const data = await fetchListingById(id);
        setListing(data);
        setLoading(false);
      };
      getListing();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!listing) {
    return <div>Listing not found</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{listing.title}</h1>
      <ListingCard listing={listing} />
    </div>
  );
};

export default ListingPage;