import React from "react";
import Navs from "../layouts/Navs";
import Carousels from "../layouts/Carousels";
import Footers from "../layouts/Footers";
import Content from "../layouts/Content";

const LandingPage = () => {
  return (
    <>
      <Navs />
      <Carousels />
      <Content />
      <Footers />
    </>
  );
};

export default LandingPage;
