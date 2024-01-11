import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/login/LoginPage";
import Events from "../components/events/Events";
import Wishlist from "../components/wishlist/Wishlist";
import Performers from "../components/performers/Performers";
import Registration from "../pages/register/Register";
import Venue from "../components/venue/Venue";
import LandingPage from "../pages/LandingPage";


const IndexRoute = () => {
  return (
    <React.Fragment>
        <Routes>
          <Route exact path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/event" element={<Events />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/performer" element={<Performers />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
    </React.Fragment>
  );
};

export default IndexRoute;
