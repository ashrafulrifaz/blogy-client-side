import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";
import PostCard from "../../Components/PostCard/PostCard";
import SideNav from "../../Components/SideNav/SideNav";
import usePosts from "../../Hooks/usePosts";

const SearchPage = () => {
    const {searchedPosts} = useContext(AuthContext)
    const {posts} = usePosts()

    return (
        <div className="max-w-[90%] mx-auto py-5">
            <div className="grid grid-cols-3 gap-7">
                <div className="col-span-2">
                    {
                        searchedPosts?.length > 0 ? 
                        searchedPosts?.map((news, idx) => (
                            <PostCard key={idx} news={news}></PostCard>
                        ))
                        :
                        <div>
                            <h2 className="text-center capitalize font-semibold text-3xl my-10">no post Found</h2>   
                            <h2 className="capitalize font-semibold text-xl my-1">Explore More</h2>   
                            <div className="grid space-y-3">
                                {
                                    posts?.map(post => (
                                        <PostCard key={post._id} news={post}></PostCard>
                                    )).slice(0,3)
                                }
                            </div>
                        </div> 
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

export default SearchPage;