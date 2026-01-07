import React from 'react'
import image from "../Assessts/vinay_pht.jpg"

const Aboutme = () => {
  return (
    <div className='flex bg-black min-h-screen justify-center items-center' >
    
        <div className="flex justify-center items-center  w-1/2 mb-20">
        <img
          src={image}
          alt="Vinay"
          className="w-72 h-72 rounded-full object-cover border-1 border-orange-400"
          />
      </div>

        {/* Content Section */}
        <div className="w-1/2 px-2 py-3 border-2 border-orange-500 rounded-md text-white mb-20 ">
          <h1>About Me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Qui veniam voluptates repellendus mollitia quasi.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Qui veniam voluptates repellendus mollitia quasi.
            Qui veniam voluptates repellendus mollitia quasi.
            Qui veniam voluptates repellendus mollitia quasi.
            Qui veniam voluptates repellendus mollitia quasi.
            Qui veniam voluptates repellendus mollitia quasi.
            Qui veniam voluptates repellendus mollitia quasi.
          </p>
        </div>
    </div>
  )
}

export default Aboutme
