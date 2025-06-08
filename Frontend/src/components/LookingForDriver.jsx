import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[95%] absolute top-0 "
        onClick={() => {
         props.setVehicleFound(false);
        }}
      >
        <i className=" text-3xl text-black ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="  text-2xl font-semibold mb-5  ">Looking For A Driver</h3>
      <div className="flex justify-between flex-col gap-2 items-center  ">
        <img className="h-20 "
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt=""
        />
        <div className="w-full mt-5 ">
          <div className="flex items-center gap-5 p-3 border-b-2 "><i className=" text-lg ri-map-pin-2-fill"></i> 
          <div>
            <h3 className="text-lg font-medium">563/11-a</h3>
            <p className="text-base -mt-1 text-gray-600">Mumbai Wadala </p>
          </div>
          </div>
          <div>
             <div className="flex items-center gap-5  p-3 border-b-2  "><i className="ri-map-pin-user-line"></i>
          <div>
            <h3 className="text-lg font-medium">563/11-a</h3>
            <p className="text-base -mt-1 text-gray-600">Mumbai Wadala </p>
          </div>
          </div>
          </div>
          <div>
             <div className="flex items-center gap-5 p-3  "><i className="ri-money-rupee-circle-line"></i>
          <div>
            <h3 className="text-lg font-medium">5435</h3>
            <p className="text-base -mt-1 text-gray-600"> CASH </p>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LookingForDriver