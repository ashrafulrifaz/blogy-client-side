import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faHouse, faList, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import exit from '../../assets/exit.png'
import { AuthContext } from "../../Provider/Provider";

const Sidebar = () => {
   const {user, signOutUser} = useContext(AuthContext)

   const handleLogOut = () => {
      signOutUser()
   }

   return (
      <div id="sidebar" className="p-5 bg-white h-screen w-2/12 sticky overflow-hidden flex flex-col justify-between">
         <div>
            <Link to="/">
               <h2 className="font-mono font-bold text-3xl">BLOGY</h2>
            </Link>
            <ul className="mt-8 space-y-2" id="dashboard_item">
               <li className="relative transition-all">
                  <NavLink to='home' className="font-medium flex items-center gap-3 rounded-lg px-3 py-2 hover:text-white hover:bg-blue-500 text-[#000000b3]">
                     <FontAwesomeIcon icon={faHouse} />
                     <span>Dashboard</span>
                  </NavLink>
               </li>
               <li className="relative transition-all">
                  <NavLink to='posts' className="font-medium flex items-center gap-3 rounded-lg px-3 py-2 hover:text-white hover:bg-blue-500 text-[#000000b3]">
                     <FontAwesomeIcon icon={faCopy} />
                     <span>Posts</span>
                  </NavLink>
               </li>
               <li className="relative transition-all">
                  <NavLink to='new-post' className="font-medium flex items-center gap-3 rounded-lg px-3 py-2 hover:text-white hover:bg-blue-500 text-[#000000b3]">
                     <FontAwesomeIcon icon={faFolderOpen} />
                     <span>New Post</span>
                  </NavLink>
               </li>
               <li className="relative transition-all">
                  <NavLink to='category' className="font-medium flex items-center gap-3 rounded-lg px-3 py-2 hover:text-white hover:bg-blue-500 text-[#000000b3]">
                     <FontAwesomeIcon icon={faList} />
                     <span>Category</span>
                  </NavLink>
               </li>
               <li className="relative transition-all">
                  <NavLink to='users' className="font-medium flex items-center gap-3 rounded-lg px-3 py-2 hover:text-white hover:bg-blue-500 text-[#000000b3]">
                     <FontAwesomeIcon icon={faUser} />
                     <span>Users</span>
                  </NavLink>
               </li>
            </ul>
         </div>
         <div>
            <div className="flex justify-between items-center">
               <img src={user?.photoURL} className="w-10 h-10 rounded-full" alt="" />
               <img onClick={() => handleLogOut()} src={exit} className="w-5 h-5 cursor-pointer" alt="" />
            </div>
         </div>
      </div>
   );
};

export default Sidebar;