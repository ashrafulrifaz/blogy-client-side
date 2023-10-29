import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ThirdCard from "./ThirdCard";
import ThirdLeftCard from "./ThirdLeftCard";
import axios from "axios";

const ThridCategory = () => {
   const [techNews, setTechNews] = useState([])
   const [worldNews, setWorldNews] = useState([])

   useEffect(() => {
      axios.get('https://blogy-server.vercel.app/tech')
      .then(data => setTechNews(data.data))

      axios.get('https://blogy-server.vercel.app/world')
      .then(data => setWorldNews(data.data))
   }, [])

   return (
      <div className="py-8">         
         <div className="grid grid-cols-3 gap-8">
            <div>
               <div className="flex justify-between items-center">
                  <h3 className="font-medium text-xl underline underline-offset-8 text-blue-500">Tech</h3>
                  <Link to="/tech" className="font-medium border-2 text-[15px] transition-all border-transparent underline hover:no-underline hover:border-blue-500 rounded-md py-1 px-2">View All</Link>
               </div>
               <div>
                  {
                     techNews.map((news, idx) => <ThirdLeftCard key={idx} news={news}></ThirdLeftCard>).slice(0, 4)
                  }
               </div>
            </div>
            <div className="col-span-2">
               <div className="flex justify-between items-center">
                  <h3 className="font-medium text-xl underline underline-offset-8 text-blue-500">World</h3>
                  <Link to="/world" className="font-medium border-2 text-[15px] transition-all border-transparent underline hover:no-underline hover:border-blue-500 rounded-md py-1 px-2">View All</Link>
               </div>
               <div className="grid grid-cols-2 gap-6 mt-5">
                  {
                     worldNews.map((news, idx) => <ThirdCard key={idx} news={news}></ThirdCard>).slice(0, 4)
                  }
               </div>
            </div>
         </div>
      </div>
   );
};

export default ThridCategory;