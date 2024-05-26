/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Auth } from '../Contexts/AuthContext';
import login from '../assets/login.avif'

const Login = () => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("");
    const {dispatch} = useContext(Auth)
    const nav = useNavigate()
    const {user} = useContext(Auth)
  useEffect(()=>{
    if(user){
      nav("/dashboard");
    }
  },[])
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const user = await fetch("http://localhost:3000/login",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({email,password})
            })
            const data = await user.json()
            
            if(user.ok){
                console.log("Login Sucessfull",data);
                localStorage.setItem("token",data.token);
                dispatch({type:'LOGIN',payload:{token:data.token}})
                nav("/dashboard")
            }
            setEmail("")
            setPassword("")
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className="flex justify-center items-center gap-10 mt-7">
      <img className="w-1/3 h-auto" src={login} />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-semibold text-slate-700">Login to Account</h1>
        <form className="shadow-2xl flex flex-col justify-center mt-4 items-center border-2 rounded-lg w-96 gap-6 py-7">
          <div className="flex flex-col justify-start items-start gap-4 w-[300px]">
            <p className=''>Enter Email</p>
            <input className='p-2 outline-none border-2 rounded-lg w-full' type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="flex flex-col justify-center items-start gap-4 w-[300px]">
            <p className="">Enter password</p>
            <input className='p-2 outline-none border-2 rounded-lg w-full' type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <button className='shadow-lg hover:bg-red-800 w-[315px] h-9 bg-red-500 rounded-full text-white' onClick={handleSubmit}>Submit</button>
          <div className="">
              <Link to='/signup' className="text-pink-600 font-semibold ">Not Registered yet ? </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
