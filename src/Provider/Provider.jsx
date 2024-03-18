import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase.init";
import axios from "axios";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";

export const AuthContext = createContext(null)

const Provider = ({children}) => {
   const [isLoading, setIsLoading] = useState(true)
   const [user, setUser] = useState(null)
   const [loadedNews, setLoadedNews] = useState([])
   const newses = [...loadedNews].reverse()
   const [showSearchDiv, setShowSearchDiv] = useState(null)
   const [searchedPosts, setSearchedPosts] = useState([])

   useEffect(() => {
      axios.get(`https://blogy-server.vercel.app/posts`)
         .then(data => setLoadedNews(data.data))

      const unsubscribe = onAuthStateChanged(auth, (user) => {
         setUser(user)
         setIsLoading(false)
      })
      
      return () => {
         unsubscribe()
      }
   }, [])

   const { isFetching: isRolePending, data: userRole} = useQuery({
      queryKey: ['user_role'],
      queryFn: async () =>{
         if(user?.email){
            const res = await axios.get(`https://blogy-server.vercel.app/user-role/${user?.email}`)
            return res?.data
         }
      },
      enabled: !!user?.email
   })

   const createUser = (email, password) => {
      setIsLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
   }

   const login = (email, password) => {
      setIsLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
   }

   const googleLogin = provider => {
      setIsLoading(true)
      return signInWithPopup(auth, provider)
   }

   const signOutUser = () => {
      signOut(auth)
      .then(() => {
         toast.success('Logout Successfully', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
         });
         setIsLoading(true)
      })
   }

   const info = {isLoading, newses, user, setUser, createUser, login, googleLogin, signOutUser, showSearchDiv, setShowSearchDiv, searchedPosts, setSearchedPosts, userRole, isRolePending}

   return (
      <AuthContext.Provider value={info}>
         {children}
      </AuthContext.Provider>
   );
};

Provider.propTypes = {
   children: PropTypes.object
}

export default Provider;