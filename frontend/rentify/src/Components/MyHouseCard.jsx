/* eslint-disable react/prop-types */
import house from '../assets/house.avif'
import React from 'react'

const MyHouseCard = ({houses}) => {
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
        </div>
        <div className='flex justify-between gap-8'>
            <button className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Update</button>
            <button className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Delete</button>

        </div>
      </div>
    </div>
    
  </div>
  )
}

export default MyHouseCard
