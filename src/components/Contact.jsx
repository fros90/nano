import React from 'react'
import contact from '../assets/iit.jpg'
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <>
    <div className="bg-ogcolor min-h-96 ">
      <div className="max-w-[1280px] mx-auto py-5 flex sm:flex-row">
        <div className="basis-[50%] ">
          <h1 className="text-6xl  text-white font-sans py-10">
            Get In touch
          </h1>
          <div className="text-white text-xl mt-28">
            <p className="">
               REACH OUT, SHARE A QUESTION OR PROVIDE
               <br/> FEEDBACK ON OUR PRODUCTS. <br/>
              FILL OUT THE FORM AND WE’LL<br/> RESPOND AS SOON AS POSSIBLE.</p>
          </div>

        </div>

        <div className= "basis-50% ">
          <img src={contact} alt="" className=" w-[700px] h-[400px]" />
        </div>
      </div>

    </div>

    {/* <div className="max-w-[1280px] mx-auto ">
      <div className="py-20">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.6277278554217!2d85.67171847500651!3d20.149572781288732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19adf474fd646f%3A0x6362bd4580ab753f!2sNano%20Semic!5e0!3m2!1sen!2sin!4v1719481516053!5m2!1sen!2sin" width="600" height="450" allowFullScreen Loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>


      </div> */}
      {/* map section */}
      <section class="bg-white">
    <div class="max-w-[1280px] mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div class="mt-16 lg:mt-20">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="rounded-lg overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.6277278554217!2d85.67171847500651!3d20.149572781288732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19adf474fd646f%3A0x6362bd4580ab753f!2sNano%20Semic!5e0!3m2!1sen!2sin!4v1719481516053!5m2!1sen!2sin"
                        width="100%" height="480" allowFullscreen="" Loading="lazy"></iframe>
                </div>
                <div>
                    <div class="max-w-full mx-auto rounded-lg overflow-hidden">
                        <div class="px-6 py-4">
                            <h3 class="text-2xl font-bold text-gray-900"> Address</h3>
                            <p class="mt-1 text-gray-600">Nano Semic Pvt Ltd,<br />Research & Entrepreneurship Park , C/O<br/>IIT Bhubaneswar, Kansapada<br/> Odisha : 752050</p>
                        </div>
                        <div class="border-t border-gray-200 px-6 py-4">
                            <h3 class="text-xl font-medium text-gray-900">Hours</h3>
                            <p class="mt-1 text-gray-600">Monday - Friday: 9am - 6pm</p>
                            <p class="mt-1 text-gray-600">Saturday: 9am - 4pm</p>
                            <p class="mt-1 text-gray-600">Sunday: Closed</p>
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>



     
{/* how to contact  */}
    <div className="bg-gray-100 h-60 rounded-xl shadow-xl">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-black">
          <h1 className="text-xl font-serif mt-10 py-10 pb-10 sm:px-2 md:px-2">
            How you can contact to us.
            <ol className="text-black text-md font-serif text-sm mt-5 list-disc list-inside sm:px-2">
              <li>Via Email : nanosemic.official@gmail.com </li>
              <li>Via Phone :+911002002999
              </li>
              <li>Via LinkedIn:
                <FaLinkedinIn size={(20)} className= " hover:text-blue-500"/>

              </li>
  
              
              
            </ol>
          </h1>
        </div>
      </div>
    </div>
    
    </>
      
    
  )
}

export default Contact
