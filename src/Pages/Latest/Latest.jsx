import { useEffect, useState } from "react";
import BannerCard from "../../Components/HomeComponents/Banner/BannerCard";
import PostCard from "../../Components/PostCard/PostCard";
import SideNav from "../../Components/SideNav/SideNav";
import BannerSkeleton from "../../Components/Skeletons/BannerSkeleton";
import LatestSkeleton2 from "../../Components/Skeletons/LatestSkeleton";
import usePosts from "../../Hooks/usePosts";
import LastCard from "../../Components/HomeComponents/LastCategory/LastCard";

const Latest = () => {
   const {newses, isPending} = usePosts()
   const [currentPage, setCurrentPage] = useState(0)
   const [currentBlog, setCurrentBlog] = useState([])
   const perPageItem = 6
   const lastItemIndex = perPageItem * currentPage;

   useEffect(() => {
      if(currentBlog?.length === 0 && newses?.length > 0){
         setCurrentBlog(newses.slice(0, 11))
      }
   }, [currentBlog, newses])

   const handleMorePosts = (event) => {
      event.preventDefault();
      setCurrentPage((prevPage) => prevPage + 1)
      const newNews =  newses.slice(lastItemIndex, lastItemIndex + perPageItem)
      setCurrentBlog([...currentBlog, ...newNews])
   }

   return (
      <div className="max-w-[90%] mx-auto py-5">
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
         <div className="mt-12 grid grid-cols-3 gap-7">
            {
               isPending ?
               <div className="col-span-2 space-y-5">
                  <LatestSkeleton2></LatestSkeleton2>
                  <LatestSkeleton2></LatestSkeleton2>
                  <LatestSkeleton2></LatestSkeleton2>
                  <LatestSkeleton2></LatestSkeleton2>
               </div>
               :
               <div className="col-span-3 md:col-span-2">
                  <div className="hidden md:block">
                     {
                        lastItemIndex?
                        newses?.map((news, idx) => <PostCard key={idx} news={news}></PostCard>).slice(5, lastItemIndex + 11)
                        :
                        newses?.map((news, idx) => <PostCard key={idx} news={news}></PostCard>).slice(5, 11)
                     }
                  </div>   
                  <div className="block md:hidden">
                     {
                        lastItemIndex?
                        newses?.map((news, idx) => <LastCard key={idx} news={news}></LastCard>).slice(5, lastItemIndex + 11)
                        :
                        newses?.map((news, idx) => <LastCard key={idx} news={news}></LastCard>).slice(5, 11)
                     }
                  </div>   
                  <div className={`${(currentBlog.length <= newses.length) && (newses?.length > 11) ? 'block' : 'hidden'} py-8 text-center`}>
                     <button type="button" onClick={handleMorePosts} className="py-1.5 px-8 bg-blue-500 text-white font-semibold rounded-lg hover:scale-110 transition-all">More</button>  
                  </div>          
               </div>
            }
            <div className="hidden md:block">
               {
                  <SideNav></SideNav>
               }
            </div>
         </div>
      </div>
   );
};

export default Latest;