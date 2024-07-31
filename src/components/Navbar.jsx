
import logo from '../assets/logo.png'
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useNavigate, NavLink } from "react-router-dom";

function Navbar ()  {

  const navigate = useNavigate();
  


  return (
    <>
    <nav className="bg-ogcolor  py-5">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between md:px-2 sm:px-2">
            <div className='flex text 2xl item-center gap-2'>

            <img src={logo} alt="" className="w-12" ></img>
            <span className='text-white py-2  text-xl font-semibold'>nanosemic</span>
            </div>

        <ul className="text-white text-bold text-lg item-center font-bold hidden md:flex pl-9 md:pl-0 gap-10 hover:cursor-pointer justify-between">
          <li className ='hover:cursor-pointer'>
            <NavLink to = "/home">Home</NavLink>
            </li>
            <li>

            <NavLink to = "/about">About </NavLink>
            </li>
            <li>

            <NavLink to = "/pro">Product</NavLink>
            </li>
            <li>
            <NavLink to = "/services">Services</NavLink>
            </li>
            <li>
            <NavLink to ="/Contact">Contact</NavLink>
            </li>
              <button onClick={()=>navigate("/login")} className="bg-white inline- text-black rounded-full py-1 px-4 hover:cursor-pointer text-lg font-semibold"> Login</button>
             </ul>
            
        </div>
    </nav>

    </>
  )
}

export default Navbar



      