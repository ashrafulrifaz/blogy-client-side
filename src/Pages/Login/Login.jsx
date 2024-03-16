import Google from '../../assets/google-login.png'
import Facebook from '../../assets/facebook-login.png'
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/Provider';
import { GoogleAuthProvider } from 'firebase/auth';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const Login = () => {
   const {login, googleLogin} = useContext(AuthContext)
   const [showPass, setShowPass] = useState(false)
   const [loading, setLoading] = useState(false)
   const { register, handleSubmit, formState: { errors } } = useForm()
   const navigate = useNavigate()

   const onSubmit = data => {
      setLoading(true)
      const email = data.email
      const password = data.password

      login(email, password)
         .then(() => {
            setLoading(false)
            navigate('/')
            toast.success('Login Success', {
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
         .then(error => console.log(error))
      setLoading(false)
   }

   const handleGoogleLogin = () => {
      const provider = new GoogleAuthProvider()
      googleLogin(provider)
         .then((result) => {
            const userInfo = {
               name: result?.user?.displayName,
               image: result?.user?.photoURL,
               email: result?.user?.email
           }  
            axios.post('https://blogy-server.vercel.app/users', userInfo)
               .then(() => {
                  navigate('/')
                  toast.success('Login Success', {
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
         })
         .catch(error => console.log(error.message))
   }

   return (
      <div className="bg-gray-50 py-16">
         <div className="w-1/2 mx-auto py-10 px-16 bg-white rounded-lg drop-shadow-2xl">
            <h2 className="text-xl font-semibold text-center">Login to your account</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-4">
               <div>
                  <label htmlFor="email" className='font-medium'>Email</label>
                  <input 
                  id="email" 
                  type="email" 
                  name="email" 
                  placeholder="Enter your email" 
                  className="w-full mt-2 border border-gray-300 py-2 px-3 rounded-lg focus:border-gray-500 focus:outline-none"
                  {...register("email", { required: true })} />
                  {errors.email && <span className='text-sm font-medium text-red-500'>Email is required</span>}
               </div>
               <div className='relative'>
                  <label htmlFor="password" className='font-medium'>Password</label>
                  <input 
                  id="password" 
                  type={showPass ? 'text' : 'password'} 
                  name="password" 
                  placeholder="Enter your password" 
                  className="w-full mt-2 border border-gray-300 py-2 px-3 rounded-lg focus:border-gray-500 focus:outline-none"
                  {...register("password", { required: true })} />
                  <span onClick={() => setShowPass(!showPass)} className="absolute text-xs font-semibold bottom-3 right-3 cursor-pointer">{showPass ? 'Hide' : 'Show'}</span>
               </div>
               {errors.password && <span className='text-sm font-medium text-red-500'>Password is required</span>}
               <button className="w-full bg-blue-500 py-2 rounded-lg text-white font-semibold grid items-center justify-center">{
                  loading ? 
                  <span className="loading loading-dots loading-md"></span>
                  : "Register"
               }</button>
               <p className='text-center'>Create an Account <Link to="/register" className='font-medium text-blue-600 hover:underline'>Register</Link></p>
            </form>
            <div className="flex gap-5 mt-4">
               <a onClick={handleGoogleLogin} className="w-full border border-blue-500 py-2 rounded-lg text-blue-500 font-semibold flex gap-2 justify-center items-center cursor-pointer">
                  <img src={Google} className='w-5 h-5' alt="google" /> <span>Login with Google</span>
               </a>
               <a className="w-full border border-blue-500 py-2 rounded-lg text-blue-500 font-semibold flex gap-2 justify-center items-center cursor-pointer">
                  <img src={Facebook} className='w-5 h-5' alt="google" /> <span>Login with Facebook</span>
               </a>
            </div>
         </div>
      </div>
   );
};

export default Login;