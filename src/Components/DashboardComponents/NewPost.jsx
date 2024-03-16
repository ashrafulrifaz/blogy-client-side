import { useMemo, useRef, useState } from "react";
import Swal from "sweetalert2";
import JoditEditor from 'jodit-react';
import axios from "axios";
import { useForm } from "react-hook-form";
import useCategories from "../../Hooks/useCategories";

const NewPost = ({placeholder}) => {
   const { register, handleSubmit, formState: { errors }, reset } = useForm()
	const editor = useRef(null);
   const [loadingBlog, setLoadingBlog] = useState(false);
	const [content, setContent] = useState('');
   const {categories} = useCategories()

   const imageLink = `https://api.imgbb.com/1/upload?key=b15b18931efedc83ecd9a2394939e860`

	const config = useMemo(
		() => ({
         readonly: false,
         placeholder: placeholder || 'Post Details...'
      }),
      [placeholder]
	);

   const onSubmit = async(data) => {
      setLoadingBlog(true)

      const imageFile = {image: data.image[0]}
      const thumbnailFile = {image: data.thumbnail[0]}
      const res1 = await axios.post(imageLink, imageFile, {
         headers: {
               'Content-Type': 'multipart/form-data',
         }
      })
      const res2 = await axios.post(imageLink, thumbnailFile, {
         headers: {
               'Content-Type': 'multipart/form-data',
         }
      })
      
      if(res1.data.success && res2.data.success){
         const title = data.title;
         const category = data.category;
         const tags = data.tags;
         const image = res1.data.data.display_url;
         const thumbnail = res2.data.data.display_url;
         const post = content;
         const published_date = new Date()
         const authorName = data.authorname;
         const authorImage = data.authorimage;
         const newPost = {title, category, tags, image, thumbnail, post, authorImage, authorName, published_date};
         console.log(newPost);

         axios.post('https://blogy-server.vercel.app/posts', newPost)
            .then(data => {
               if(data.data.insertedId){
                  Swal.fire({
                     position: 'top-end',
                     icon: 'success',
                     title: 'Post added successfully',
                     showConfirmButton: false,
                     timer: 1500
                  })
               }
               reset()
            })
      }      
      setLoadingBlog(true)
   }

   return (
      <div className="p-10 pr-16 rounded-lg bg-white w-full" id="new_post">

         <h1 className="text-2xl font-semibold">Add New Post</h1>
         <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
            <div>
               <label htmlFor="title">Your Post Title</label>
               <input 
                  id="title"
                  type="text" 
                  name="title" 
                  placeholder="Title" 
                  required 
                  {...register("title", { required: true })}
               />
            </div>
            <div className="grid grid-cols-2 gap-5">
               <div>
                  <label htmlFor="title">Your Post Category</label>
                  <div className="bg-gray-50 rounded-md p-4 focus:outline-none focus:border-gray-300 border mt-2">
                     <select 
                        name="category" 
                        className="w-full focus:outline-none bg-gray-50"
                        {...register("category", { required: true })}
                     >
                        <option value="category" selected disabled>Category</option>
                        {
                           categories?.map(category => (
                              <option key={category._id} value={category?.name}>{category?.name}</option>
                           ))
                        }
                     </select>
                  </div>
               </div>
               <div>
                  <label htmlFor="title">Your Post Tags</label>
                  <input 
                     type="text" 
                     name="tags" 
                     className="w-full bg-gray-50 rounded-md p-4 focus:outline-none focus:border-gray-300 border" placeholder="Tags" 
                     {...register("tags", { required: true })}
                  />
               </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
               <div>
                  <label htmlFor="title">Your Post Image</label>
                  <input 
                     type="file" 
                     name="image" 
                     className="w-full bg-gray-50 rounded-md p-4 focus:outline-none focus:border-gray-300 border" placeholder="Thumbnail Image" 
                     required
                     {...register("image", { required: true })} 
                  />
               </div>
               <div>
                  <label htmlFor="title">Your Post Thumbnail Image</label>
                  <input 
                     type="file" 
                     name="thumbnail" 
                     className="w-full bg-gray-50 rounded-md p-4 focus:outline-none focus:border-gray-300 border" placeholder="Thumbnail Image" 
                     required
                     {...register("thumbnail", { required: true })} 
                  />
               </div>
            </div>
            <div>
               <label htmlFor="title">Your Post Details</label>
               <JoditEditor
                  className="mt-"
                  ref={editor}
                  value={content}
                  config={config}
                  tabIndex={1} 
                  onBlur={newContent => setContent(newContent)}
                  onChange={newContent => setContent(newContent)}
               />
            </div>
            <div className="flex gap-5 items-center">
               <input 
                  type="text" 
                  name="author_name" 
                  className="w-full bg-gray-50 rounded-md p-4 focus:outline-none focus:border-gray-300 border" placeholder="Author name (Optional)" 
                  {...register("author_name")}
               />
               <input 
                  type="text" 
                  name="author_image" 
                  className="w-full bg-gray-50 rounded-md p-4 focus:outline-none focus:border-gray-300 border" placeholder="Author image (Optional)" 
                  {...register("author_image")}                  
               />
            </div>
            <button className="text-white font-medium bg-blue-500 rounded-lg px-5 py-2">Publish</button>
         </form>
      </div>
   );
};

export default NewPost;