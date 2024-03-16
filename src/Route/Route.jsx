import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PostDetails from "../Pages/PostDetails/PostDetails";
import CategoryPages from "../Pages/CategoryPages/CategoryPages";
import Latest from "../Pages/Latest/Latest";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SearchPage from "../Pages/SearchPage/SearchPage";
import SecondErrorPage from "../Pages/ErrorPage/SecondErrorPage";
import Terms from "../Pages/Terms/Terms";
import PrivacyPolicy from "../Pages/PrivaryPolicy/PrivacyPolicy";
import About from "../Pages/About/About";
import Posts from "../Components/DashboardComponents/Posts";
import Edit from "../Components/DashboardComponents/Edit";
import Category from "../Components/DashboardComponents/Category";
import NewPost from "../Components/DashboardComponents/NewPost";
import Users from "../Components/DashboardComponents/Users";
import DashboardLayout from '../Layout/DashboardLayout'
import DashboardHome from "../Components/DashboardComponents/DashboardHome";

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
            path: '/about',
            element: <About></About>
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
            element: <PostDetails></PostDetails>
         },
         {
            path: '/:category',
            element: <CategoryPages></CategoryPages>
         },
         {
            path: '/latest',
            element: <Latest></Latest>
         },
         {
            path: '/searched-posts',
            element: <SearchPage></SearchPage>
         },
         {
           path: '/404',
           element: <SecondErrorPage></SecondErrorPage>,
         },
         {
            path: '/terms&conditions',
            element: <Terms></Terms>
         },
         {
            path: '/privacy-policy',
            element: <PrivacyPolicy></PrivacyPolicy>
         }
      ]
   },
   {
      path: 'dashboard',
      element: <DashboardLayout></DashboardLayout>,
      children: [
         {
            path: '',
            element: <DashboardHome></DashboardHome>
         },
         {
            path: 'dashboard/posts',
            element: <Posts></Posts>
         },
         {
            path: 'dashboard/category/:id',
            element: <Edit></Edit>,
            loader: ({params}) => fetch(`https://blogy-server.vercel.app/category/${params.id}`)
         },
         {
            path: 'dashboard/category',
            element: <Category></Category>
         },
         {
            path: 'dashboard/new-post',
            element: <NewPost></NewPost>
         },
         {
            path: 'dashboard/users',
            element: <Users></Users>
         }
      ]
   }
])

export default Route;