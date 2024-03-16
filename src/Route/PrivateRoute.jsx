import { Navigate } from "react-router-dom";
import useUserRole from "../Hooks/useUserRole";


const PrivateRoute = ({children}) => {
   const {userRole} = useUserRole()
   console.log(userRole);

   if(userRole?.role === 'admin'){
      return children
   } else {
      return <Navigate to="/"></Navigate>
   }
};

export default PrivateRoute;