import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router";

const RootLayout = () => {
  return <div>
    <header>
        <NavBar/>
    </header>
    <main>
      <Outlet/>
    </main>
  </div>;
};

export default RootLayout;
