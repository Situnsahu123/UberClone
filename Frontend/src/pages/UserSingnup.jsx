import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function UserSingnup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setuserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setuserData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });
    console.log(userData);
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
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
          <button className="bg-[#111] text-white font-semibold mb-5 rounded px-4 py-2 border w-full text-lg mt-6">
            Login
          </button>
          <p className="text-center">
            Already have an account?{" "}
            <Link to={"/login"} className="text-blue-600 ">
              login here
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
}

export default UserSingnup;
