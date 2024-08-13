// import React from 'react'
// import health from '../assets/health.jpg'
// import agri from '../assets/ag.jpg'
// import safe from '../assets/safe.jpg'
// import edu from '../assets/edu.jpg'
// import ai from '../assets/ai.jpg'
// import selo from '../assets/selo.jpg'
// import { useNavigate } from 'react-router-dom'


// function Pro () {

//  const navigate = useNavigate();


//   return (
//     <>
//     {/* header */}
//     {/* <div className=" bg-ogcolor">
//         <div className="max-w-[1280px] mx-auto ">
//             <div className="grid grid-cols-2">
//             <div className="col-span-1 py-10">
//                 <h1 className="text-white font-bold font-sans text-4xl">
//                     Products
//                     </h1>
//                     <div className="py-5 mt-20">
//                     <p className="text-white font-serif text-md">
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit.<br>
//                         </br>Rerum nisi ea, debitis harum atque reprehenderit
//                         <br></br> quis voluptates at perferendis animi?
//                         Lorem ipsum dolor <br></br>sit amet consectetur,adipisicing
//                         adipisicing elit. Eos, laboriosam.
//                     </p>
//                   </div>
//                   </div>
                  
                  
           
//             <div className="col-span-1 py-5 ">
//                 <img src="" alt="" className="" />
//             </div>
//             </div>
//             </div> 

      
//      </div> */}

// <section className="bg-ogcolor max-h-96">
//     <div className="max-w-[1280px] mx-auto py-10 px-4 sm:px-6 lg:px-8 items-center">
//         <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
//             <div class="">
//                 <h2 className="text-3xl font-semibold text-white sm:text-4xl ">Products</h2>
//                 <p className="mt-10 sm:6  text-white text-md ">
//                     Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br/>
//                      Expedita, necessitatibus quia! Mollitia eligendi corporis <br/>
//                      nesciunt minima. Iusto eaque nesciunt consequuntur! 
//                 </p>
//             </div>
//             <div className="mt-0 md:mt-0">
//                 <img src={ai} alt="About Us Image" className=" w[700px] h [300px]"/>
//             </div>
//         </div>
//     </div>
//     </section>


//     {/* main  */}
//     <div className="">
//         <div className="max-w-[1280px] mx-auto">
            
//             <hr></hr>
//          <h1 className='text-black py-10 pb-0 smp:pb-4 text-4xl fond-bold px-4 sm:px-6 lg:px-8'>
//             Our Products
//          </h1>
//             {/* <h1 className="text-black text-6xl fond-bold hover:italic py-5">
//             Fully Autonomous, Uncompromisingly Sustainable
//             </h1> */} 

//         </div>
//         </div>

//         {/* cards in products */}
//         <div className="py-[100px] -mt-10">
//         <div className="max-w-[1280px] mx-auto grid lg:grid-cols-4 md:grid-col-2 sm:2 gap-8 px-4 sm:px-6 lg:px-8">

//           {/* card-1 */}
//           <div className="shadow-xl max-w-sm rounded overflow-hidden">

            
//                 <img src={health} alt="" className="w-full" />
//                 <div className="px-6 py-4">
//                     <div className="font-bold text-xl mb-2">
//                         Healthcare Products
//                     </div>
//                     <p className="text-gray-700 text-base">
//                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, inventore2
//                     </p>

//                 </div>
//                 <div className=" px-6 py-3">
//                   <button onClick={()=> navigate("/product")} className="bg-gray-900 text-white rounded-full py-0 px-2 hover:cursor-pointer mt-5 text-lg font-semibold">
//                   Explore more</button>
                  
//                 </div>
//                 </div>

//                 {/* cards-2 */}

//                <div className= "shadow-xl max-w-sm rounded overflow-hidden">
//             <img src={edu} alt="" className="w-full" />
//                 <div className="px-6 py-4">
//                     <div className="font-bold text-xl mb-2">
//                         Education Products
//                     </div>
//                     <p className="text-gray-700 text-base">
//                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, inventore2
//                     </p>
//                 </div>
//                 <div className=" px-6 py-3">
//                 <button onClick={()=> navigate("/education")} className="bg-gray-900 text-white rounded-full py-0 px-2 hover:cursor-pointer mt-5 text-lg font-semibold">
//                 Explore more</button>
                  
//                 </div>
//                 </div>

//                 {/* cards-3 */}

//           <div className="shadow-xl  max-w-sm rounded overflow-hidden">

            
//                 <img src={agri} alt="" className="w-full" />
//                 <div className="px-6 py-4">
//                     <div className="font-bold text-xl mb-2">
//                         Agriculture Products
//                     </div>
//                     <p className="text-gray-700 text-base">
//                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, inventore2
//                     </p>
//                 </div>
//                 <div className=" px-6 py-3">
//                 <button onClick={()=> navigate("/agriculture")} className="bg-gray-900 text-white rounded-full py-0 px-2 hover:cursor-pointer mt-5 text-lg font-semibold">
//                 Explore more</button>
                
                  
            
//                 </div>
//                 </div>

//                 {/* cards-4 */}
//           <div className="shadow-2xl max-w-sm rounded overflow-hidden">

            
//                 <img src={safe} alt="" className="w-full" />
//                 <div className="px-6 py-4">
//                     <div className="font-bold text-xl mb-2">
//                         Safety Products
//                     </div>
//                     <p className="text-gray-700 text-base">
//                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, inventore2
//                     </p>
//                 </div>
//                 <div className=" px-6 py-3">
//                 <button onClick={()=> navigate("/safety")} className="bg-gray-900 text-white rounded-full py-0 px-2 hover:cursor-pointer mt-5 text-lg font-semibold">
//                 Explore more</button>
                  
//                 </div>
//                 </div>


          
//           </div>

//         </div>

//         {/* product */}
//         <section class="bg-gray-100">
//     <div class="max-w-[1280px] mx-auto py-16 px-4 sm:px-6 lg:px-8">
//         <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div class="mt-12 md:mt-0">
//                 <img src={selo} alt="About Us Image" className=" w-[500px] h-[400px] object-cover rounded-lg shadow-md"/>
//             </div>
//             <div class="max-w-lg">
//                 <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">Seamless Products</h2>
//                 <p class="mt-4 text-gray-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
//                     eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat.
//                     Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla
//                     malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.</p>
//             </div>



//         </div>
//         </div>
//         </section>






// {/* key features */}
//         <div class="max-w-[1280px] -mt-10 mx-auto py-8 px-4 lg:py-16 lg:px-6">
//     <div class="mb-10">
//         <h2 class="text-4xl tracking-tight font-bold text-primary-800 py-5">Highlighted Features</h2>
//     </div>

//     <div class="flex flex-col md:flex-row">
//         {/* <!-- can help image --> */}
//         <div class="mr-0 md:mr-8 mb-6 md:mb-0">
//             {/* <img className="w-[500px] h-[400px] md:full mx-auto" src={cie} alt="can_help_banner"/> */}
//         </div>
//         {/* <!-- end can help image --> */}

//         <div class="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
//             <div class="w-full sm:w-1/2 mb-4 px-2 ">
//                 <div class="h-full py-4 px-6 border border-gray-500 border-t-0 border-l-0 rounded-br-xl">
//                     <h3 class="text-2xl font-bold text-md mb-6">Feature 1:</h3>
//                     <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto accusamus cupiditate perferendis neque, possimus, nulla sed dicta molestias, harum aliquam nes
//                         ciunt accusantium odio facere delectus voluptatibus ab non praesentium illo?ecommendations that change in real-time.</p>
//                 </div>
//             </div>
//             <div class="w-full sm:w-1/2 mb-4 px-2 ">
//                 <div class="h-full py-4 px-6 border border-gray-500 border-t-0 border-l-0 rounded-br-xl">
//                     <h3 class="text-2xl font-bold text-md mb-6">Feature 2</h3>
//                     <p class="text-sm"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ad similique, sed nemo explicabo 
//                         laudantium autem voluptas ipsum exercitationem dolorem nobis placeat officiis incidunt a accusantium consectetur voluptates 
//                          quasi itaque consequuntur ratione quisquam, natus harum. Eveniet error voluptas quos..</p>
//                 </div>
//             </div>

//             <div class="w-full sm:w-1/2 mb-4 px-2 ">
//                 <div class="h-full py-4 px-6 border border-gray-500 border-t-0 border-l-0 rounded-br-xl">
//                     <h3 class="text-2xl font-bold text-md mb-6">Feature 3</h3>
//                     <p class="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates esse eius provident, unde hic, omnis exercitationem dolores sit voluptate pariatur labore, tempore minima natus ut. Pariatur error odit hic delectus..</p>
//                 </div>
//             </div>

//             <div class="w-full sm:w-1/2 mb-4 px-2 ">
//                 <div class="h-full py-4 px-6 border border-gray-500 border-t-0 border-l-0 rounded-br-xl">
//                     <h3 class="text-2xl font-bold text-md mb-6">Feature 4</h3>
//                     <p class="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat provident quibusdam quo fuga excepturi accusamus fugiat. Illo reprehenderit voluptate dicta inventore dolore placeat necessitatibus quod quas accusantium, repellat debitis corporis?.</p>
//                 </div>
//             </div>


//             <div class="w-full sm:w-1/2 mb-4 px-2 ">
//                 <div class="h-full py-4 px-6 border border-gray-500 border-t-0 border-l-0 rounded-br-xl">
//                     <h3 class="text-2xl font-bold text-md mb-6">Feature 5</h3>
//                     <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta doloremque sed fugiat vitae ex alias voluptatibus, repellendus odit ratione labore.</p>
//                 </div>
//             </div>


//         </div>
//     </div>
// </div>



     
//     </>
//   )
// }

// export default Pro


import React from 'react';
import health from '../assets/health.jpg';
import agri from '../assets/ag.jpg';
import safe from '../assets/safe.jpg';
import edu from '../assets/edu.jpg';
import ai from '../assets/ai.jpg';
import selo from '../assets/selo.jpg';
import { useNavigate } from 'react-router-dom';

function Pro() {
  const navigate = useNavigate();

  return (
    <>
      {/* Header Section */}
      <section className="bg-ogcolor">
        <div className="max-w-[1280px] mx-auto py-10 px-4 sm:px-6 lg:px-8 items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-semibold text-white sm:text-5xl">Products</h2>
              <p className="mt-6 text-white text-md sm:text-2xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, necessitatibus quia! Mollitia eligendi corporis
                nesciunt minima. Iusto eaque nesciunt consequuntur!
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <img src={ai} alt="AI" className="w-full max-w-[600px] h-auto rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="py-10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-black text-4xl font-bold mb-6">Our Products</h1>

          {/* Product Cards */}
          <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
            {/* Card 1 */}
            <div className="shadow-xl rounded-lg overflow-hidden">
              <img src={health} alt="Healthcare Products" className="w-full" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Healthcare Products</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, inventore.
                </p>
              </div>
              <div className="px-6 py-3">
                <button
                  onClick={() => navigate("/product")}
                  className="bg-gray-900 text-white rounded-full py-2 px-4 hover:bg-gray-700 text-lg font-semibold"
                >
                  Explore more
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="shadow-xl rounded-lg overflow-hidden">
              <img src={edu} alt="Education Products" className="w-full" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Education Products</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, inventore.
                </p>
              </div>
              <div className="px-6 py-3">
                <button
                  onClick={() => navigate("/education")}
                  className="bg-gray-900 text-white rounded-full py-2 px-4 hover:bg-gray-700 text-lg font-semibold"
                >
                  Explore more
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="shadow-xl rounded-lg overflow-hidden">
              <img src={agri} alt="Agriculture Products" className="w-full" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Agriculture Products</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, inventore.
                </p>
              </div>
              <div className="px-6 py-3">
                <button
                  onClick={() => navigate("/agriculture")}
                  className="bg-gray-900 text-white rounded-full py-2 px-4 hover:bg-gray-700 text-lg font-semibold"
                >
                  Explore more
                </button>
              </div>
            </div>

            {/* Card 4 */}
            <div className="shadow-xl rounded-lg overflow-hidden">
              <img src={safe} alt="Safety Products" className="w-full" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Safety Products</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, inventore.
                </p>
              </div>
              <div className="px-6 py-3">
                <button
                  onClick={() => navigate("/safety")}
                  className="bg-gray-900 text-white rounded-full py-2 px-4 hover:bg-gray-700 text-lg font-semibold"
                >
                  Explore more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seamless Products Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex justify-center md:justify-start">
              <img src={selo} alt="Seamless Products" className="w-full max-w-[500px] h-auto rounded-lg shadow-md" />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Seamless Products</h2>
              <p className="mt-4 text-gray-600 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
                eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna
                quis elit efficitur consequat. Mauris eleifend velit a pretium iaculis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="max-w-[1280px] mx-auto py-8 px-4 lg:py-16 lg:px-6">
        <div className="mb-10">
          <h2 className="text-4xl tracking-tight font-bold text-primary-800 py-5">Highlighted Features</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="border border-gray-500 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Feature 1:</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto accusamus cupiditate perferendis neque,
              possimus, nulla sed dicta molestias, harum aliquam nesciunt accusantium odio facere delectus.
            </p>
          </div>
          <div className="border border-gray-500 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Feature 2:</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ad similique, sed nemo explicabo laudantium.
            </p>
          </div>
          <div className="border border-gray-500 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Feature 3:</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates esse eius provident, unde hic.
            </p>
          </div>
          <div className="border border-gray-500 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Feature 4:</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat provident quibusdam quo fuga.
            </p>
          </div>
          <div className="border border-gray-500 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Feature 5:</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta doloremque sed fugiat vitae ex alias voluptatibus.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pro;
