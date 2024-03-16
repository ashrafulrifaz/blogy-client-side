import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";
import { FaBarsStaggered } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import Drawer from "./Drawer";
import useSearch from "../../Hooks/useSearch";

const Header = () => {
   const {user, signOutUser, showSearchDiv, searchedPosts} = useContext(AuthContext)
   const [showProfile, setShowProfile] = useState(false)
   const [openDrawer, setOpenDrawer] = useState(false)
   const {handleSearch, handleSearchPosts, showSearch, setShowSearch, activeSearch} = useSearch()
   const searchRef = useRef(null);

   const handleSignOut = () => {
      signOutUser()
   }

   useEffect(() => {
      const handleClickOutside = (event) => {
         if (searchRef?.current && !searchRef?.current?.contains(event.target)) {
            setShowSearch(true);
         } else {
         setShowSearch(false);
         }
      };

      document.addEventListener('mousedown', handleClickOutside);
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

   return (
      <div className="border-b border-slate-300">
         <div className="max-w-[90%] mx-auto py-4" id="header">
            <div className="grid grid-cols-2 justify-between items-center">                
               <div className="w-2/5">
                  <Link to="/">
                     <h2 className="font-mono font-bold text-3xl">BLOGY</h2>
                  </Link>
               </div>      
               <div className="flex gap-3 items-center justify-end">                  
                  <div className="flex items-center justify-end gap-2 w-full relative">
                     <form onSubmit={(e) => handleSearch(e)} className={`transition-all duration-500 w-full ${showSearch ? 'w-0' : 'w-full'}`} ref={searchRef}>
                        <div className={`flex justify-between items-center border rounded-md ${showSearch ? 'border-transparent border-0' : 'border-gray-400'}`}>
                           <input onChange={(e) => handleSearchPosts(e)} type="text" name="search" className={`w-0  rounded-md py-1 px-3 focus:outline-none ${showSearch ? 'w-0' : 'w-full'} transition-all duration-500`} placeholder="Type to search...." />
                           <button className={`${activeSearch ? 'pointer-events-auto' : 'pointer-events-none'}`}  onClick={() => {
                              setShowSearch(false)
                              }}>
                              <IoIosSearch className={`${!showSearch ? 'opacity-100' : 'opacity-0'} text-2xl text-white bg-blue-500 cursor-pointer py-0.5 px-1 rounded-md mr-1 transition-all duration-300`} title="Click to Search" />
                           </button>
                        </div>
                     </form>

                     {/* Search Result */}
                     <div className={`${showSearchDiv && !showSearch ? 'block' : 'hidden'} bg-white border border-gray-400 rounded-lg px-4 z-10 absolute top-10 w-full max-h-[85vh]`}>
                        {
                           searchedPosts?.length > 0 ?
                           searchedPosts?.map(post => (
                              <Link key={post._id} to={`/${post.category}/${post._id}`} onClick={() => setShowSearch(false)}>
                                 <h2 className="searched_posts">{post.title}</h2>
                              </Link>
                           )).slice(0, 5)
                           :
                           <h2 className="font-medium py-5 text-center">No Post Found</h2>
                        }
                     </div>

                     <MdCancel className={`text-2xl text-red-500 cursor-pointer ${!showSearch ? 'block' : 'hidden'}`} title="Click to Search" onClick={() => setShowSearch(true)} />
                     <IoIosSearch className={`text-2xl text-blue-500 cursor-pointer ${showSearch ? 'block' : 'hidden'}`} title="Click to Search" onClick={() => setShowSearch(false)} />
                  </div>
                  {
                     user ? 
                     <div onClick={() => setShowProfile(!showProfile)} className="dropdown relative">
                        <img tabIndex={0} src={user?.photoURL} role="button" className="w-10 h-8 rounded-full" alt="Pic" />
                        <ul tabIndex={0} className={`space-y-2 dropdown-content z-[1] menu p-4 absolute right-0 border border-blue-300 shadow bg-base-100 rounded-box w-40`}>
                           <p className="font-medium hover:text-blue-500 text-base">{user?.displayName}</p>
                           <button onClick={handleSignOut} className="py-1.5 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:scale-110 transition-all text-sm">Log Out</button>
                        </ul>
                     </div>
                     : 
                     <div className="flex gap-5">
                        <Link to="/login">
                           <button className="py-1.5 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:scale-110 transition-all">Login</button>
                        </Link>
                     </div>
                  }
                  <div className="drawer">
                     <input id="my-drawer" type="checkbox" className="drawer-toggle" checked={openDrawer} />
                     <div className="drawer-content">
                        <label htmlFor="my-drawer">
                           <FaBarsStaggered className="text-2xl cursor-pointer" onClick={() => setOpenDrawer(true)} />
                        </label>
                     </div> 
                     <Drawer setOpenDrawer={setOpenDrawer}></Drawer>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Header;