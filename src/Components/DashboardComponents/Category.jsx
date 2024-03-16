import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import CategoryItems from "./CategoryItems";
import useCategories from "../../Hooks/useCategories";

const Category = () => {
   const [showForm, setShowForm] = useState(false)
   const [loading, setLoading] = useState(false)
   const { register, handleSubmit, formState: { errors }} = useForm()
   const {categories, refetch} = useCategories()

   const onSubmit = (data) => {
      const categoryData = {
         name: data?.category,
         slag: data?.slag
      }
      axios.post('https://blogy-server.vercel.app/categories', categoryData)  
         .then(res => {
            if(res.data.insertedId){ 
               Swal.fire({
                     position: "top-end",
                     icon: "success",
                     title: "Category Added Successfully",
                     showConfirmButton: false,
                     timer: 1500
               });
               setLoading(false)
               setShowForm(false)
            }
         })
      setLoading(false)
   }

   return (
      <div className="bg-white p-10 rounded-lg">
         <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Categories</h2>
            <button onClick={() => setShowForm(!showForm)} to="/new-post" className="text-blue-500 hover:text-white font-medium border border-blue-500 hover:bg-blue-500 rounded-md px-2 py-1 text-sm transition-all">{showForm ? 'Cancel' : 'Add New'}</button>
         </div>
         <form onSubmit={handleSubmit(onSubmit)} className={`${showForm ? 'block' : 'hidden'} border border-slate-300 mt-6 rounded-lg p-4 space-y-4`}>
            <div className="grid grid-cols-5 gap-4 items-center">
               <input {...register("category", { required: true })} type="text" placeholder="Category....." className="w-full bg-gray-100 py-2 px-3 rounded-lg focus:border-blue-400 border border-blue-200 focus:outline-none col-span-2" />
               <input {...register("slag", { required: true })} type="text" placeholder="Slag....." className="w-full bg-gray-100 py-2 px-3 rounded-lg focus:border-blue-400 border border-blue-200 focus:outline-none col-span-2" />
               <button to="/new-post" className="text-white font-medium hover:scale-105 bg-blue-500 rounded-md px-2 py-2.5 text-sm transition-all">Add</button>
            </div>
            {(errors.category || errors.slag) && <span className="text-sm font-medium text-red-600">Fill Everyting</span>}
         </form>

         {/* Table */}
         <table className="border border-gray-300 w-full text-left mt-7">
            <thead>
               <tr>
                  <th className="font-medium p-3 w-2/5">Number</th>
                  <th className="font-medium p-3">Category</th>
                  <th className="font-medium p-3">Total Posts</th>
                  <th className="font-normal p-3">Action</th>
               </tr>
            </thead>
            <tbody>
               {
                  categories?.map((category, idx) => (
                     <CategoryItems key={idx} id={idx} category={category} refetch={refetch}></CategoryItems>
                  ))
               }
            </tbody>
         </table>
      </div>
   );
};

export default Category;