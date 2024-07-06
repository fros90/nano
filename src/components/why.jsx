import React from 'react'
import Gold from '../assets/gold.jpg'

const why = () => {
  return (
    <>
    {/* why nano intro */}
     <div className="bg-black min-h-96">
        <div className="max-w-[1280px] mx-auto">
            
            
         <h1 className='text-white text-[20px] py-20 underline'>
            Why nanosemic
        </h1>
            <h1 className="text-white text-6xl -mt-10 fond-bold hover:italic">
            A Different Approach, Using a New Method of Manufacturing 
           World of Sensor</h1>

        </div>
        </div>

        {/* why info */}


        <div className="bg-black py-10 -mt-10">
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 bottom-border border-yellow-400 ">
          <div className="col-span-1 text-white mt-10">
            <img src={Gold} alt="" className="" />
            </div>

            <div className="col-span-1 text-white mt-10">
            <p className="text-md tracking-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Nemo nisi vitae sint,
               laboriosam quibusdam soluta amet minus quis neque
                veritatis! Lorem ipsum dolo
               r sit amet consectetur adipisicing 
               elit. Facere, velit?
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, nam!
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eum placeat fugiat eligendi officiis sit atque in nam, ipsam ex?
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium illo aspernatur dignissimos suscipit rem blanditiis reprehenderit! Architecto eum sapiente velit tempora dolor, doloremque amet quo praesentium, rerum, animi officia. Sint dignissimos nesciunt odit, magnam exercitationem quam necessitatibus consectetur error aut.
            </p>
          </div>

        </div>
        </div>




        
    </>
  )
}

export default why
