import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function Layout() {
  return (
    <div className="d-flex flex-column">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
