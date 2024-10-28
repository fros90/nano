import React from 'react'
import doctor from '../assets/doctor.jpg'
import blood from '../assets/blood.jpg'

const Product = () => {
  return (
    <>
     <div className=" bg-ogcolor h-96">
        <div className="max-w-[1280px] mx-auto px-4 ">
            <div className="grid grid-cols-2">
            <div className="col-span-1 py-10">
                <h1 className="text-white font-sans text-4xl">
                    Heathcare Prodcuts
                    </h1>
                    <div className="py-5 mt-28">
                    <p className="text-white font-serif text-md">
                        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.<br>
                        </br>Rerum nisi ea, debitis harum atque reprehenderit
                        <br></br> quis voluptates at perferendis animi?
                        Lorem ipsum dolor <br></br>sit amet consectetur,adipisicing
                        adipisicing elit. Eos, laboriosam. */}
                    </p>
                  </div>
                  </div>
                  
                  
           
            <div className="col-span-1 py-5 ">
                <img src={doctor} alt="" className="" />
            </div>
            </div>
            </div> 

      
     </div>
    <div className="max-w-[1280px] mx-auto">
        <div className="text-center py-10">
            <h1 className="text-black font-sans text-4xl">
            Leading-Edge Semiconductors for<br></br>
             Cutting-Edge Healthcare Devices
            </h1>
        </div>
    </div>


    {/* cards  */}


    <div className="py-[100px] -mt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2  gap-5">
           
           
            {/* card-1 */}
            <div className="max-w-sm rounded overflow-hidden shadow-xl">
                <img src={blood} alt="" className="w-full" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                        Blood Pressure
                    </div>
                    <p className="text-gray-700 text-base">
                        {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, inventore2 */}
                    </p>
                </div>
            </div>


            {/* card-2 */}
            <div className="max-w-sm rounded overflow-hidden shadow-xl">
                <img src={blood} alt="" className="w-full" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                        Blood pressure

                    </div>
                    <p className="text-gray-700 text-base">
                        {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, inventore2 */}
                    </p>
                </div>
            </div>


            {/* card-3 */}
            <div className="max-w-sm rounded-md overflow-hidden shadow-xl">
                <img src={blood} alt="" className="w-full" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                        Blood Pressure
                    </div>
                    <p className="text-gray-700 text-base">
                        {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, inventore2 */}
                    </p>
                </div>
                </div>

                
            {/* card-4 */}
            <div className="max-w-sm rounded overflow-hidden shadow-xl">
                <img src={blood} alt="" className="w-full" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                        Blood Pressure
                    </div>
                    <p className="text-gray-700 text-base">
                        {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, inventore2 */}
                    </p>
                </div>
                </div>
        </div>
    </div>
    
    </>
  )
}

export default Product
