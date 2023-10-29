import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase.init";
import axios from "axios";

export const AuthContext = createContext(null)

const Provider = ({children}) => {
   const [loadedNews, setLoadedNews] = useState([])
   const newses = [...loadedNews].reverse()
   const [user, setUser] = useState(null)

   useEffect(() => {
      axios.get(`https://blogy-server.vercel.app/`)
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
   }

   const info = {newses, user, createUser, login, googleLogin, signOutUser}
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