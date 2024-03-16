import { useParams } from "react-router-dom";
import usePosts from "../../Hooks/usePosts";
import { useForm } from "react-hook-form";
import useCategories from "../../Hooks/useCategories";
import JoditEditor from "jodit-react";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { AuthContext } from "../../Provider/Provider";
import axios from "axios";
import { toast } from "sonner";

const EditPost = ({placeholder}) => {
    const {user} = useContext(AuthContext)
    const { register, handleSubmit, reset } = useForm()
	const editor = useRef(null);
    const [loadingBlog, setLoadingBlog] = useState(false);
    const {newses} = usePosts()
    const {categories} = useCategories()
    const {id} = useParams()
    const currentNews = newses?.find(news => news._id === id)
    const {_id, title, category, tags, image, thumbnail, post, authorName, authorImage} = currentNews || {}
	const [content, setContent] = useState('');
    
    const imageLink = `https://api.imgbb.com/1/upload?key=b15b18931efedc83ecd9a2394939e860`
    const config = useMemo(
		() => ({
         readonly: false,
         placeholder: placeholder || 'Post Details...'
      }),
      [placeholder]
	);

    useEffect(() => {
        setContent(post)
    }, [post])

    const onSubmit = async (data) => {
        setLoadingBlog(true)

        const imageFile = {image: data.image[0]}
        const thumbnailFile = {image: data.thumbnail[0]}

        var newImage
        var newThumbnail

        if(imageFile.image !== undefined || thumbnailFile.image !== undefined){
            if(imageFile.image !== undefined){                
                const res = await axios.post(imageLink, imageFile, {
                    headers: {
                          'Content-Type': 'multipart/form-data',
                    }
                })
                if(res.data.success){
                    newImage = res.data.data.display_url
                }
            }
            if(thumbnailFile.image !== undefined){                
                const res = await axios.post(imageLink, thumbnailFile, {
                    headers: {
                          'Content-Type': 'multipart/form-data',
                    }
                })
                if(res.data.success){
                    newThumbnail = res.data.data.display_url
                }
            }
        }

        const newTitle = data.title || title
        const newCategory = data.category || category;
        const newTags = data.tags || tags;
        const latestImage = newImage || image
        const latestThumbnail = newThumbnail || thumbnail
        const post = content;
        const newAuthorName = data.authorname || authorName;
        const newAuthorImage = data.authorimage || authorImage;
        const newPost = {
            title: newTitle, 
            category: newCategory, 
            tags: newTags, 
            image: latestImage, 
            thumbnail: latestThumbnail, 
            post, 
            authorImage: newAuthorName, 
            authorName: newAuthorImage
        };
        axios.patch(`http://localhost:5000/posts/${_id}`, newPost)
            .then(res => {
                if(res.data.modifiedCount){
                    toast.success('successfully updated')
                } else {
                    toast.error('everything up to date')
                }
            })
        setLoadingBlog(false)
    }

    return (
        <div className="bg-white p-10 rounded-lg">
            <h1 className="text-2xl font-semibold">Edit <span className="text-blue-500">{title}</span></h1>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
                <div>
                    <label htmlFor="title" className="font-medium">Your Post Title</label>
                    <input 
                        id="title"
                        type="text" 
                        className="w-full bg-gray-50 rounded-md p-4 focus:outline-none focus:border-gray-300 border mt-2" 
                        name="title" 
                        placeholder="Title" 
                        {...register("title")}
                        defaultValue={title}
                    />
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <div>
                        <label htmlFor="title" className="font-medium">Your Post Category</label>
                        <div className="bg-gray-50 rounded-md px-4 focus:outline-none focus:border-gray-300 border mt-2">
                            <select 
                                name="category" 
                                className="w-full focus:outline-none bg-gray-50 py-[17px]"
                                defaultValue={category}
                                {...register("category")}
                                >
                                <option value="category" disabled>Category</option>
                                {
                                    categories?.map(category => (
                                        <option key={category._id} value={category?.name}>{category?.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="title" className="font-medium">Your Post Tags</label>
                        <input 
                            type="text" 
                            name="tags" 
                            {...register("tags")}
                            className="w-full bg-gray-50 rounded-md p-4 focus:outline-none focus:border-gray-300 border mt-2"
                            defaultValue={tags}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <div>
                        <label htmlFor="title" className="font-medium">Your Post Image</label>
                        <input 
                            type="file" 
                            name="image" 
                            className="w-full bg-gray-50 rounded-md p-4 focus:outline-none focus:border-gray-300 border mt-2" 
                            placeholder="Thumbnail Image" 
                            {...register("image")}
                            defaultValue={image}
                        />
                    </div>
                    <div>
                        <label htmlFor="title" className="font-medium">Your Post Thumbnail Image</label>
                        <input 
                            type="file" 
                            name="thumbnail" 
                            className="w-full bg-gray-50 rounded-md p-4 focus:outline-none focus:border-gray-300 border mt-2" 
                            placeholder="Thumbnail Image" 
                            {...register("thumbnail")}
                            defaultValue={thumbnail}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="title" className="font-medium">Your Post Details</label>
                    <JoditEditor
                        className="mt-2"
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
                        className="w-full bg-gray-50 rounded-md p-4 focus:outline-none focus:border-gray-300 border" 
                        placeholder="Author name (Optional)" 
                        {...register("author_name")}
                        defaultValue={authorName}
                    />
                    <input 
                        type="text" 
                        name="author_image" 
                        className="w-full bg-gray-50 rounded-md p-4 focus:outline-none focus:border-gray-300 border" 
                        placeholder="Author image (Optional)" 
                        {...register("author_image")}          
                        defaultValue={authorImage}
                    />
                </div>
                <button className="text-white font-medium bg-blue-500 rounded-lg px-5 py-2">
                    {
                        loadingBlog ? 
                        <div className="loader"></div>
                        :
                        <span>Update</span>
                    }
                </button>
            </form>
        </div>
    );
};

export default EditPost;