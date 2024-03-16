import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";
import useChat from "../Hooks/useChat";
import { Outlet } from "react-router-dom";


const Chat = () => {
    const {user} = useContext(AuthContext)
    const {loadedChat, isPending} = useChat()
    const date = new Date()
    console.log(date);

    const handleSearchUser = e => {
        e.preventDefault()
        console.log('searched');
    }

    return (
        <div className="bg-white rounded-xl p-8 h-screen">
            <div className="flex items-center justify-between">
                <div className="w-12 p-1">
                    <img src={user?.photoURL} className="w-full rounded-full cursor-pointer" alt="" />
                </div>
                <div>
                    <form onSubmit={handleSearchUser}>
                        <input type="text" className="border rounded-md p-2" placeholder="Search user" />
                        <button className="px-3 py-2 bg-blue-700 text-white font-medium rounded-md">Search</button>
                    </form>                    
                </div>
            </div>
            <hr className="my-5" />
            <div className="flex gap-1">
                <div className="w-14 border-r-2">
                    {
                        loadedChat && loadedChat[0]?.chat_user?.map((chat, idx) => (
                            <div className="w-12 p-1" key={idx}>
                                <img src={chat.photo} className="w-full rounded-full cursor-pointer h-12" alt="" />
                            </div>
                        ))
                    } 
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Chat;