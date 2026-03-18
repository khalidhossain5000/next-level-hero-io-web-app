import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import { Outlet, useNavigation } from "react-router";
import GlobalSpinner from "../components/Loading/GlobalSpinner/GlobalSpinner";
import WelcomeLoader from "../components/Loading/WelcomeLoader/WelcomeLoader";

const RootLayout = () => {
  const navigation = useNavigation();
  const [welcomeLoader, setWelcomeLoader] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setWelcomeLoader(false);
        }, 500);
        return () => clearTimeout(timer)
    }, [])

    // {welcomeLoader && <GlobalSpinner/>}

    if(welcomeLoader) return <WelcomeLoader/>
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        {navigation.state === "loading" && <GlobalSpinner />}
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
