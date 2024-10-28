import React from 'react'
import logo from "../assets/logo.png"
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
       
    
  <div className="bg-black">
  <div className="bg-black text-white py-10 ">
    <footer class="max-w-[1280px] mx-auto px-3 pt-4 lg:px-9">
    <div class="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">

        <div class="sm:col-span-2">
            <a href="#" class="inline-flex items-center">
                <img src={logo} alt="logo" class="w-12"/>
                <span class="ml-2 text-xl font-bold tracking-wide text-white">nanosemic</span>
            </a>
            <div class="mt-6 lg:max-w-xl">
               
                    <div className='flex justify-between md:w-[75%] gap-4 my-6 mt-20'>
                    <Link to="https://g.co/kgs/DhcmQ6L" class="w-full min-w-xl">
                    <img src="https://mcqmate.com/public/images/icons/playstore.svg" alt="Playstore Button"
                        className="h-10"/>
                        </Link>
                        <Link to ='https://in.linkedin.com/company/nano-semic' >
                        <FaLinkedinIn size={30} className='hover:text-blue-500'/>
                        </Link>
                        <Link to ='https://twitter.com/'>
                        <FaXTwitter size={(30)} className='hover:text-blue-500'/>
                        </Link>

                         </div>
            </div>
        </div>
       


        <div className="flex flex-col gap-2 text-sm">
            <p className="text-base font-bold tracking-wide text-white">Company</p>
            <a href ="/home" className='transition-colors duration-300  hover:text-blue-400'>Home</a>
            <a href ="/about" className='transition-colors duration-300  hover:text-blue-400'>About</a>
            <a href ="/pro" className='transition-colors duration-300  hover:text-blue-400'>Product</a>
            <a href ="/services" className='transition-colors duration-300  hover:text-blue-400'>Services</a>

            <p to className="text-base font-bold tracking-wide text-white">Products</p>
            <a href ="/product"className='transition-colors duration-300  hover:text-blue-400'>Healthcare</a>
            <a href="/education" className='transition-colors duration-300  hover:text-blue-400'>Education</a>
            <a href="/agriculture" className='transition-colors duration-300  hover:text-blue-400'>Agriculture</a>
            <a href="/safety">Safety</a>
        </div>
        <div className="flex flex-col gap-2 text-sm">
            <p className="text-base font-bold tracking-wide text-white">Services</p>
            <a href ="/home" className='transition-colors duration-300  hover:text-blue-400'>Ser.1</a>
            <a href ="/about" className='transition-colors duration-300  hover:text-blue-400'>Ser.2</a>
            <a href="/pro" className='transition-colors duration-300  hover:text-blue-400'>Ser.3</a>
            <a href="/services" className='transition-colors duration-300  hover:text-blue-400'>Ser.4</a>

            <p class="text-base font-bold tracking-wide text-white">Contacts</p>
            <div class="">
            <p class="mr-1 text-white"> Nano Semic Pvt Ltd, Research & Entrepreneurship Park , C/O<br/>IIT Bhubaneswar, Kansapada<br/> Odisha : 752050</p>
                <p class="mr-1 text-white">Email :
                <a href="" title="send email" className='hover:text-blue-500'>  nanosemic.official@gmail.com</a></p>
            </div>
            </div>

    </div>

    <div class="flex flex-col-reverse justify-between pt-5 pb-5 border-t lg:flex-row">
        <p class="text-sm text-white">© Copyright 2024 Company. All rights reserved.</p>
        <ul class="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
                <a href ="/policy"
                    className="text-sm text-white hover:text-blue-400  transition-colors duration-300 hover:text-deep-purple-accent-400">Policy
                    
                </a>  &

            </li>
            <li>
                <a href  ="/terms"
                    className="text-sm text-white transition-colors duration-300  hover:text-blue-400 ">Terms and Condition
                </a>
            </li>
        </ul>
    </div>

</footer>
</div>
  </div>    
    </>
  )
}

export default Footer
