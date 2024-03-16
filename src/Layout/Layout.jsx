import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { useEffect, useState } from "react";


const Layout = () => {
   const [isHeaderFixed, setIsHeaderFixed] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
        setIsHeaderFixed(window.scrollY > 65);
      };
    
      window.addEventListener('scroll', handleScroll);
    
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

   return (
      <div>
         <Header></Header>
         <Navbar isHeaderFixed={isHeaderFixed}></Navbar>
         <div className={`${isHeaderFixed ? 'mt-12' : 'mt-0'}`}>
            <Outlet></Outlet>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default Layout;