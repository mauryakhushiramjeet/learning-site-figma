import React from "react";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();
  console.log(location.pathname);
  const isHomeLocation = location.pathname;

  return (
    <>
      <Navbar isHome={isHomeLocation} />
      <main>
        <Outlet />
      </main>
      <Footer/>
      
    </>
  );
};

export default Layout;
