import { useContext } from "react";
import BannerCard from "./BannerCard";
import { AuthContext } from "../../../Provider/Provider";

const Banner = () => {
   const {newses} = useContext(AuthContext)

   return (
      <div className="py-12 min-h-[85vh]">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
               newses.map((news, idx) => <BannerCard key={idx} news={news}></BannerCard>).slice(0, 5)
            }
         </div>
      </div>
   );
};

export default Banner;