import Ads from '../../assets/ads-3.gif'
import { useState } from 'react'
import usePosts from "../../Hooks/usePosts";
import useCategories from "../../Hooks/useCategories";
import CategoryItem from "./CategoryItem";
import SideNavSkeleton from "../Skeletons/SideNavSkeleton";

const SideNav = () => {
   const [add, setAdd] = useState(false)
   const {posts, isPending: isPostPending} = usePosts()
   const {categories, isPending} = useCategories()
   
   return (
      <div>
         <div className="mt-4">
            <h2 className="text-lg text-primary font-medium">Popular Category</h2>
            <hr className="mt-2" />
            {
                isPending || isPostPending ?
                <div className="gap-3 mt-3 grid">
                    <SideNavSkeleton></SideNavSkeleton>
                    <SideNavSkeleton></SideNavSkeleton>
                    <SideNavSkeleton></SideNavSkeleton>
                    <SideNavSkeleton></SideNavSkeleton>
                    <SideNavSkeleton></SideNavSkeleton>
                </div>
                :
                <ul className="gap-3 mt-3 grid">
                   {
                    categories?.map(category => <CategoryItem key={category._id} category={category} posts={posts}></CategoryItem>)
                   }
                </ul>
            }
            <div className={`relative mt-5 ${add ? 'hidden': 'block'}`}>
               <img src={Ads} className="w-full h-auto" alt="ads" />
               <span onClick={() => setAdd(true)} className="bg-gray-300 cursor-pointer text-sm font-medium absolute top-0 right-0 px-1.5 py-0.5">X</span>
            </div>
         </div>
      </div>
   );
};

export default SideNav;