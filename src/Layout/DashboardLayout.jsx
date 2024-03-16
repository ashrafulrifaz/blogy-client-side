import { Outlet } from "react-router-dom";
import Sidebar from "../Components/DashboardComponents/Sidebar";

const Layout = () => {
   return (
      <div className="flex bg-slate-100">
         <Sidebar></Sidebar>
         <div className="p-10 w-10/12">
            <Outlet></Outlet>
         </div>
      </div>
   );
};

export default Layout;