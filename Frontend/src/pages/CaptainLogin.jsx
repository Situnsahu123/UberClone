import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "../context/CaptainContext";

const Captainlogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [CaptainData, setCaptainData] = useState({});
  const { captain, setCaptain } = React.useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const captain = {
      email: email,
      password: password,
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/login`,
      captain
    );
    if (response.status === 200) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between ">
      <div>
        <img
          className="w-18 mb-7"
          src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
          alt="UberLogo"
        />
        <form onSubmit={submitHandler}>
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
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg mt-6">
            Login
          </button>

          <p className="text-center">
            New to uber
            <Link to={"/captain-signup"} className="text-blue-600 ">
              Create new acount
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to={"/login"}
          className="bg-[#133a01] text-white flex items-center justify-center font-semibold mb-7 rounded px-4 py-2 border w-full text-lg "
        >
          Sign in as a User
        </Link>
      </div>
    </div>
  );
};

export default Captainlogin;
