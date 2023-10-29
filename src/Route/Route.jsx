import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PostDetails from "../Pages/PostDetails/PostDetails";
import CategoryPages from "../Pages/CategoryPages/CategoryPages";
import Latest from "../Pages/Latest/Latest";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const Route = createBrowserRouter([
   {
      path: '/',
      element: <Layout></Layout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/login',
            element: <Login></Login>
         },
         {
            path: '/register',
            element: <Register></Register>
         },
         {
            path: '/:category/:id',
            element: <PostDetails></PostDetails>,
            loader: ({params}) => fetch(`https://blogy-server.vercel.app/category/${params.id}`)
         },
         {
            path: '/:category',
            element: <CategoryPages></CategoryPages>,
            loader: ({params}) => fetch(`https://blogy-server.vercel.app/${params.category}`)
         },
         {
            path: '/latest',
            element: <Latest></Latest>
         }
      ]
   }
])

export default Route;