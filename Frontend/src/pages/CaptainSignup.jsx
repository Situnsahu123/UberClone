import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "../context/CaptainContext.jsx";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setuserData] = useState({});
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const { captain, setCaptain } = React.useContext(CaptainDataContext);
  
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
   const captainData = ({
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle:{
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    });

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);
    if(response.status === 201){
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token',data.token);
      navigate("/captain-login");
    }

    console.log(response.data);
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
  };

  return (
    <div>
      <div className="p-7 ">
        <img
          className="w-18 mb-7"
          src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
          alt="UberLogo"
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-xl mb-2">What your name</h3>
          <div className="flex gap-2 mb-5 ">
            <input
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-lg font-bold"
              type="text"
              required
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              placeholder="Name"
            />
            <input
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg font-bold"
              type="text"
              required
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              placeholder="Last Name"
            />
          </div>
          <h3 className="text-xl mb-2">what's your email</h3>
          <input
            className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg font-bold"
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            placeholder="Email@email.com"
          />
          <h3 className="text-xl mb-2">Enter your Password</h3>
          <input
            className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg font-bold"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            placeholder="password"
          />
          <h3 className="text-xl mb-2">Vehicle Color</h3>
          <input
            className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg font-bold"
            type="text"
            value={vehicleColor}
            onChange={(e) => setVehicleColor(e.target.value)}
            required
            placeholder="Vehicle Color"
          />

          <h3 className="text-xl mb-2">Vehicle Plate Number</h3>
          <input
            className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg font-bold"
            type="text"
            value={vehiclePlate}
            onChange={(e) => setVehiclePlate(e.target.value)}
            required
            placeholder="Vehicle Plate Number"
          />

          <h3 className="text-xl mb-2">Vehicle Capacity</h3>
          <input
            className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg font-bold"
            type="number"
            value={vehicleCapacity}
            onChange={(e) => setVehicleCapacity(e.target.value)}
            required
            placeholder="Vehicle Capacity"
          />

          <h3 className="text-xl mb-2">Vehicle Type</h3>
          <select
            className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg font-bold"
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            required
          >
            <option value="">Select vehicle type</option>
            <option value="car">Car</option>
            <option value="auto">Auto</option>
            <option value="moto">Moto</option>
          </select>
          <button className="bg-[#111] text-white font-semibold mb-5 rounded px-4 py-2 border w-full text-lg mt-6">
           Create captain account
          </button>
          <p className="text-center">
            Already have an account?
            <Link to={"/captain-login"} className="text-blue-600 ">
             Login
            </Link>
          </p>
        </form>

        <div className="mt-6 text-[10px] text-gray-600 flex w-full justify-center items-center">
          <p>
            By signing up, you agree to our Terms of Service and Privacy Policy.
            We are committed to protecting your personal information and
            ensuring a secure experience. Your data will be handled in
            accordance with applicable privacy laws and regulations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaptainSignup;
