
import React, { useState, useEffect } from 'react';
import HouseCard from './HouseCard';

const AllProperties = () => {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const housesPerPage = 4;

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await fetch('http://localhost:3000/getAllHouses');
        if (!response.ok) {
          throw new Error('Failed to fetch houses');
        }
        const data = await response.json();
        setHouses(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchHouses();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const indexOfLastHouse = currentPage * housesPerPage;
  const indexOfFirstHouse = indexOfLastHouse - housesPerPage;
  const currentHouses = houses.slice(indexOfFirstHouse, indexOfLastHouse);

  const totalPages = Math.ceil(houses.length / housesPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-2">
        {currentHouses.map((house) => (
          <HouseCard key={house._id} houses={house} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-1 bg-red-300 rounded-md hover:bg-red-400 disabled:bg-red-200"
        >
          Previous
        </button>
        <span className="px-4 py-2 mx-1">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-1 bg-red-300 rounded-md hover:bg-red-400 disabled:bg-red-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllProperties;

