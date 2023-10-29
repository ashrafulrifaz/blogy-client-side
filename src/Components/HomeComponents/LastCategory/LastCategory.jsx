import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LastCard from "./LastCard";
import Ads1 from '../../../assets/ads-1.gif'
import Ads2 from '../../../assets/ads-2.jpg'
import axios from "axios";

const LastCategory = () => {
   const [sportsNews, setSportsNews] = useState([])
   const [FirstAdd, setFirstAdd] = useState(false)
   const [SecondAdd, setSecondAdd] = useState(false)

   useEffect(() => {
      axios.get('https://blogy-server.vercel.app/sports')
      .then(data => setSportsNews(data.data))
   }, [])

   return (
      <div className="pt-8 pb-16">
         <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
            <div className="flex justify-between items-center">
                  <h3 className="font-medium text-xl underline underline-offset-8 text-blue-500">Sports</h3>
                  <Link to="/sports" className="font-medium border-2 text-[15px] transition-all border-transparent underline hover:no-underline hover:border-blue-500 rounded-md py-1 px-2">View All</Link>
               </div>
               <div className="grid grid-cols-3 gap-6 mt-6">
                  {
                     sportsNews.map((news, idx) => <LastCard key={idx} news={news}></LastCard>).slice(0, 5)
                  }
               </div>
            </div>
            <div className="px-2">
               <div className={`relative ${FirstAdd ? 'hidden': 'block'}`}>
                  <img src={Ads1} className="w-full h-auto" alt="ads" />
                  <span onClick={() => setFirstAdd(true)} className="bg-gray-300 cursor-pointer text-sm font-medium absolute top-0 right-0 px-1.5 py-0.5">X</span>
               </div>
               <div className={`relative mt-5 ${SecondAdd ? 'hidden': 'block'}`}>
                  <img src={Ads2} className="w-full h-auto" alt="ads" />
                  <span onClick={() => setSecondAdd(true)} className="bg-gray-300 cursor-pointer text-sm font-medium absolute top-0 right-0 px-1.5 py-0.5">X</span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default LastCategory;