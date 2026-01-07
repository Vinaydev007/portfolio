import React from 'react'
import "../../App.css"

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 flex justify-between bg-black  items-center px-4 py-2">
      
      <div className="text-white text-xl font-bold">
        Vinay Bairavarapu
      </div>

      <ul className="flex gap-6 text-white items-center">
        <li><a href="#" className="hover:text-orange-400">Home</a></li>
        <li><a href="#" className="hover:text-orange-400">About Me</a></li>
        <li><a href="#" className="hover:text-orange-400">Skills</a></li>
        <li><a href="#" className="hover:text-orange-400">Projects</a></li>
        <li><a href="#" className="hover:text-orange-400">Contact Me</a></li>
        <button className="bg-orange-600 rounded-4 px-4 py-2">Download CV</button>
      </ul>

    </div>
  )
}

export default Navbar
