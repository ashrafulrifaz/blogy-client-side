import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LiaEditSolid } from "react-icons/lia";
import { AiOutlineDelete } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { PiMagnifyingGlassMinus } from "react-icons/pi";
import { AuthContext } from "../../Provider/Provider";
import useCategories from "../../Hooks/useCategories";

const Posts = () => {
   const {newses} = useContext(AuthContext)
   const {categories} = useCategories()
   const [filteredValue, setFilteredValue] = useState(null)
   const [filteredPosts, setFilteredPosts] = useState(newses)
   const [showSearch, setShowSearch] = useState(false)

   const handleFilter = e => {
      const option = e.target.value
      setFilteredValue(option)
      if(option === 'all'){
         setFilteredPosts(newses)         
      } else {
         const filteredItems = newses?.filter(post => post?.category === option)
         setFilteredPosts(filteredItems)
      }
   }

   const handleSearch = e => {
      e.preventDefault()
      setFilteredValue(true)
      const searchValue = e.target.value
      const searcing = newses?.filter(post => post.title.toLowerCase().includes(searchValue))
      setFilteredPosts(searcing)
   }

   return (
      <div className='bg-white p-10 rounded-lg'>
         <div className="flex justify-between items-center">
            <Link to="/new-post" className="text-blue-500 hover:text-white font-medium border border-blue-500 hover:bg-blue-500 rounded-md px-2 py-1 text-sm">Add New</Link>
            <div className="flex items-center gap-3">
               <form onChange={handleSearch} className={`transition-all duration-500 ${showSearch ? 'opacity-100' : 'opacity-0'}`}>
                  <input type="text" className="border border-gray-400 py-1 px-3 focus:outline-none rounded-md" placeholder="Type to search...." />
               </form>
               <IoIosSearch className={`text-2xl text-blue-500 cursor-pointer ${!showSearch ? 'block' : 'hidden'}`} title="Click to Search" onClick={() => setShowSearch(true)} />
               <PiMagnifyingGlassMinus className={`text-2xl text-red-500 cursor-pointer ${showSearch ? 'block' : 'hidden'}`} title="Click to Search" onClick={() => setShowSearch(false)} />
            </div>
         </div>
         <div className="py-5">
            <div className="border border-gray-300 rounded-md px-2 w-2/12">
               <select onChange={handleFilter} className="focus:outline-none w-full py-2 capitalize">
                  <option value="all">all</option>
                  {
                     categories?.map(category => (
                        <option key={category._id} value={`${category.name}`}>{category.name}</option>
                     ))
                  }
               </select>
            </div>
         </div>
         <div>
            {
               !filteredValue || filteredPosts.length > 0 ?
               <table className="border border-gray-300 w-full text-left">
                  <thead>
                     <tr>
                        <th className="font-normal p-3 w-2/5">Title</th>
                        <th className="font-normal p-3">Author</th>
                        <th className="font-normal p-3">Category</th>
                        <th className="font-normal p-3">Date</th>
                        <th className="font-normal p-3">Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     {
                        filteredValue ? 
                        filteredPosts?.map((post, idx) => 
                        <tr key={idx} className="border-t border-gray-200">
                           <td className="font-medium p-3">{post.title}</td>
                           <td className="font-medium p-3 capitalize">{post.authorName}</td>
                           <td className="font-medium p-3 capitalize">{post.category}</td>
                           <td className="font-normal p-3">{post.published_date.slice(0, 10)}</td>
                           <td className="font-normal p-3">
                              <div className="flex gap-2">
                                 <Link to={`/${post.category}/${post._id}`}>
                                    <LiaEditSolid className="text-2xl text-green-500 hover:scale-110 transition-all" />
                                 </Link>
                                 <AiOutlineDelete className="text-2xl text-red-500 hover:scale-110 transition-all cursor-pointer" />                                 
                              </div>
                           </td>
                        </tr>)
                        :
                        newses?.map((post, idx) => 
                        <tr key={idx} className="border-t border-gray-200">
                           <td className="font-medium p-3">{post.title}</td>
                           <td className="font-medium p-3 capitalize">{post.authorName}</td>
                           <td className="font-medium p-3 capitalize">{post.category}</td>
                           <td className="font-normal p-3">{post.published_date.slice(0, 10)}</td>
                           <td className="font-normal p-3">
                              <div className="flex gap-2">
                                 <Link to={`/${post.category}/${post._id}`}>
                                    <LiaEditSolid className="text-2xl text-green-500 hover:scale-110 transition-all" />
                                 </Link>
                                 <AiOutlineDelete className="text-2xl text-red-500 hover:scale-110 transition-all cursor-pointer" />                                 
                              </div>
                           </td>
                        </tr>)
                     }
                  </tbody>
               </table>
               :               
               <h3 className="text-center font-semibold text-xl">No Posts Available</h3>
            }
         </div>
      </div>
   );
};

export default Posts;