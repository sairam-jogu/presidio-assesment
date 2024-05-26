import { useContext, useEffect } from 'react';
import { Auth } from '../Contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
// import HouseCard from '../Components/HouseCard';
import {Home,CirclePlus,Fence} from 'lucide-react'
import { Link, Outlet } from "react-router-dom";

const DashBoard = () => {
  const { user } = useContext(Auth);
  const nav = useNavigate();

  useEffect(() => {
    if (!user) {
      nav('/login');
    }
  }, [user, nav]); 

  const navItems = [
    {
      id:1,
      name:"My Properties",
      path:"my-properties",
      icon: Home,
    },
    {
      id:2,
      name:"Find Properties",
      path:"find-properties",
      icon: CirclePlus ,
    },
    {
      id:3,
      name:"Add Properties",
      path:"add-properties",
      icon: Fence ,
    }
  ]
    
  

  console.log(user);

  return (
    <div className="flex">
      <div className="border shadow-2xl w-[25%] h-screen p-5 bg-red-200">
        <hr className="my-5 shadow-2xl"></hr>
        {navItems.map((nav) => (
          <Link
            to={nav.path}
            key={nav.id}
            className="flex items-center gap-3 text-md p-4 text-black hover:bg-red-100 hover:text-red-500 cursor-pointer rounded-lg my-2"
          >
            <nav.icon className="w-6 h-6" />
            <h2>{nav.name}</h2>
          </Link>
        ))}
      </div>
      <div className="flex-1 p-5">
        <h1 className='font-bold text-red-800 text-[30px] text-center'>User DashBoard</h1>
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
