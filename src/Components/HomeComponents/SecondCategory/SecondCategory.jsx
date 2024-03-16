import { Link } from "react-router-dom";
import SecondCard from "./SecondCard";
import usePosts from "../../../Hooks/usePosts";
import SecondCatSkeleton from "../../Skeletons/SecondCatSkeleton";

const SecondCategory = () => {
   const {newses, isPending} = usePosts()   
   const businessNewses = newses?.filter(news => news.category === 'business')

   return (
      <div className="py-2 md:py-4">
         <div className="flex justify-between items-center">
            <h3 className="font-medium text-lg md:text-xl underline underline-offset-8 text-blue-500">Business</h3>
            <Link to="/business" className="font-medium border-2 text-[15px] transition-all border-transparent underline hover:no-underline hover:border-blue-500 rounded-md py-1 px-2">View All</Link>
         </div>
         {
            isPending ? 
            <div className="mt-7 grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4">
               <SecondCatSkeleton></SecondCatSkeleton>
               <SecondCatSkeleton></SecondCatSkeleton>
               <SecondCatSkeleton></SecondCatSkeleton>
               <SecondCatSkeleton></SecondCatSkeleton>
            </div>
            :
            <div className="mt-7 grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4">
               {
                  businessNewses.map((news, idx) => <SecondCard key={idx} news={news}></SecondCard>).slice(0, 4)
               }
            </div>
         }
      </div>
   );
};

export default SecondCategory;