import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";
import BannerCard from "../../Components/HomeComponents/Banner/BannerCard";
import SideNav from "../../Components/HomeComponents/FirstCategory/SideNav";
import PostCard from "../../Components/PostCard/PostCard";

const Latest = () => {
   const {newses} = useContext(AuthContext)

   return (
      <div className="max-w-[83%] mx-auto py-5">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
               newses.map((news, idx) => <BannerCard key={idx} news={news}></BannerCard>).slice(0, 5)
            }
         </div>
         <div className="mt-12 grid grid-cols-3 gap-7">
            <div className="col-span-2">
               {
                  newses.map((news, idx) => <PostCard key={idx} news={news}></PostCard>).slice(6)
               }
            </div>
            <div>
               {
                  <SideNav></SideNav>
               }
            </div>
         </div>
      </div>
   );
};

export default Latest;