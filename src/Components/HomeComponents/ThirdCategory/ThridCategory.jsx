import { Link } from "react-router-dom";
import ThirdCard from "./ThirdCard";
import ThirdLeftCard from "./ThirdLeftCard";
import usePosts from "../../../Hooks/usePosts";
import FirstCatSkeleton from "../../Skeletons/FirstCatSkeleton";
import ThirdCatSkeleton from "../../Skeletons/ThirdCatSkeleton";

const ThridCategory = () => {
   const {newses, isPending} = usePosts()   
   const techNewses = newses?.filter(news => news.category === 'tech')
   const worldNewses = newses?.filter(news => news.category === 'world')

   return (
      <div className="py-8">         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
               <div className="flex justify-between items-center">
                  <h3 className="font-medium text-xl underline underline-offset-8 text-blue-500">Tech</h3>
                  <Link to="/tech" className="font-medium border-2 text-[15px] transition-all border-transparent underline hover:no-underline hover:border-blue-500 rounded-md py-1 px-2">View All</Link>
               </div>
               {
                  isPending ? 
                  <div className="mt-5 space-y-5">
                     <ThirdCatSkeleton></ThirdCatSkeleton>
                     <ThirdCatSkeleton></ThirdCatSkeleton>
                     <ThirdCatSkeleton></ThirdCatSkeleton>
                     <ThirdCatSkeleton></ThirdCatSkeleton>
                  </div>
                  :
                  <div>
                     {
                        techNewses.map((news, idx) => <ThirdLeftCard key={idx} news={news}></ThirdLeftCard>).slice(0, 4)
                     }
                  </div>
               }
            </div>
            <div className="col-span-2">
               <div className="flex justify-between items-center">
                  <h3 className="font-medium text-xl underline underline-offset-8 text-blue-500">World</h3>
                  <Link to="/world" className="font-medium border-2 text-[15px] transition-all border-transparent underline hover:no-underline hover:border-blue-500 rounded-md py-1 px-2">View All</Link>
               </div>
               {
                  isPending ? 
                  <div className="mt-7 grid grid-cols-2 gap-6">
                     <FirstCatSkeleton></FirstCatSkeleton>
                     <FirstCatSkeleton></FirstCatSkeleton>
                     <FirstCatSkeleton></FirstCatSkeleton>
                     <FirstCatSkeleton></FirstCatSkeleton>
                  </div>
                  :
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 mt-2 md:mt-5">
                     {
                        worldNewses.map((news, idx) => <ThirdCard key={idx} news={news}></ThirdCard>).slice(0, 4)
                     }
                  </div>
               }
            </div>
         </div>
      </div>
   );
};

export default ThridCategory;