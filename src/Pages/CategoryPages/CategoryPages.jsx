import { useNavigate, useParams } from "react-router-dom";
import BannerCard from "../../Components/HomeComponents/Banner/BannerCard";
import PostCard from "../../Components/PostCard/PostCard";
import usePosts from "../../Hooks/usePosts";
import BannerSkeleton from "../../Components/Skeletons/BannerSkeleton";
import useCategories from "../../Hooks/useCategories";
import SideNav from "../../Components/SideNav/SideNav";
import { useEffect, useState } from "react";


const CategoryPages = () => {
   const { categories, isPending: isCatLoding } = useCategories();
   const navigate = useNavigate();
   const {category} = useParams()
   const {posts, isPending} = usePosts()
   const loadedData = posts?.filter(post => post.category === category) || []
   const categoryData = [...loadedData].reverse()
   const [currentPage, setCurrentPage] = useState(0)
   const [currentBlog, setCurrentBlog] = useState([])
   const perPageItem = 6
   const lastItemIndex = perPageItem * currentPage;

   useEffect(() => {
      if(currentBlog?.length === 0 && categoryData?.length > 0){
         setCurrentBlog(categoryData.slice(0, 11))
      }
   }, [currentBlog, categoryData])

   const handleMorePosts = () => {
      setCurrentPage(currentPage + 1)
      const newNews =  categoryData.slice(lastItemIndex, lastItemIndex + perPageItem)
      setCurrentBlog([...currentBlog, ...newNews])
   }

   if(!isCatLoding){      
      const categoryExists = categories?.some(cat => cat.slag === category);
      if (!categoryExists) {
         navigate('/404')
         return null;
      }
   } else {
      return (
         <div className="text-center">
            <span className="loading loading-dots loading-lg my-10"></span>
         </div>         
      )
   }
   
   return (
      <div className="max-w-[90%] mx-auto py-7">
         {
            isPending ? 
            <BannerSkeleton></BannerSkeleton>
            :
            <div>
               {
                  categoryData.length > 0 ? 
                  <div className="grid grid-cols-3 gap-5">
                     {
                        categoryData && categoryData.map((news, idx) => <BannerCard key={idx} news={news}></BannerCard>).slice(0, 5)
                     }
                  </div> :
                  <h2 className="text-center capitalize font-semibold text-3xl my-10">no post available in this category</h2>
               }
            </div>
         }
         {
            categoryData.length > 5 && 
            <div className="mt-12 grid grid-cols-3 gap-7">
               <div className="col-span-2">
                  <div>
                     {
                        lastItemIndex?
                        currentBlog?.map((news, idx) => <PostCard key={idx} news={news}></PostCard>).slice(5, lastItemIndex + 12)
                        :
                        currentBlog?.map((news, idx) => <PostCard key={idx} news={news}></PostCard>).slice(5, 12)
                     }
                  </div>
                  <div className={`${(currentBlog.length <= categoryData.length) && (categoryData?.length > 11) ? 'block' : 'hidden'} py-8 text-center`}>
                     <button onClick={handleMorePosts} className="py-1.5 px-8 bg-blue-500 text-white font-semibold rounded-lg hover:scale-110 transition-all">More</button>  
                  </div>                
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