import BannerCard from "./BannerCard";
import usePosts from '../../../Hooks/usePosts'
import BannerSkeleton from "../../Skeletons/BannerSkeleton";

const Banner = () => {
   const {newses, isPending} = usePosts()

   return (
      <div className="py-6 min-h-[85vh]">
         {
            isPending ? 
            <BannerSkeleton></BannerSkeleton>
            :
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
               {
                  newses?.map((news, idx) => <BannerCard key={idx} news={news}></BannerCard>).slice(0, 5)
               }
            </div>
         }
      </div>
   );
};

export default Banner;