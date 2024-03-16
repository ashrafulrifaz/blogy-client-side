import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Edit = () => {
   const loadedPost = useLoaderData()
   const {_id, title, category, tags, image, thumbnail, post, authorName, authorImage} = loadedPost;
   console.log(title);

   const handleNewPost = e => {
      e.preventDefault()
      const form = e.target;
      const title = form.title.value;
      const category = form.category.value;
      const tags = form.tags.value;
      const image = form.image.value;
      const thumbnail = form.thumbnail.value;
      const post = form.post.value;
      const authorName = form.authorname.value;
      const authorImage = form.authorimage.value;
      const newPost = {title, category, tags, image, thumbnail, post, authorImage, authorName};

      fetch(`https://blogy-server.vercel.app/${_id}`, {
         method: 'PUT',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(newPost)
      })
         .then(res => res.json())
         .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
               Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Post updated successfully',
                  showConfirmButton: false,
                  timer: 1500
               })
            } else {
               Swal.fire({
                  position: 'top-end',
                  icon: 'error',
                  title: 'Post update failed',
                  showConfirmButton: false,
                  timer: 1500
               })
            }
            form.reset()
         })
   }

   return (
      <div className="p-10 pr-16 rounded-lg bg-white w-full">

         <h1 className="text-2xl font-semibold">Edit This Post</h1>
         <form onSubmit={handleNewPost} className="mt-8 space-y-6">
            <div>
               <input type="text" name="title" className="w-full bg-gray-50 rounded-md p-4 focus:outline-none focus:border-gray-300 border" placeholder="Title" defaultValue={title} required />
            </div>
            <div className="grid grid-cols-2 gap-8">
               <div className="bg-gray-50 rounded-md p-4 focus:outline-none focus:border-gray-300 border">
                  <select defaultValue={category} name="category" className="w-full focus:outline-none bg-gray-50">
                     <option value="Category" disabled>Category</option>
                     <option value="Tech">Tech</option>
                     <option value="Entertainment">Entertainment</option>
                     <option value="Business">Business</option>
                     <option value="Sports">Sports</option>
                     <option value="Life & Living">Life & Living</option>
                     <option value="World">World</option>
                  </select>
               </div>
               <input type="text" name="tags" className="w-full bg-gray-50 rounded-md p-4 focus:outline-none focus:border-gray-300 border" placeholder="Tags" defaultValue={tags} />
            </div>
            <div>
               <input type="text" name="image" className="w-full bg-gray-50 rounded-md p-4 focus:outline-none focus:border-gray-300 border" placeholder="Image" required defaultValue={image} />
            </div>
            <div>
               <input type="text" name="thumbnail" className="w-full bg-gray-50 rounded-md p-4 focus:outline-none focus:border-gray-300 border" placeholder="Thumbnail Image" required defaultValue={thumbnail} />
            </div>
            <div>
               <textarea rows="12" type="text" name="post" className="w-full bg-gray-50 rounded-md p-4 focus:outline-none focus:border-gray-300 border" placeholder="Type your post details" required  defaultValue={post} />
            </div>
            <div className="flex gap-5 items-center">
               <input type="text" name="authorname" className="w-full bg-gray-50 rounded-md p-4 focus:outline-none focus:border-gray-300 border" placeholder="Author name (Optional)"  defaultValue={authorName} />
               <input type="text" name="authorimage" className="w-full bg-gray-50 rounded-md p-4 focus:outline-none focus:border-gray-300 border" placeholder="Author image (Optional)" />
            </div>
            <button className="text-white font-medium bg-blue-500 rounded-lg px-5 py-2"  defaultValue={authorImage}>Update</button>
         </form>
      </div>
   );
};

export default Edit;