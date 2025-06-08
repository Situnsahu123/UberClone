import React from "react";

const LocationSearchPanel = (props) => {
  const location = [
    " B-102, Skyline Apartments, Mahakali Caves Road, Andheri East, Mumbai 400093, Maharashtra, India",
    " Flat No. 5, Sea View Residency, Hill Road, Bandra West, Mumbai - 400050, Maharashtra, India",
    "  G-3, Lake Heights Society, Near Hiranandani Gardens, Powai, Mumbai - 400076, Maharashtra, India",
    " 301, Sagar Sadan, Dr. Ambedkar Road, Dadar East, Mumbai - 400014, Maharashtra, India",
    "   Flat No. 12B, Palm Residency, Sector 20, Kharghar, Navi Mumbai -   410210, Maharashtra, India",
  ];

  return (
    <div>
      {location.map(function (located,index) {
        return  <div key={index} onClick={()=>{
          props.setVehiclePanel(true)
          props.setPanelOpen(false)
        }} className="flex border-2 border-gray-50 active:border-black px-3 rounded-xl   items-center justify-start gap-10 my-4 ">
          <h2 className="bg-[#eee] p-2 rounded-full flex items-center gap-4 justify-center  h-10 w-12 ">
            <i className="ri-map-pin-add-line"></i>
          </h2>
          <h4 className=" font-medium">
           {located}
          </h4>
        </div>;
      })}
    </div>
  );
};

export default LocationSearchPanel;
