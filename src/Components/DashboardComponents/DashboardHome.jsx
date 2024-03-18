import { CiFileOn } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";
import { LuUsers2 } from "react-icons/lu";
import useCategories from "../../Hooks/useCategories";
import usePosts from "../../Hooks/usePosts";
import RecentPosts from "./RecentPosts";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import moment from "moment";

const DashboardHome = () => {
   const {newses} = usePosts()
   const {categories} = useCategories()

   const { isPending, data: visitor } = useQuery({
      queryKey: ['visitor'],
      queryFn: async () => {
         const res = await axios.get('https://blogy-server.vercel.app/user-visited')
         return res.data
      }
   })

   const visitorCounts = {};
   visitor?.forEach(subscriber => {
      const month = moment(subscriber.created).format('MMMM');
      visitorCounts[month] = (visitorCounts[month] || 0) + 1;
   });

   const monthsWithData = Object.keys(visitorCounts);

   while (monthsWithData.length < 3) {
      const previousMonth = moment().subtract(monthsWithData.length, 'months').format('MMMM');
      if (!monthsWithData.includes(previousMonth)) {
          monthsWithData.unshift(previousMonth);
      }
   }

   const data = monthsWithData?.map(month => ({
      name: month,
      uv: (visitorCounts[month] / 2) || 0
   }))
   
   return (
      <div className="bg-white rounded-lg p-10">

         <div className="grid grid-cols-4 gap-6">
            <div className="col-span-3">
               <div className="grid grid-cols-3 gap-6">
                  <div className="p-5 rounded-lg bg-blue-200">
                     <CiFileOn className="text-3xl text-blue-600" />
                     <h2 className="mt-5 text-2xl font-semibold">{newses?.length}</h2>
                     <h3 className="mt-1 font-medium text-md">Total Posts</h3>
                  </div>
                  <div className="p-5 rounded-lg bg-indigo-200">
                     <RxDashboard className="text-3xl text-indigo-600" />
                     <h2 className="mt-5 text-2xl font-semibold">{categories?.length}</h2>
                     <h3 className="mt-1 font-medium text-md">Total Categories</h3>
                  </div>
                  <div className="p-5 rounded-lg bg-violet-200">
                     <LuUsers2 className="text-3xl text-violet-600" />
                     <h2 className="mt-5 text-2xl font-semibold">{categories?.length}</h2>
                     <h3 className="mt-1 font-medium text-md">Total Users</h3>
                  </div>
               </div>
               <div className="mt-10">
                  <ResponsiveContainer width="100%" height={380}>
                     <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#3B82F6" fill="#BFDBFE" />
                     </AreaChart>
                  </ResponsiveContainer>
               </div>
            </div>
            <div className="space-y-3">
               <h3 className="font-medium text-xl">Recent Posts</h3>
               {
                  newses?.map(news => (
                     <RecentPosts key={news?._id} news={news}></RecentPosts>
                  )).slice(0, 4)
               }
            </div>
         </div>
      </div>
   );
};

export default DashboardHome;