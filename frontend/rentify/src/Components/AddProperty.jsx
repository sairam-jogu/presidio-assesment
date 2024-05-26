import React, { useContext, useState } from 'react'
import { Auth } from '../Contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const AddProperty = () => {
    const { user } = useContext(Auth);
    const nav = useNavigate();
    const [formData, setFormData] = useState({
        place: '',
        area: '',
        imageUrl: '',
        numberOfBeds: 0,
        numberOfBathrooms: 0,
        price: 0,
        description: '',
        hospitalsNearBy: '',
        schoolsNearBy: ''
      });
      const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            console.log(formData);
            const token = user
            const addPost = await fetch('http://localhost:3000/addHouse',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                    },
                body: JSON.stringify(formData)
            })
            const data = await addPost.json()
            console.log(data);
            if(addPost.ok){
                nav("/my-properties")
            }

        }catch(error){
            console.log(error);
        }
      }
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
  return (
    <>
   
            
            <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="mt-8 space-y-2">
            {/* <h1 className='font-bold text-center'>Post your Property</h1> */}
            <div className='flex justify-between'>
            <div>
            <label htmlFor="place" className="block">Place</label>
            <input type="text" id="place" name="place" value={formData.place} onChange={handleChange} required className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
            </div>
            <div>
            <label htmlFor="area" className="block">Area</label>
            <input type="text" id="area" name="area" value={formData.area} onChange={handleChange} required className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
            </div>
        </div>
        <div>
          <label htmlFor="imageUrl" className="block">Image URL</label>
          <input type="text" id="imageUrl" name="imageUrl" value={formData.imageUrl} onChange={handleChange} required className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
        </div>
        <div className='flex justify-between'>
            <div>
            <label htmlFor="numberOfBeds" className="block">Number of Beds</label>
            <input type="number" id="numberOfBeds" name="numberOfBeds" value={formData.numberOfBeds} onChange={handleChange} required className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
            </div>
            <div>
            <label htmlFor="numberOfBathrooms" className="block">Number of Bathrooms</label>
            <input type="number" id="numberOfBathrooms" name="numberOfBathrooms" value={formData.numberOfBathrooms} onChange={handleChange} required className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
            </div>
        </div>
        <div>
        <label htmlFor="price" className="block">Price</label>
        <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} required className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
        </div>
        <div>
          <label htmlFor="description" className="block">Description</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange} required className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
        </div>
        <div>
          <label htmlFor="hospitalsNearBy" className="block">Hospitals Nearby</label>
          <input type="text" id="hospitalsNearBy" name="hospitalsNearBy" value={formData.hospitalsNearBy} onChange={handleChange} required className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
        </div>
        <div>
          <label htmlFor="schoolsNearBy" className="block">Schools Nearby</label>
          <input type="text" id="schoolsNearBy" name="schoolsNearBy" value={formData.schoolsNearBy} onChange={handleChange} required className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
        </div>
        <button type="submit" className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md">Submit</button>
      </form>
    </div>
    </>
  )
}

export default AddProperty
