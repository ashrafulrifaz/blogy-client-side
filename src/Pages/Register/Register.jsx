import Google from '../../assets/google-login.png'
import Facebook from '../../assets/facebook-login.png'
import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/Provider';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, updateProfile } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import auth from '../../firebase.init';
import { toast } from 'sonner';

const Register = () => {
   const [showPass, setShowPass] = useState(false)
   const [loading, setLoading] = useState(false)
   const {createUser, googleLogin, user, setUser} = useContext(AuthContext)
   const { register, handleSubmit, formState: { errors } } = useForm()
   const navigate = useNavigate()
   const imageLink = `https://api.imgbb.com/1/upload?key=b15b18931efedc83ecd9a2394939e860`
   
   const onSubmit = async (data) => {
      setLoading(true)
      const name = data.name
      const email = data.email
      const password = data.password
      const imageFile = {image: data.image[0]}
      const res = await axios.post(imageLink, imageFile, {
         headers: {
               'Content-Type': 'multipart/form-data',
         }
      })
      if(res.data.success){
         const userInfo = {name, image: res.data.data.display_url, email}
         axios.post('https://blogy-server.vercel.app/users', userInfo)
            .then(() => {
               createUser(email, password)
               .then(() => {
                  setLoading(false)
                  navigate('/')
                  toast.success('Registration Success', {
                     position: "top-center",
                     autoClose: 2000,
                     hideProgressBar: false,
                     closeOnClick: true,
                     pauseOnHover: true,
                     draggable: true,
                     progress: undefined,
                     theme: "colored",
                  });   
                  updateProfile(auth.currentUser, {
                        displayName: name, photoURL: res?.data.data.display_url
                     })
                     .then(() => {
                        console.log('done');
                     })                     
                     setUser({...user, photoURL: res.data.data.display_url})
               })
               .catch(error => {
                  console.log(error.message)
               })
            })
      }      
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
                  toast.success('Registration Success', {
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
            <h2 className="text-xl font-semibold text-center">Create your account</h2>
            <form  onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-4">
               <div>
                  <label htmlFor="name" className='font-medium'>Name</label>
                  <input 
                  id="name" 
                  type="text" 
                  name='name'
                  placeholder="Enter your name.." 
                  className="w-full mt-2 border border-gray-300 py-2 px-3 rounded-lg focus:border-gray-500 focus:outline-none" 
                  {...register("name", { required: true })} />
                  {errors.name && <span className='text-sm font-medium text-red-500'>Name is required</span>}
               </div>
               <div>
                  <label htmlFor="image" className='font-medium'>Image</label>
                  <input 
                  id="image" 
                  type="file"
                  name='image'
                  accept='.jpg, .png, .webp' 
                  className="w-full mt-2 border border-gray-300 py-2 px-3 rounded-lg focus:border-gray-500 focus:outline-none" 
                  {...register("image", { required: true })} />
                  {errors.image && <span className='text-sm font-medium text-red-500'>Image is required</span>}
               </div>
               <div>
                  <label htmlFor="email" className='font-medium'>Email</label>
                  <input 
                  id="email" 
                  type="email" 
                  name='email'
                  placeholder="Enter your email" 
                  className="w-full mt-2 border border-gray-300 py-2 px-3 rounded-lg focus:border-gray-500 focus:outline-none" 
                  {...register("email", { required: true })} />
                  {errors.email && <span className='text-sm font-medium text-red-500'>Email is required</span>}
               </div>
               <div className='relative'>
                  <label htmlFor="password" className='font-medium'>Password</label>
                  <input 
                  id="password"
                  name='password' 
                  type={showPass ? 'text' : 'password'} 
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
            </form>
            <div className="flex gap-5 mt-4">
               <a onClick={handleGoogleLogin} className="w-full border border-blue-500 py-2 rounded-lg text-blue-500 font-semibold flex gap-2 justify-center items-center cursor-pointer">
                  <img src={Google} className='w-5 h-5' alt="google" /> <span>Register with Google</span>
               </a>
               <a className="w-full border border-blue-500 py-2 rounded-lg text-blue-500 font-semibold flex gap-2 justify-center items-center cursor-pointer">
                  <img src={Facebook} className='w-5 h-5' alt="google" /> <span>Register with Facebook</span>
               </a>
            </div>
         </div>
      </div>
   );
};

export default Register;