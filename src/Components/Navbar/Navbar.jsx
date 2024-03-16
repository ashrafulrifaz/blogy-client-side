import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import useCategories from "../../Hooks/useCategories";
import NavItemsSkeleton from '../Skeletons/NavItemsSkeleton';

const Navbar = ({isHeaderFixed}) => {
   const {categories, isPending} = useCategories()

   return (
      <div className={`transition-all duration-500 flex bg-white justify-center py-3 border-b border-gray-200 ${isHeaderFixed ? 'fixed top-0 left-0 w-full z-10 shadow-lg py-4' : 'static'}`} id="header">
         {
            isPending ? 
            <NavItemsSkeleton></NavItemsSkeleton>
            :
            <ul className="flex gap-8">
               <li>
                  <NavLink onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})} to="/">Home</NavLink>
               </li>
               <li>
                  <NavLink onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})} to="/latest">Latest</NavLink>
               </li>
               {
                  categories?.map(category => (
                     <li key={category._id}>
                        <NavLink onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})} to={`/${category.slag}`} className="capitalize">{category.name}</NavLink>
                     </li>
                  )).slice(0, 10)
               }
            </ul>
         }
      </div>
   );
};

Navbar.propTypes = {
   isHeaderFixed: PropTypes.object
}

export default Navbar;