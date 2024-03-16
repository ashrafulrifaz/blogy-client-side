import { CiFileOn } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";
import { LuUsers2 } from "react-icons/lu";
import { PiMagnifyingGlass } from "react-icons/pi";
import useCategories from "../../Hooks/useCategories";
import usePosts from "../../Hooks/usePosts";

const DashboardHome = () => {
   const {newses} = usePosts()
   const {categories} = useCategories()
   
   return (
      <div className="bg-white rounded-lg p-10">

         <div className="grid grid-cols-4 gap-6">
            <div className="p-5 rounded-lg bg-blue-200">
               <CiFileOn className="text-3xl text-blue-600" />
               <h2 className="mt-5 text-2xl font-semibold">{newses?.length}</h2>
               <h3 className="mt-1 font-medium text-md">Total Posts</h3>
            </div>
            <div className="p-5 rounded-lg bg-indigo-200">
               <RxDashboard className="text-3xl text-indigo-600" />
               <h2 className="mt-5 text-2xl font-semibold">{categories?.length}</h2>
               <h3 className="mt-1 font-medium text-md">Total Categories</h3>
            </div>
            <div className="p-5 rounded-lg bg-violet-200">
               <LuUsers2 className="text-3xl text-violet-600" />
               <h2 className="mt-5 text-2xl font-semibold">{categories?.length}</h2>
               <h3 className="mt-1 font-medium text-md">Total Users</h3>
            </div>
            <div className="p-5 rounded-lg bg-fuchsia-200">
               <PiMagnifyingGlass className="text-3xl text-fuchsia-600" />
               <h2 className="mt-5 text-2xl font-semibold">{categories?.length}</h2>
               <h3 className="mt-1 font-medium text-md">Total Visitors</h3>
            </div>
         </div>
      </div>
   );
};

export default DashboardHome;