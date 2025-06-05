import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CaptainProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
 
  console.log(token);

  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
    }
  }, [token]);
  
 
  return <>{children}</>;
};

export default CaptainProtectedWrapper;
