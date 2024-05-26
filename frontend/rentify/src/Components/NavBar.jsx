// import React from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { Home} from 'lucide-react'
import { useContext } from 'react'
import { Auth } from '../Contexts/AuthContext'

const NavBar = () => {
  const {user} = useContext(Auth)
  const {dispatch} = useContext(Auth)
  const nav = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch({type:"LOGOUT"})
    nav("/")
  
  }

  console.log(user);

  const handleLogin = () => {
    nav("/login")
  }

  return (
    <div className='drop-shadow-lg flex justify-around items-center w-auto h-20 bg-gradient-to-r from-red-100 from-10% via-red-200 via-30% to-red-200 text-slate-800'>
      
      <div className='flex justify-center items-center'>
        <Home className='w-20 h-16 cursor-pointer'/>
        <h2 className='cursor-pointer font-extrabold'>Rentify</h2>
      </div>
      <ul className='flex justify-center items-center gap-10'>
        <Link to='/'  className='hover:border-b-2 border-slate-600 cursor-pointer text-md'>Home</Link>
        <Link to='/about-us' className='hover:border-b-2 border-slate-600 cursor-pointer'>About us</Link>
        <Link to='/contact-us'  className='hover:border-b-2 border-slate-600 cursor-pointer'>Contact us</Link>
        <Link to = {user !== null ? '/dashbooard' : '/login'} className='hover:border-b-2 border-slate-600 cursor-pointer'>Find Homes</Link>
        {user !== null ? <Link to='/dashboard' className='hover:border-b-2 border-slate-600 cursor-pointer'>Dashboard</Link>:null}
      </ul>
      <button onClick={() => user !== null ? handleLogout() : handleLogin()}  className='shadow-lg hover:bg-red-800 w-20 h-9 bg-red-500 rounded-full text-white'>{user !== null ? "Log Out" : "Log In"}</button>
    </div>
  )
}

export default NavBar
