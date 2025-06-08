import React from "react";
import {Link} from "react-router-dom"

const Riding = () => {
  return (
    <div className="h-screen">
     <Link to='/home' className="fixed h-10 w-10 right-2 top-2  bg-white flex items-center justify-center rounded-full ">
        <i className=" text-xl font-medium  ri-home-2-line"></i>
     </Link>
      <div className="h-1/2">
        <img
          className="w-full h-full object-cover "
          src="https://wallpapercave.com/wp/wp4313180.jpg"
          alt=""
        />
      </div>
      <div className="h-1/2 p-4 ">
        <div className='flex items-center justify-between' > 
         <img className="h-20 "
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt=""
        />
        <div className='text-right '>
          <h2 className='text-lg font-medium'>Situn</h2>
          <h4 className='text-xl font-semibold -mt-1 -mb-1 '>Mh00001</h4>
          <p className='text-sm text-gray-600'>BMW Sclass</p>
        </div>
      </div>
      <div className="flex justify-between flex-col gap-2 items-center  ">
        <div className="w-full mt-5 ">
          <div>
            <div className="flex items-center gap-5  p-3 border-b-2  ">
              <i className="ri-map-pin-user-line"></i>
              <div>
                <h3 className="text-lg font-medium">563/11-a</h3>
                <p className="text-base -mt-1 text-gray-600">Mumbai Wadala </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-5 p-3  ">
              <i className="ri-money-rupee-circle-line"></i>
              <div>
                <h3 className="text-lg font-medium">5435</h3>
                <p className="text-base -mt-1 text-gray-600"> CASH </p>
              </div>
            </div>
          </div>
        </div>
      </div>
        <button className="w-full mt-5  bg-green-600 text-white font-semibold p-2 rounded-lg" >Make A payment </button>
      </div>
    </div>
  );
};

export default Riding;
