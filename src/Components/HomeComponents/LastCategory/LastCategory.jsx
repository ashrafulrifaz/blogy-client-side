import { Link } from "react-router-dom";
import LastCard from "./LastCard";
import usePosts from "../../../Hooks/usePosts";
import LastCatSkeleton from "../../Skeletons/LastCatSkeleton";

const LastCategory = () => {
   const {newses, isPending} = usePosts()   
   const sportsNewses = newses?.filter(news => news.category === 'sports')

   return (
      <div className="pt-8 pb-16">         
         <div className="flex justify-between items-center">
            <h3 className="font-medium text-xl underline underline-offset-8 text-blue-500">Sports</h3>
            <Link to="/sports" className="font-medium border-2 text-[15px] transition-all border-transparent underline hover:no-underline hover:border-blue-500 rounded-md py-1 px-2">View All</Link>
         </div>
         {
            isPending ?
            <div className="grid grid-cols-5 gap-4 mt-6">
               <LastCatSkeleton></LastCatSkeleton>
               <LastCatSkeleton></LastCatSkeleton>
               <LastCatSkeleton></LastCatSkeleton>
               <LastCatSkeleton></LastCatSkeleton>
               <LastCatSkeleton></LastCatSkeleton>
            </div>
            :
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-6">
               {
                  sportsNewses.map((news, idx) => <LastCard key={idx} news={news}></LastCard>).slice(0, 10)
               }
            </div>
         }
      </div>
   );
};

export default LastCategory;