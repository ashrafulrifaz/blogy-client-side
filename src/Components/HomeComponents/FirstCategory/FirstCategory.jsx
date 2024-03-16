import FirstCard from "./FirstCard";
import { Link } from "react-router-dom";
import usePosts from "../../../Hooks/usePosts";
import FirstCatSkeleton from "../../Skeletons/FirstCatSkeleton";
import SideNav from "../../SideNav/SideNav";

const FirstCategory = () => {
   const {newses, isPending} = usePosts()
   
   return (
      <div className="py-2 md:py-4">         
         <div className="grid grid-cols-3 gap-5">
            <div className="col-span-3 md:col-span-2">
               <div className="flex justify-between items-center">
                  <h3 className="font-medium text-lg md:text-xl underline underline-offset-8 text-blue-500">Latest News</h3>
                  <Link to="/latest" className="font-medium border-2 text-[15px] transition-all border-transparent underline hover:no-underline hover:border-blue-500 rounded-md py-1 px-2">View All</Link>
               </div>
               {
                  isPending ?
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 mt-3 md:mt-6">
                     <FirstCatSkeleton></FirstCatSkeleton>                        
                     <FirstCatSkeleton></FirstCatSkeleton>                        
                     <FirstCatSkeleton></FirstCatSkeleton>                        
                     <FirstCatSkeleton></FirstCatSkeleton>                        
                  </div>
                  :
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 mt-3 md:mt-6">
                     {
                        newses.map((news, idx) => <FirstCard key={idx} news={news}></FirstCard>).slice(6, 10)
                     }
                  </div>
               }
            </div>
            <div className="pl-3 hidden md:block">
               {
                  <SideNav></SideNav>
               }
            </div>
         </div>
      </div>
   );
};

export default FirstCategory;