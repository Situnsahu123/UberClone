import React from "react";
import { Link } from "react-router-dom";
import CaptainDetail from "../components/CaptainDetail";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState,useRef } from "react";

const CaptainHome = () => {
  const [ridePopupPanel, setridePopupPanel] = useState(true)
  const RidePopupPenalRef = useRef(null)

   useGSAP(
    function () {
      if (ridePopupPanel) {
        gsap.to(RidePopupPenalRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(RidePopupPenalRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ridePopupPanel]
  );


  return (
    <div className="h-screen w-full">
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img
          className="w-16 "
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <Link
          to="/login"
          className="h-10 w-10 bg-white flex items-center justify-center rounded-full "
        >
          <i className=" text-xl font-medium   ri-logout-box-line"></i>
        </Link>
      </div>
      <div className="h-3/5">
        <img
          className="w-full h-full object-cover "
          src="https://wallpapercave.com/wp/wp4313180.jpg"
          alt=""
        />
      </div>
      <div className="h-2/5 p-6 ">
        <CaptainDetail />
      </div>
       <div ref={RidePopupPenalRef} className="fixed z-10 bottom-0 bg-white w-full  py-6 px-3 pt-12  ">
       <RidePopUp setridePopupPanel={setridePopupPanel} />
      </div>
    </div>
  );
};

export default CaptainHome;
