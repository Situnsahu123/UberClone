import React from "react";
import { Route, Routes } from "react-router-dom";
import FrontPage from "./pages/FrontPage";
import UserLogin from "./pages/UserLogin";
import UserSingnup from "./pages/UserSingnup";
import Captainlogin from "./pages/Captainlogin";
import CaptainSignup from "./pages/CaptainSignup";
import Home from "./pages/Home";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";
import UserLogout from "./pages/UserLogout";
import CaptainHome from "./pages/CaptainHome";
import CaptainProtectedWrapper from "./pages/CaptainProtectedWrapper ";
import Riding from "./pages/Riding";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FrontPage/>} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/riding" element={<Riding />} />
        <Route path="/signup" element={<UserSingnup />} />
        <Route path="/captain-login" element={<Captainlogin />} />
         <Route path="/captain-signup" element={ <CaptainSignup /> } />
         <Route path="/home" element={
          <UserProtectedWrapper>
            <Home/>
          </UserProtectedWrapper>
         } />
         <Route path="/user/logout" element={<UserProtectedWrapper>
          <UserLogout/>
         </UserProtectedWrapper>}/>
         <Route path="/captain-home" element={
          <CaptainProtectedWrapper>
            <CaptainHome/>
          </CaptainProtectedWrapper>
         } />
      </Routes>
    </div>
  );
};

export default App;
