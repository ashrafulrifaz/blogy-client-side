import { useLoaderData } from "react-router-dom";
import BannerCard from "../../Components/HomeComponents/Banner/BannerCard";
import SideNav from "../../Components/HomeComponents/FirstCategory/SideNav";
import PostCard from "../../Components/PostCard/PostCard";


const CategoryPages = () => {
   const loadedData = useLoaderData()
   const categoryData = [...loadedData].reverse()
   
   return (
      <div className="max-w-[83%] mx-auto py-7">
         {
            categoryData.length > 0 ? 
            <div className="grid grid-cols-3 gap-5">
               {
                  categoryData && categoryData.map((news, idx) => <BannerCard key={idx} news={news}></BannerCard>)
               }
            </div> :
            <h2 className="text-center capitalize font-semibold text-3xl my-10">no post available in this category</h2>
         }
         {
            categoryData.length > 5 && 
            <div className="mt-12 grid grid-cols-3 gap-7">
               <div className="col-span-2">
                  {
                     categoryData && categoryData.map((news, idx) => <PostCard key={idx} news={news}></PostCard>).slice(6)
                  }
               </div>
               <div>
                  {
                     <SideNav></SideNav>
                  }
               </div>
            </div>
         }         
      </div>
   );
};

export default CategoryPages;