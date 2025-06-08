import React from 'react'

const CaptainDetail = () => {
  return (
    <div> 
        <div className="h-2/5 p-6 ">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-3 ">
            <img className="h-10 w-10  rounded-full object-cover" src="https://tse3.mm.bing.net/th?id=OIP.LMDYVr3p0LP3b2enfFs7YAHaE7&pid=Api&P=0&h=180" alt="" />
          <h4 className="text-lg font-medium  ">Sardar Ji</h4>
          </div>
          <div>
            <h4 className="text-xl font-semibold">₹5000.50</h4>
            <p className="text-sm text-gray-600">Earned</p>
          </div>
        </div>
        <div className="flex justify-center gap-5 items-start p-3 bg-gray-100 rouned-xl mt-6 ">
          <div className="text-center  ">
            <i className=" text-4xl mb-2 font-extralight ri-timer-2-line"></i>
            <h5 className="text-lg font-medium ">10.2</h5>
            <p className=" text-sm text-gray-600 ">Hours Online</p>
          </div>
          <div className="text-center">
            <i className=" text-4xl mb-2 font-extralight ri-speed-up-fill"></i>
             <h5 className=" text-lg font-medium "> 10.2</h5>
            <p className=" text-sm text-gray-600">Hours Online</p>
          </div>
          <div className="text-center">
            <i className=" text-4xl mb-2 font-extralight ri-booklet-line"></i>
             <h5 className="text-lg font-medium ">10.2</h5>
            <p className=" text-sm text-gray-600">Hours Online</p>
          </div>
        </div>
      </div>
 </div>
  )
}

export default CaptainDetail