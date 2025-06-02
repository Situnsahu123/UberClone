import React, { useState } from "react";
import { Link } from "react-router-dom";

function UserLogin() {
const[email, setEmail] = useState("");
const[password, setPassword] = useState("");
const [userData , setuserData] = useState({});
const submitHandler = (e) =>{
  e.preventDefault();
  setuserData({
    email: email,
    password: password
  })
  console.log(userData);
  setEmail("");
  setPassword("");
}

  return (
    <div className="p-7 h-screen flex flex-col justify-between ">
     <div>
       <img className="w-18 mb-7" src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="UberLogo" />
      <form onSubmit={submitHandler}>
        <h3 className="text-xl mb-2">what's your email</h3>
        <input
          className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg font-bold"
          type="text"
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
          required
          placeholder="Email@email.com"
        />
        <h3 className="text-xl mb-2">Enter your Password</h3>
        <input
          className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg font-bold"
          type="password"
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
          required
          placeholder="password"
        />
        <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg mt-6">
          Login
        </button>

        <p className="text-center">New to uber <Link to={"/signup"} className="text-blue-600 "> Create new acount</Link></p>
      </form>
     </div>
     <div>
      <Link to={"/captain-login"}  className="bg-[#9ccb0f] text-black flex items-center justify-center font-semibold mb-7 rounded px-4 py-2 border w-full text-lg ">Sign in as a captain</Link>
     </div>
    </div> 
  );
}

export default UserLogin;
