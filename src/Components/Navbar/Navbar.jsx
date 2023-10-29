import { NavLink } from "react-router-dom";

const Navbar = () => {
   return (
      <div className="flex justify-center py-3 border-b border-gray-200" id="header">
         <ul className="flex gap-8">
            <li>
               <NavLink to="/">Home</NavLink>
            </li>
            <li>
               <NavLink to="/latest">Latest</NavLink>
            </li>
            <li>
               <NavLink to="/business">Business</NavLink>
            </li>
            <li>
               <NavLink to="/sports">Sports</NavLink>
            </li>
            <li>
               <NavLink to="/entertainment">Entertainment</NavLink>
            </li>
            <li>
               <NavLink to="/tech">Tech</NavLink>
            </li>
            <li>
               <NavLink to="/lifestyle">Life & Living</NavLink>
            </li>
            <li>
               <NavLink to="/world">World</NavLink>
            </li>
         </ul>
      </div>
   );
};

export default Navbar;