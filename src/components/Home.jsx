import React from 'react'
import nano from '../assets/nano.jpg'
import { useNavigate } from 'react-router-dom'
import Vision from './Vis'
import Nano from './nano'
import Why from './why'
import Download from './Download'
import doc from '../assets/doctor.jpg'
import yes from '../assets/yes.webp'
import cpu from '../assets/cpu.jpg'
import { Link } from 'react-router-dom'

function Home () {
  const navigate = useNavigate()


  return (
    <>
    <div className='bg-ogcolor w-full min-h-[640px]'>
      <div div className="max-w-[1280px] mx-auto grid grid-cols-2">
        <div className= "">
        <h1 className="text-white text-8xl text-left mt-10">
          nanosemic</h1>
          <h3 className="text-white text-xl font-semibold -mt-2 mx-40">
            Where pricision meets possibilities
          </h3>
        <p className="text-white mt-20 tracking-normal">Welcome to namosemic, your trusted partner in the<br>
        </br> semiconductor industry. Our focus on innovation,<br>
        </br>quality, and customer satisfaction sets us apart from <br></br>
        the competition, and we are dedicated to delivering <br>
         </br>the best possible solutions to meet your needs.<br>
         </br> Our experienced team is always available to answer<br>
         </br> your questions and provide expert advice, and<br>
         </br> we look forward to working with you to help <br>
         </br>you achieve your goals.




           </p>
        
          <button onclick ={()=>navigate ("/about")}className='bg-white text-black rounded-full py-2 px-4 hover:cursor-pointer mt-5 text-lg font-semibold'>Lean more</button>
        </div>
        
      
      <div className="mt-36">
        <img src={nano} alt="" className="" />
      </div>
      </div>
      </div>
      <Vision/>
      <Nano/>
      <div class="max-w-[1280px] mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div class="mt-12 md:mt-0">
                <img src={yes} alt="About Us Image" class="object-cover rounded-lg shadow-md"/>
                <div className="">
                  <h1 className="text-black font-serif text-2xl fond-bold py-2">
                    Products
                  </h1>
                  <p className="text-black">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, molestiae repellat
                     est quae non a delectus fugit quisquam odio quibusdam dolorum.
                      Fuga id ut quae delectus eum! Hic, earum blanditiis.

                  </p>
                </div>
                <div class="mt-8">
                    <Link to="/pro" class="text-ogcolor hover:text-blue-500 font-medium">Learn more
                        <span class="ml-2">&#8594;</span></Link>
                </div>
            </div>
            


            <div class="mt-12 md:mt-0">
                <img src={yes} alt="About Us Image" class="object-cover rounded-lg shadow-md"/>
                <div className="">
                  <h1 className="font-serif text-2xl fond-bold py-2">
                    Services
                  </h1>
                  <p className="text-black">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, molestiae repellat
                     est quae non a delectus fugit quisquam odio quibusdam dolorum.
                      Fuga id ut quae delectus eum! Hic, earum blanditiis.

                  </p>
                </div>
                <div class="mt-8">
                    <Link to="/services" class="text-ogcolor hover:text-blue-500 font-medium">Learn more
                        <span class="ml-2">&#8594;</span></Link>
                </div>
          

          
           </div>





          </div>

        </div>










      {/* senors */}
      <section class="bg-gray-100">
    <div class="max-w-[1280px] mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div class="max-w-lg">
                <h2 class="text-3xl font-semibold text-gray-900 sm:text-4xl ">Semiconductors</h2>
                <p class="mt-4 text-gray-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
                    eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat.
                    Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla
                    malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore in eum iusto, mollitia dolores nemo praesentium ut? Laboriosam, necessitatibus ducimus..</p>
                
            </div>
            <div class="mt-12 md:mt-0">
                <img src={cpu} alt="About Us Image" class="object-cover rounded-lg shadow-md"/>
            </div>
        </div>
    </div>
</section>
      <Why/>
      <Download/>
      </>
      
  
  )
}

export default Home
