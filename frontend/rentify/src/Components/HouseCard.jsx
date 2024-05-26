/* eslint-disable react/prop-types */
// import React from 'react';

import { useState } from 'react';
import house from '../assets/house.avif'
import { Heart } from 'lucide-react'; 

const HouseCard = ({houses}) => {
    const [liked, setLiked] = useState(false);
    const handleLikeClick = () => {
        setLiked(!liked); // Toggle the liked state
      };

      const heartColor = liked ? 'text-red-500' : 'text-gray-500';

//   const handleInterestedClick = async () => {
//     const buyerDetails = {
//       name: 'John Doe',
//       email: 'john.doe@example.com',
//       phone: '1234567890',
//     };

//     const houseDetails = {
//       address: house.address,
//       price: house.price,
//       description: house.description,
//     };

//     try {
//       const response = await fetch('http://localhost:3000/interested', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ buyerDetails, houseDetails }),
//       });
//       if (response.ok) {
//         alert('Interest expressed successfully');
//       } else {
//         throw new Error('Error expressing interest');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error expressing interest');
//     }
//   };

  return (
    <div className="max-w-md mx-auto w-[450px] shadow-2xl bg-white rounded-xl  overflow-hidden md:max-w-2xl">
    <div className="md:flex">
      <div className="md:flex-shrink-0 ">
        <img className="h-48 w-full object-cover md:h-full md:w-48" src={house} alt="House" />
      </div>
      <div className="p-8">
        <div className='flex justify-between'>
            <div>
                <div className="uppercase tracking-wide text-sm text-red-500 font-semibold">Type</div>
                <p className="mt-2 text-gray-500">{houses?.place}</p>
                <p className="mt-2 text-gray-500">Price: {houses?.price}</p>
                <p className="mt-2 text-gray-500">{houses?.description}</p>
            </div>
            <div className="flex items-center">
              <button onClick={handleLikeClick}>
                <Heart className={`h-6 w-6 ${heartColor} cursor-pointer`} /> 
              </button>
            </div>
        </div>
        <button className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Interested</button>
      </div>
    </div>
    
  </div>
  );
};

export default HouseCard;
