import useUsers from "../../Hooks/useUsers";
import UserItems from "./UserItems";

const Users = () => {
    const {users, isPending, refetch} = useUsers()

    return (
        <div className='bg-white p-10 rounded-lg'>
            <h1 className="text-2xl font-semibold">All Users</h1>
            {/* Table */}
            <table className="border border-gray-300 w-full text-left mt-7">
                <thead>
                    <tr>
                        <th className="font-medium p-3 w-2/5">Photo</th>
                        <th className="font-medium p-3 w-2/5">Name</th>
                        <th className="font-medium p-3">Email</th>
                        <th className="font-medium p-3">Role</th>
                        <th className="font-normal p-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((user, idx) => (
                            <UserItems key={idx} user={user} refetch={refetch}></UserItems>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Users;