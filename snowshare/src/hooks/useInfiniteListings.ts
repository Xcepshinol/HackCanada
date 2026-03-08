import { useEffect, useState } from 'react';

const useInfiniteListings = (fetchListings) => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const loadMoreListings = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    const newListings = await fetchListings(page);
    
    setListings((prev) => [...prev, ...newListings]);
    setHasMore(newListings.length > 0);
    setLoading(false);
  };

  useEffect(() => {
    loadMoreListings();
  }, [page]);

  return { listings, loading, hasMore, setPage };
};

export default useInfiniteListings;