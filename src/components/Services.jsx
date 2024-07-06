import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/our-service.jpg'
function Services() {
const navigate=useNavigate();

  return (
    <>
    {/* <div className="min-h-96">
    <h1 className="text-4xl text-black font-extrabold hover:cursor-pointer hover:text-red-800 duration-100 text-center py-10 ">
        WE ARE UNDER-MAINTENANCE <br>
        </br> SOON YOU WILL BE ABLE TO SEE THE PAGE
    </h1>
    <button onClick={()=>navigate('/login')} className="bg-blue-400 item-center rounded-xl animate-bounce focus:animate-none hover:animate-none hover:cursor-pointer hover:bg-slate-200 hover:text-black text-white font-semibold text-center py-2 px-2 ">
        Loading...
    </button>
    </div> */}
    
    {/* <div className="bg-black text-white py-10 ">
    <footer class="max-w-[1280px] mx-auto px-3 pt-4 lg:px-9">
    <div class="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">

        <div class="sm:col-span-2">
            <a href="#" class="inline-flex items-center">
                <img src={logo} alt="logo" class="h-8 w-8"/>
                <span class="ml-2 text-xl font-bold tracking-wide text-white">nanosemic</span>
            </a>
            <div class="mt-6 lg:max-w-xl">
                <p class="text-sm text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi felis mi, faucibus dignissim lorem
                    id, imperdiet interdum mauris. Vestibulum ultrices sed libero non porta. Vivamus malesuada urna eu
                    nibh malesuada, non finibus massa laoreet. Nunc nisi velit, feugiat a semper quis, pulvinar id
                    libero. Vivamus mi diam, consectetur non orci ut, tincidunt pretium justo. In vehicula porta
                    molestie. Suspendisse potenti. 
                    </p>
            </div>
        </div>
       


        <div class="flex flex-col gap-2 text-sm">
            <p class="text-base font-bold tracking-wide text-white">Popular Courses</p>
            <a href="#">UPSC - Union Public Service Commission</a>
            <a href="#">General Knowledge</a>
            <a href="#">MBA</a>
            <p class="text-base font-bold tracking-wide text-white">Popular Topics</p>
            <a href="#">Human Resource Management</a>
            <a href="#">Operations Management</a>
            <a href="#">Marketing Management</a>
        </div>


        <div>
            <p class="text-base font-bold tracking-wide text-white">COMPANY IS ALSO AVAILABLE ON</p>
            <div class="flex items-center gap-1 px-2">
                <a href="#" class="w-full min-w-xl">
                    <img src="https://mcqmate.com/public/images/icons/playstore.svg" alt="Playstore Button"
                        class="h-10"/>
                </a>
                <a class="w-full min-w-xl" href="https://www.youtube.com/channel/UCo8tEi6SrGFP8XG9O0ljFgA">
                    <img src="https://mcqmate.com/public/images/icons/youtube.svg" alt="Youtube Button"
                        class="h-28"/>
                </a>
            </div>
            <p class="text-base font-bold tracking-wide text-white">Contacts</p>
            <div class="">
            <p class="mr-1 text-white">IIT bhuvneshwar</p>
                <p class="mr-1 text-white">Email :
                <a href="#" title="send email">  nanosemic.official@gmail.com</a></p>
            </div>
        </div>

    </div>

    <div class="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p class="text-sm text-gray-600">© Copyright 2023 Company. All rights reserved.</p>
        <ul class="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
                <a href="#"
                    class="text-sm text-white  transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy
                    &amp; Terms and Condition
                </a>
            </li>
            <li>
                <a href="#"
                    class="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400">Disclaimer
                </a>
            </li>
        </ul>
    </div>

</footer>
</div>


<a href=""
    className="animate-bounce focus:animate-none hover:animate-none inline-flex text-md font-medium bg-indigo-900 mt-3 px-4 py-2 rounded-lg tracking-wide text-white">
    <span class="ml-2">Bouncing Button </span>
</a>

 */}
 {/* servies header  */}
 <div className=" bg-ogcolor">
        <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-2">
            <div className="col-span-1 py-10">
                <h1 className="text-white font-bold font-sans text-4xl">
                    Services
                    </h1>
                    <div className="py-5 mt-20">
                    <p className="text-white font-serif text-md">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br>
                        </br>Rerum nisi ea, debitis harum atque reprehenderit
                        <br></br> quis voluptates at perferendis animi?
                        Lorem ipsum dolor <br></br>sit amet consectetur,adipisicing
                        adipisicing elit. Eos, laboriosam.
                    </p>
                  </div>
                  </div>
                  
                  
           
            <div className="col-span-1 py-5 ">
                <img src="" alt="" className="" />
            </div>
            </div>
            </div> 

      
     </div>



 {/* cards in products */}
 <div className="py-[100px] -mt-10">
        <div className="max-w-[1280px] mx-auto grid grid-cols-3 gap-8">

          {/* card-1 */}
          <div className="shadow-xl max-w-sm rounded overflow-hidden">

            
                <img src={logo} alt="" className="w-full" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                        Services
                    </div>
                    <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, inventore2
                    </p>

                </div>
                <div className=" px-6 py-3">
                  <button onClick={()=> navigate("/product")} className="bg-gray-900 text-white rounded-full py-0 px-2 hover:cursor-pointer mt-5 text-lg font-semibold">
                  Explore more</button>
                  
                </div>
                </div>

                {/* cards-2 */}

               <div className="shadow-xl "shadow-xl max-w-sm rounded overflow-hidden>
            <img src={logo} alt="" className="w-full" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                        Servies.1
                    </div>
                    <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, inventore2
                    </p>
                </div>
                <div className=" px-6 py-3">
                <button onClick={()=> navigate("/education")} className="bg-gray-900 text-white rounded-full py-0 px-2 hover:cursor-pointer mt-5 text-lg font-semibold">
                Explore more</button>
                  
                </div>
                </div>

                {/* cards-3 */}

          <div className="shadow-xl  max-w-sm rounded overflow-hidden">

            
                <img src={logo} alt="" className="w-full" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                        Services.2
                    </div>
                    <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, inventore2
                    </p>
                </div>
                <div className=" px-6 py-3">
                <button onClick={()=> navigate("/agriculture")} className="bg-gray-900 text-white rounded-full py-0 px-2 hover:cursor-pointer mt-5 text-lg font-semibold">
                Explore more</button>
                
                  
            
                </div>
                </div>

                {/* cards-4 */}
          <div className="shadow-2xl max-w-sm rounded overflow-hidden">

            
                <img src={logo}lt="" className="w-full" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                        Services.3
                    </div>
                    <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, inventore2
                    </p>
                </div>
                <div className=" px-6 py-3">
                <button onClick={()=> navigate("/safety")} className="bg-gray-900 text-white rounded-full py-0 px-2 hover:cursor-pointer mt-5 text-lg font-semibold">
                Explore more</button>
                  
                </div>
                </div>


          
          </div>

        </div>

        <section class="bg-gray-100">
    <div class="max-w-[1280px] mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div class="max-w-lg">
                <h2 class="text-3xl font-semibold text-gray-900 sm:text-4xl ">Overview</h2>
                <p class="mt-4 text-gray-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
                    eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat.
                    Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla
                    malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore in eum iusto, mollitia dolores nemo praesentium ut? Laboriosam, necessitatibus ducimus..</p>
                
            </div>
            <div class="mt-12 md:mt-0">
                <img src="" alt="servies image" class="object-cover rounded-lg shadow-md"/>
            </div>
        </div>
    </div>
</section>

      
    </>
  )
}

export default Services

