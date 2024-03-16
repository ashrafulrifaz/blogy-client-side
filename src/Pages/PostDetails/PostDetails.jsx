import { useLocation, useParams } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ThirdLeftCard from "../../Components/HomeComponents/ThirdCategory/ThirdLeftCard";
import usePosts from "../../Hooks/usePosts";
import LastCard from "../../Components/HomeComponents/LastCategory/LastCard";
import LastCatSkeleton from "../../Components/Skeletons/LastCatSkeleton";
import ThirdCatSkeleton from "../../Components/Skeletons/ThirdCatSkeleton";
import SideNav from "../../Components/SideNav/SideNav";

const PostDetails = () => {
   const {category: thisCategory, id} = useParams()
   const {posts, isPending} = usePosts()
   const news = posts?.find(post => post._id === id) || {}
   const {title, category, image, post} = news
   const location = useLocation()
   
   const similarNewses = posts?.filter(post => post.category === thisCategory) || []
   const similarNews = similarNewses?.filter(post => post._id !== id) || []

   return (
      <>
         <div className="max-w-[90%] mx-auto py-10" id="post_details">
            <div className="grid grid-cols-3 gap-5 box-border">
               <div className="col-span-2 space-y-6">
                  <h2 className="text-4xl font-semibold leading-normal">{title}</h2>
                  <div className="flex items-center justify-between">
                     <p className="text-lg capitalize font-semibold text-blue-500">{category}</p>
                     <div className="flex gap-3 items-center">
                        <h3 className="font-medium">Share on</h3>
                        <a href="#">
                           <FaFacebook className="text-xl text-[#0866FF]" />
                        </a>
                        <a href="#">
                           <FaLinkedinIn className="text-xl text-[#0A66C2]" />
                        </a>
                        <a href="#">
                           <FaXTwitter className="text-xl text-black" />
                        </a>
                     </div>
                  </div>
                  <img src={image} className="w-full h-auto rounded-md" alt="" />
                  <div>
                     <div className="text-lg text-slate-600" dangerouslySetInnerHTML={{__html: post}} />
                  </div>
                  <div>
                     <h2 className="text-lg text-primary font-medium mb-3 underline underline-offset-8">Similar Posts</h2>
                     {
                        isPending ?
                        <div className="grid grid-cols-3 gap-7 mt-5">
                           <LastCatSkeleton></LastCatSkeleton>
                           <LastCatSkeleton></LastCatSkeleton>
                           <LastCatSkeleton></LastCatSkeleton>
                        </div>
                        :
                        <div className="grid grid-cols-3 gap-7 mt-5">
                           {
                              similarNews?.map((news, idx) => <LastCard key={idx} news={news}></LastCard>).slice(0, 3)
                           }
                        </div>
                     }
                  </div>
               </div>   
               <div className="pl-4" style={{position: 'relative'}}>
                  <div className="space-y-3 sticky top-0">
                     <div>
                        {
                           <SideNav></SideNav>
                        }
                     </div>
                     <div>
                        <h2 className="text-lg text-primary font-medium">Popular Posts</h2>
                        {
                           isPending ? 
                           <div className="space-y-4">
                              <ThirdCatSkeleton></ThirdCatSkeleton>
                              <ThirdCatSkeleton></ThirdCatSkeleton>
                              <ThirdCatSkeleton></ThirdCatSkeleton>
                              <ThirdCatSkeleton></ThirdCatSkeleton>
                           </div>
                           :
                           <div>
                              {
                                 posts?.map((news, idx) => <ThirdLeftCard key={idx} news={news}></ThirdLeftCard>).slice(0, 4)
                              }
                           </div>
                        }                     
                     </div>
                  </div>
               </div>
            </div>         
         </div>
      </>
   );
};

export default PostDetails;