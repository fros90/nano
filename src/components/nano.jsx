import React from 'react'
import image from '../assets/viso.jpg'
import { useNavigate } from 'react-router-dom'



function Nano() {
  
  const navigate= useNavigate();


  return (
    <>
    <div className="bg-black h-96 ">
      <div className="max-w-[1280px] mx-auto grid grid-cols-2 ">
      <div className="">
        <p className="text-white col-span-1 mt-20 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>
           Quidem numquam ducimus maxime et officiis,<br></br> nam laborum 
           perferendis cum suscipit?<br></br> Natus? Lorem ipsum dolor sit amet consectetur<br></br>
            adipisicing elit Optio odio autem accusantium provide <br></br>cupiditate incidunt. Minus repellat cumque expedita<br></br>
            error illum rem excepturi, laudantium <br>
            </br>ipsum aliquam quis tenetur distinctio!.
              </p>
              <button onClick={()=> navigate ("/agriculture")}  className='bg-white text-black  rounded-full py-2 px-4 hover:cursor-pointer mt-8 text-lg font-semibold'>
                Read more
              </button>
            </div>
            
            
          
            <div className=" mt-20 col-span-1 alig">
              <img src={image} alt="" className="w-[442px] h-60" />
            </div>
            </div>
            </div>

            
      
      
     
    </>
  )
}

export default Nano
