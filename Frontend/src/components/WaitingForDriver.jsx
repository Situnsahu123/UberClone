import React from 'react'

const WaitingForDriver = (props) => {
  return (
     <div>
      <h5
        className="p-1 text-center w-[95%] absolute top-0 "
        onClick={() => {
          props.setwaitingForDriver(false);
        }}
      >
        <i className=" text-3xl text-black ri-arrow-down-wide-fill"></i>

      </h5>  
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
      </div>
    </div>
  )
}

export default WaitingForDriver