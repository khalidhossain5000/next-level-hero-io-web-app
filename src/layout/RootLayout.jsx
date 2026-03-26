import React, { Suspense, useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import { Outlet, useNavigation } from "react-router";
import GlobalSpinner from "../components/Loading/GlobalSpinner/GlobalSpinner";
import WelcomeLoader from "../components/Loading/WelcomeLoader/WelcomeLoader";
import Footer from "../components/Footer/Footer";

const RootLayout = () => {
  const navigation = useNavigation();
  const [welcomeLoader, setWelcomeLoader] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setWelcomeLoader(false);
        }, 500);
        return () => clearTimeout(timer)
    }, [])

 

    if(welcomeLoader) return <WelcomeLoader/>

    if(navigation.state==="loading") return <GlobalSpinner />
  return (
  
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
 
  );
};

export default RootLayout;
