import { useLoaderData } from "react-router-dom";
import SideNav from "../../Components/HomeComponents/FirstCategory/SideNav";
import Facebook from '../../assets/Facebook.png'
import Twitter from '../../assets/Twitter.png'
import Instagram from '../../assets/Instagram.png'
import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";
import ThirdLeftCard from "../../Components/HomeComponents/ThirdCategory/ThirdLeftCard";
import SecondCard from "../../Components/HomeComponents/SecondCategory/SecondCard";

const PostDetails = () => {
   const {newses} = useContext(AuthContext)
   const news = useLoaderData()
   const {title, category, image, post} = news

   return (
      <div className="max-w-[83%] mx-auto py-10" id="post_details">
         <div className="grid grid-cols-3 gap-5">
            <div className="col-span-2 space-y-6">
               <h2 className="text-5xl font-semibold">{title}</h2>
               <div className="flex items-center justify-between">
                  <p className="text-xl font-medium text-blue-500">{category}</p>
                  <div className="flex gap-3">
                     <h3 className="font-medium">Share on</h3>
                     <a href="#">
                        <img src={Facebook} alt="Facebook" />
                     </a>
                     <a href="#">
                        <img src={Twitter} alt="Facebook" />
                     </a>
                     <a href="#">
                        <img src={Instagram} alt="Facebook" />
                     </a>
                  </div>
               </div>
               <img src={image} className="w-full h-auto rounded-md" alt="" />
               <div>
                  <p className="text-lg text-slate-600">{post}</p>
               </div>
               <div>
                  <h2 className="text-lg text-primary font-medium mb-3">Similar Posts</h2>
                  <div className="grid grid-cols-3 gap-3">
                     {
                        newses.map((news, idx) => <SecondCard key={idx} news={news}></SecondCard>).slice(0, 3)
                     }
                  </div>
               </div>
            </div>   
            <div className="space-y-3 pl-4">
               <div>
                  {
                     <SideNav></SideNav>
                  }
               </div>
               <div>
                  <h2 className="text-lg text-primary font-medium">Popular Posts</h2>
                     {
                        newses.map((news, idx) => <ThirdLeftCard key={idx} news={news}></ThirdLeftCard>).slice(0, 4)
                     }
               </div>
            </div>
         </div>         
      </div>
   );
};

export default PostDetails;