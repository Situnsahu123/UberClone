import React from "react";

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[95%] absolute top-0 "
        onClick={() => {
          props.setVehiclePanel(false);
        }}
      >
        <i className=" text-3xl text-black ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="  text-2xl font-semibold mb-5  ">Choose a vehicle </h3>

      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.setVehiclePanel(false);
        }}
        className="flex border-2 border-gray-100 active:border-black cursor-pointer  rounded-xl items-center justify-between w-full p-3 mb-2"
      >
        <img
          className="h-20 min-h-10"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt="car"
        />
        <div className=" -ml-2 w-1/2 ">
          <h4 className="font-medium text-lg">
            UberGO
            <span className="">
              <i className="ri-map-pin-user-fill">4</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm ">2 min away</h5>
          <p className=" font-normal text-sm text-gray-600">
            Affordable , compact rides
          </p>
        </div>
        <h2 className="text-xl font-semibold ">₹196.55</h2>
      </div>

      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
           props.setVehiclePanel(false);
        }}
        className="flex border-2 border-gray-100 active:border-black cursor-pointer rounded-xl items-center justify-between w-full p-3 mb-2"
      >
        <img
          className="h-20 min-h-10"
          src="https://tse2.mm.bing.net/th?id=OIP.QUyYFHFvu4SQDeHKL-UmRAHaHa&pid=Api&P=0&h=180"
          alt="bike"
        />
        <div className=" -ml-2 w-1/2 ">
          <h4 className="font-medium text-lg">
            MotoGO
            <span className="">
              <i className="ri-map-pin-user-fill">1</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm ">3 min away</h5>
          <p className=" font-normal text-sm text-gray-600">
            Affordable motercycle rides
          </p>
        </div>
        <h2 className="text-xl font-semibold ">₹96.55</h2>
      </div>

      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.setVehiclePanel(false);
        }}
        className="flex border-2 border-gray-100 active:border-black cursor-pointer rounded-xl items-center justify-between w-full p-3 mb-2"
      >
        <img
          className="h-20 min-h-10"
          src="https://tse4.mm.bing.net/th?id=OIP.gERohywpalGF3NjolmHt5wHaE7&pid=Api&P=0&h=180"
          alt="auto"
        />
        <div className=" -ml-2 w-1/2 ">
          <h4 className="font-medium text-lg">
            AutoGO
            <span className="">
              <i className="ri-map-pin-user-fill">2 to 3</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm ">10 min away</h5>
          <p className=" font-normal text-sm text-gray-600">
            Affordable motercycle rides
          </p>
        </div>
        <h2 className="text-xl font-semibold ">₹596.55</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
