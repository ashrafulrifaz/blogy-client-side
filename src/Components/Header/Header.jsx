import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";
import Bar from '../../assets/bars-staggered.png'
import Close from '../../assets/times-hexagon.png'
import moment from "moment/moment";

const Header = () => {
   const {user, signOutUser} = useContext(AuthContext)
   const [showProfile, setShowProfile] = useState(false)
   const [showSideNav, setShowSideNav] = useState(false)

   const handleSignOut = () => {
      signOutUser()
   }

   return (
      <div className="shadow">
         <div className={`grid grid-cols-6 absolute w-full h-screen z-10 transition-all ${showSideNav ? 'block': 'hidden'}`}>
            <div className="col-span-1 bg-white p-10 pt-5 pr-3">
               <div className="flex justify-end">
                  <img onClick={() => setShowSideNav(false)} src={Close} className="w-6 cursor-pointer" alt="x" />
               </div>
               <h2 className="text-3xl font-semibold">Blogy</h2>
               <ul className="grid gap-3 font-medium mt-5">
                  <li>
                     <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                     <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                     <NavLink to="/terms">Terms & Conditions</NavLink>
                  </li>
                  <li>
                     <NavLink to="/privary">Privacy Policy</NavLink>
                  </li>
                  {
                     user ?                     
                     <li>
                        <button onClick={handleSignOut} className="py-1.5 bg-blue-500 text-white font-semibold rounded-lg hover:scale-110 transition-all text-sm w-full">Log Out</button>
                     </li>
                     :
                     <li>
                        <Link to="/login">
                           <button className="py-1.5 w-full bg-blue-500 text-white font-semibold rounded-lg hover:scale-110 transition-all">Login</button>
                        </Link>
                        <Link to="/register">
                           <button className="py-1.5 w-full bg-blue-500 text-white font-semibold rounded-lg hover:scale-110 transition-all mt-4">Sign Up</button>
                        </Link>
                     </li>
                  }
               </ul>
            </div>
            <div className="bg-[rgba(0,0,0,0.6)] col-span-5">

            </div>
         </div>
         <div className="max-w-[83%] mx-auto py-4" id="header">
            <div className="grid grid-cols-3 justify-between items-center">
               <div className="flex">
                  <img onClick={() => setShowSideNav(true)} src={Bar} className="w-5 cursor-pointer" alt="x" />
                  <h3 className="ml-3">{moment().format("dddd, MMMM DD, YYYY")}</h3>
               </div>                        
               <div>
                  <Link to="/">
                     <h1 className="font-bold text-2xl text-center">Blogy</h1>
                  </Link>
               </div>
               <div className="flex justify-end">
                  {
                     user ? 
                     <a onClick={() => setShowProfile(!showProfile)} className="cursor-pointer relative">
                        <img src="https://i.ibb.co/717bgy7/alexander-hipp-i-EEBWg-Y-6l-A-unsplash.jpg" className="w-8 h-8 rounded-full" alt="Pic" />
                        <div className={`z-10 mt-1 p-5 drop-shadow-lg rounded-lg absolute right-0 border border-blue-300 bg-white w-36 space-y-2 ${showProfile ? 'block' : 'hidden'}`}>
                           <p className="font-medium hover:text-blue-500">Profile</p>
                           <hr />
                           <button onClick={handleSignOut} className="py-1.5 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:scale-110 transition-all text-sm">Log Out</button>
                        </div>
                     </a>
                     : 
                     <div className="flex gap-5">
                        <Link to="/login">
                           <button className="py-1.5 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:scale-110 transition-all">Login</button>
                        </Link>
                     </div>
                  }
               </div>
            </div>
         </div>
      </div>
   );
};

export default Header;