import { Link } from "react-router-dom";
import SecondCard from "./SecondCard";
import { useEffect, useState } from "react";
import axios from "axios";

const SecondCategory = () => {
   const [newses, setNewses] = useState([])

   useEffect(() => {
      axios.get(`https://blogy-server.vercel.app/business`)
      .then(data => setNewses(data.data))
   }, [])

   return (
      <div className="py-8">
         <div className="flex justify-between items-center">
            <h3 className="font-medium text-xl underline underline-offset-8 text-blue-500">Business</h3>
            <Link to="/business" className="font-medium border-2 text-[15px] transition-all border-transparent underline hover:no-underline hover:border-blue-500 rounded-md py-1 px-2">View All</Link>
         </div>
         <div className="mt-7 grid grid-cols-4 gap-4">
            {
               newses.map((news, idx) => <SecondCard key={idx} news={news}></SecondCard>).slice(0, 4)
            }
         </div>
      </div>
   );
};

export default SecondCategory;