import axios from "axios";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const UserItems = ({user, refetch}) => {
    const {name, email, image, role, _id} = user || {}

    const handleUpdateRole = (e) => {
        const newRole = e.target.value
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update"
        })
        .then((result) => {
            if (result.isConfirmed) {
                axios.patch(`http://localhost:5000/users/${_id}`, {role: newRole})
                    .then(() => {
                        Swal.fire({
                            title: "RoleUpdated!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        refetch()
                    })
            }
        });
    }

    const handleDeleteUser = () => {

    }

    return (
        <tr className="border-t border-gray-200">
            <td className="font-medium p-3 capitalize">
                <img src={image} className="w-12 h-12 rounded-2xl" alt="" />
            </td>
            <td className="font-medium p-3 capitalize">{name}</td>
            <td className="font-medium p-3">{email?.length > 20 ? `${email?.slice(0, 3)}...@gmail.com`: email}</td>
            <td className="font-medium p-3">{role ? role : 'user'}</td>
            <td className="font-normal p-3">
                <div className="flex gap-2">
                    <select onChange={handleUpdateRole}>
                        <option value="change role" disabled selected>Change Role</option>
                        <option value="admin">admin</option>
                        <option value="editor">editor</option>
                        <option value="user">user</option>
                    </select>
                </div>
            </td>
        </tr>
    );
};

export default UserItems;