import React  from "react";
import {useState , useRef} from "react";
import {useGSAP} from '@gsap/react'
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home = () => {

const [pickup,setpickup] = useState();
const [destination,setDestination] = useState();
const [panelOpen, setPanelOpen] = useState(false);
const panelRef = useRef(null);
const panelCloseRef = useRef(null);

const submitHandler = (e) =>{
  e.preventDefault();
  
}

useGSAP(() =>{
 if(panelOpen){
   gsap.to(panelRef.current, {
    height:'70%',
    duration: 0.5,
    opacity:0.5,
    padding:24
  })
  gsap.to(panelCloseRef.current,{
    opacity: 0.5,

  })
 }else{
   gsap.to(panelRef.current, {
    height:'0%',
    opacity:0,
    padding:0,
  })
    gsap.to(panelCloseRef.current,{
    opacity:0,
 })
 }
},[panelOpen])

  return (
    <div className="h-screen relative">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div className="h-screen w-screen ">
        <img
          className="w-full h-full "
          src="https://wallpapercave.com/wp/wp4313180.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-end  h-screen absolute top-0 w-full ">
        <div className="h-[30%] p-6 bg-white relative  ">
          <h5 ref={panelCloseRef} onClick={() =>{
            setPanelOpen(false);
          }} className=" absolute right-6 top-6 text-2xl   ">
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-3xl font-semibold  ">Find Trip</h4>
          <form noSubmit={(e) =>{
            submitHandler(e);
          }} >
            <input
              className="bg-[#eee] px-8 py-2 text-base rounded-lg w-full mt-5"
              onClick={() =>{
                setPanelOpen(true)
              }}
              type="text"
              placeholder="Add Your Pickup Location"
              value={pickup}
              onChange={(e)=>{
                setpickup(e.target.value);
              }}
            />
            <input
              className="bg-[#eee] px-8 py-2 text-base rounded-lg w-full mt-3"
               onClick={() =>{
                setPanelOpen(true)
              }}
              type="text"
              placeholder="Enter Your Destination"
               value={destination}
              onChange={(e)=>{
                setDestination(e.target.value);
              }}
            />
          </form>
        </div>
        <div  ref={panelRef} className=" h-0 bg-white ">
           <LocationSearchPanel />
        </div>
      </div>



    </div>
  );
};

export default Home
