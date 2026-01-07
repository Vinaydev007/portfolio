import React from "react";
import image from "../Assessts/vinay_pht.jpg";

const Home = () => {
  return (
    <div className="bg-black flex min-h-screen items-center">
      
      {/* Left Content */}
      <div className="flex flex-col justify-between px-8 py-6 gap-4 w-1/2 mb-20">
        <h2 className="text-white text-lg">Hi, I am</h2>
        <h2 className="text-orange-500 text-2xl font-semibold">
          Vinay Bairavarapu
        </h2>
        <h1 className="text-white text-4xl font-bold">
          MERN STACK 
        </h1>
        <h1 className="text-white text-4xl font-bold m-auto">
          DEVELOPER
        </h1>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          qui.
        </p>
        <button className="bg-orange-300 hover:bg-orange-700 text-white px-6 py-2 rounded w-fit">
          HIRE ME
        </button>
      </div>

      {/* Right Image */}
      <div className="flex items-center justify-center w-1/2 mb-20">
        <img
          src={image}
          alt="Vinay"
          className="w-72 h-72 object-cover rounded-full border-1 border-blue-500"
        />
      </div>

    </div>
  );
};

export default Home;
