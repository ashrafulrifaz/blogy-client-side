import { useContext } from "react";
import FirstCard from "./FirstCard";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/Provider";
import SideNav from "./SideNav";

const FirstCategory = () => {
   const {newses} = useContext(AuthContext)
   
   return (
      <div className="py-8">         
         <div className="grid grid-cols-3 gap-5">
            <div className="col-span-2">
               <div className="flex justify-between items-center">
                  <h3 className="font-medium text-xl underline underline-offset-8 text-blue-500">Latest News</h3>
                  <Link to="/latest" className="font-medium border-2 text-[15px] transition-all border-transparent underline hover:no-underline hover:border-blue-500 rounded-md py-1 px-2">View All</Link>
               </div>
               <div className="grid grid-cols-2 gap-6 mt-6">
                  {
                     newses.map((news, idx) => <FirstCard key={idx} news={news}></FirstCard>).slice(6, 10)
                  }
               </div>
            </div>
            <div className="pl-3">
               {
                  <SideNav></SideNav>
               }
            </div>
         </div>
      </div>
   );
};

export default FirstCategory;