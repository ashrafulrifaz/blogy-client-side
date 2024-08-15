import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/Provider";

const PrivateRoute = ({children}) => {
   const {isLoading, userRole, isRolePending} = useContext(AuthContext)

   if(isLoading || isRolePending){
      return <h2>loading</h2>
   }

   if(userRole?.role === 'admin'){
      return children
   } else {
      return <Navigate to="/"></Navigate>
   }
};

export default PrivateRoute;