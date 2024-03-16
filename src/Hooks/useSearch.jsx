import { useContext, useState } from "react";
import usePosts from "./usePosts";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/Provider";

const useSearch = () => {
    const { setShowSearchDiv, setSearchedPosts} = useContext(AuthContext)
    const [showSearch, setShowSearch] = useState(true)
    const [activeSearch, setActiveSearch] = useState(false)
    const {posts} = usePosts()
    const navigate = useNavigate()

    const handleSearch = (e) => {      
        e.preventDefault()      
        const value = e.target.search.value
        if(value){
           setActiveSearch(true)
           const newPosts = posts?.filter(post => post?.title.toLowerCase().includes(value.toLowerCase()))
           setSearchedPosts(newPosts)
           navigate('/searched-posts')
           setShowSearchDiv(false)
           setShowSearch(true)
        } else {
           setActiveSearch(false)
        }
    }
  
    const handleSearchPosts = (e) => {
        const value = e.target.value
        if(value){
           setActiveSearch(true)
           setShowSearchDiv(true)
           const newPosts = posts?.filter(post => post?.title.toLowerCase().includes(value.toLowerCase()))
           setSearchedPosts(newPosts)
        } else {
           setShowSearchDiv(false)
        }
    }
    return {handleSearch, handleSearchPosts, showSearch, setShowSearch, activeSearch}
};

export default useSearch;