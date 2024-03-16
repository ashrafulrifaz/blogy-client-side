import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase.init";
import axios from "axios";
import { toast } from "sonner";

export const AuthContext = createContext(null)

const Provider = ({children}) => {
   const [loadedNews, setLoadedNews] = useState([])
   const newses = [...loadedNews].reverse()
   const [user, setUser] = useState(null)
   const [showSearchDiv, setShowSearchDiv] = useState(null)
   const [searchedPosts, setSearchedPosts] = useState([])

   useEffect(() => {
      axios.get(`https://blogy-server.vercel.app/posts`)
         .then(data => setLoadedNews(data.data))

      const unsubscribe = onAuthStateChanged(auth, (user) => {
         setUser(user)
      })
      
      return () => {
         unsubscribe()
      }
   }, [])

   const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password)
   }

   const login = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
   }

   const googleLogin = provider => {
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
      })
   }

   const info = {newses, user, setUser, createUser, login, googleLogin, signOutUser, showSearchDiv, setShowSearchDiv, searchedPosts, setSearchedPosts}

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