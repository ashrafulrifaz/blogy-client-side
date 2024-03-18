import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/Provider";

const PrivateRoute = ({children}) => {
   const {userRole, isRolePending} = useContext(AuthContext)

   if(!isRolePending && userRole?.role === 'admin'){
      return children
   } else {
      return <Navigate to="/"></Navigate>
   }
};

export default PrivateRoute;