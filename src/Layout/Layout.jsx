import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
const date = new Date()


const Layout = () => {
   const [isHeaderFixed, setIsHeaderFixed] = useState(false);
   const isDataPosted = useRef(false);

   useEffect(() => {

      if (!isDataPosted.current) {
         axios.post('http://localhost:5000/user-visited', {
             visitedTime: date
         })
     }

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