import React from 'react'
import logo from "../assets/logo.png"
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
       
    {/* <div className='max-w-[1280px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8'>
    <div >
        <img src={logo} alt="" className="w-10" />
      <span className='w-full text-2xl font-bold text-white'>
        nanosemic</span>
      <p className='py-4 text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p> */}
      {/* <div className='flex justify-between md:w-[75%] my-6'>
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
      </div> */}
    {/* </div>
    <div className='lg:col-span-2 flex justify-between mt-6'>
  <div>
      <h6 className='font-lg font-semibold text-white'>Company</h6>
      <ul className='text-gray-400'>
        <li>
          <Link to ="/home" className='py-2 text-sm'>Home</Link>
          </li>
          <li>
          <Link to ="/about" className='py-2 text-sm'>About</Link>
          </li>
          <li>
          <Link to ="/Pro" className='py-2 text-sm'>Product</Link>
          </li>
          <li>
          <Link to ="/Services" className='py-2 text-sm'>Services</Link>
          </li>
          
      </ul> */}
  {/* </div>
  <div>
      <h6 className='font-lg font-semibold text-white'>Product</h6>
      <ul className=' text-gray-400 '>
          <li>
          <Link to ="/product" className='py-2text-sm hover:text-blue-300 '>Healthcare</Link>
          </li>
          <li>
          <Link to ="/education" className='py-2 text-sm'>Education</Link>
          </li>
          <li>
          <Link to ="/agriculture" className='py-2 text-sm'>Agriculture</Link>
          </li>
          <li>
          <Link to ="/safety" className='py-2 text-sm'>Safety</Link>
          </li>
      </ul>
  </div> */}
  {/* <div>
      <h6 className='font-lg font-semibold text-white'>Services</h6>
      <ul className=" text-gray-400">
      <li>
          <Link to ="/safety" className='py-2 text-sm'>Safety</Link>
          </li>
          <li>
          <Link to ="/safety" className='py-2 text-sm'>Safety</Link>
          </li>
          <li>
          <Link to ="/safety" className='py-2 text-sm'>Safety</Link>
          </li>
          <li>
          <Link to ="/safety" className='py-2 text-sm'>Safety</Link>
          </li>
      </ul>
  </div>
  <div>
      <h6 className='font-lg font-semibold text-white'>Legal</h6>
      <ul className="text-gray-400">
        <li>
          <Link to="/policy" className='py-2 text-sm'>Policy</Link>
          </li>
          <li>
            <Link to ="/terms" className='py-2 text-sm'>Terms</Link>
            </li>
      </ul>
  </div>
    </div>
  </div> */}
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
            <Link to ="/home" className='transition-colors duration-300  hover:text-blue-400'>Home</Link>
            <Link to ="/about" className='transition-colors duration-300  hover:text-blue-400'>About</Link>
            <Link to ="/pro" className='transition-colors duration-300  hover:text-blue-400'>Product</Link>
            <Link to ="/services" className='transition-colors duration-300  hover:text-blue-400'>Services</Link>

            <p to className="text-base font-bold tracking-wide text-white">Products</p>
            <Link to ="/product"className='transition-colors duration-300  hover:text-blue-400'>Healthcare</Link>
            <Link to="/education" className='transition-colors duration-300  hover:text-blue-400'>Education</Link>
            <Link to="/agriculture" className='transition-colors duration-300  hover:text-blue-400'>Agriculture</Link>
            <Link to="/safety">Safety</Link>
        </div>
        <div className="flex flex-col gap-2 text-sm">
            <p className="text-base font-bold tracking-wide text-white">Services</p>
            <Link to ="/home" className='transition-colors duration-300  hover:text-blue-400'>Ser.1</Link>
            <Link to ="/about" className='transition-colors duration-300  hover:text-blue-400'>Ser.2</Link>
            <Link to ="/pro" className='transition-colors duration-300  hover:text-blue-400'>Ser.3</Link>
            <Link to ="/services" className='transition-colors duration-300  hover:text-blue-400'>Ser.4</Link>

            <p class="text-base font-bold tracking-wide text-white">Contacts</p>
            <div class="">
            <p class="mr-1 text-white"> Nano Semic Pvt Ltd, Research & Entrepreneurship Park , C/O<br/>IIT Bhubaneswar, Kansapada<br/> Odisha : 752050</p>
                <p class="mr-1 text-white">Email :
                <Link to="" title="send email" className='hover:text-blue-500'>  nanosemic.official@gmail.com</Link></p>
            </div>
            </div>

    </div>

    <div class="flex flex-col-reverse justify-between pt-5 pb-5 border-t lg:flex-row">
        <p class="text-sm text-white">© Copyright 2024 Company. All rights reserved.</p>
        <ul class="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
                <Link to ="/policy"
                    className="text-sm text-white hover:text-blue-400  transition-colors duration-300 hover:text-deep-purple-accent-400">Policy
                    
                </Link>  &

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
