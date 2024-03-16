import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import axios from "axios";
import usePosts from "../../Hooks/usePosts";

const CategoryItems = ({category, id, refetch}) => {
    const {newses} = usePosts()
    const {_id, name} = category || {}
    const postNum = newses?.filter(post => post.category === name)

    const handleDeleteCategory = () => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://blogy-server.vercel.app/categories/${_id}`)
                .then(() => {
                    Swal.fire({
                        title: "Deleted!",
                        icon: "success"
                    });
                    refetch()
                })
            }
          });
    }

    return (
        <tr className="border-t border-gray-200">
            <td className="font-medium py-3 px-5 capitalize">{id + 1}</td>
            <td className="font-medium p-3 capitalize">{name}</td>
            <td className="font-medium p-3 capitalize">{postNum?.length}</td>
            <td className="font-normal p-3">
                <div>
                    <AiOutlineDelete onClick={handleDeleteCategory} className="text-2xl text-red-500 hover:scale-110 transition-all cursor-pointer" />                                 
                </div>
            </td>
        </tr>
    );
};

export default CategoryItems;