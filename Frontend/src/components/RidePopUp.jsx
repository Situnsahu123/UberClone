import React from "react";
import { Link } from "react-router-dom";

const RidePopUp = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[95%] absolute top-0 "
        onClick={() => {
         props.setridePopupPanel(false)
        }}
      >
        <i className=" text-3xl text-black ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="  text-2xl font-semibold mb-5  "> A New Ride Avalable </h3>
      <div className="flex items-center justify-between p-3 bg-yellow-400 mt-4 rounded-lg ">
        <div className="flex items-center gap-3 mt-3">
            <img  className="h-12 w-12 rounded-full object-cover " src="https://tse3.mm.bing.net/th?id=OIP.LMDYVr3p0LP3b2enfFs7YAHaE7&pid=Api&P=0&h=180" alt="" />
            <h2 className="text-lg font-medium ">Harsh Patel</h2>
        </div>
        <h5 className="text-lg font-semibold ">2.2 km </h5>
      </div>
      <div className="flex justify-between flex-col gap-2 items-center  ">
        <div className="w-full mt-5 ">
          <div className="flex items-center gap-5 p-3 border-b-2 ">
            <i className=" text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">563/11-a</h3>
              <p className="text-base -mt-1 text-gray-600">Mumbai Wadala </p>
            </div>
          </div>
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

        <button className="w-full mt-5  bg-green-600 text-white font-semibold p-2 rounded-lg">
          ConFirm
        </button>

        <button 
        onClick={()=>{
            props.setridePopupPanel(false)
        }}
        className="w-full mt-2  bg-gray-300 text-gray-700 font-semibold p-2 rounded-lg">
          Ignore
        </button>
      </div>
    </div>
  );
};

export default RidePopUp;
