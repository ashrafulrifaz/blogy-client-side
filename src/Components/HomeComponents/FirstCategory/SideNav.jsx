import Facebook from '../../../assets/Facebook.png'
import Twitter from '../../../assets/Twitter.png'
import Instagram from '../../../assets/Instagram.png'
import Linkedin from '../../../assets/linkedin.png'
import Youtube from '../../../assets/youtube.png'
import Ads from '../../../assets/ads-3.gif'
import { Link } from "react-router-dom";
import { useState } from 'react'

const SideNav = () => {
   const [add, setAdd] = useState(false)
   
   return (
      <div>
         <div className="space-y-3 mt-1">
            <h2 className="text-lg text-primary font-medium">Find Us On</h2>
            <div className='border border-[#E7E7E7] rounded-lg'>
               <a href="https://www.facebook.com/mdomayer2002" className='w-full border-b border-[#E7E7E7] flex gap-3 items-center p-3'>
                  <img src={Facebook} alt="" />
                  <span className='text-second'>Facebook</span>
               </a>
               <a href="https://x.com" className='w-full border-b border-[#E7E7E7] flex gap-3 items-center p-3'>
                  <img src={Twitter} alt="" />
                  <span className='text-second'>Twitter</span>
               </a>
               <a href="https://instagram.com" className='w-full border-b border-[#E7E7E7] flex gap-3 items-center p-3'>
                  <img src={Instagram} alt="" />
                  <span className='text-second'>Instagram</span>
               </a>
               <a href="https://linkedin.com" className='w-full border-b border-[#E7E7E7] flex gap-3 items-center p-3'>
                  <img src={Linkedin} alt="" />
                  <span className='text-second'>Linkedin</span>
               </a>
               <a href="https://youtube.com" className='w-full flex gap-3 items-center p-3'>
                  <img src={Youtube} alt="" />
                  <span className='text-second'>Youtube</span>
               </a>
            </div>
         </div>
         <div className="mt-4">
            <h2 className="text-lg text-primary font-medium">Popular Category</h2>
            <hr className="mt-2" />
            <ul className="gap-3 mt-3 grid">
               <li>
                  <Link to='/' className="flex justify-between items-center"><span>Business</span><span>10</span></Link>
               </li>
               <li>
                  <Link to='/' className="flex justify-between items-center"><span>Category</span><span>10</span></Link>
               </li>
               <li>
                  <Link to='/' className="flex justify-between items-center"><span>Category</span><span>10</span></Link>
               </li>
               <li>
                  <Link to='/' className="flex justify-between items-center"><span>Category</span><span>10</span></Link>
               </li>
               <li>
                  <Link to='/' className="flex justify-between items-center"><span>Category</span><span>10</span></Link>
               </li>
               <li>
                  <Link to='/' className="flex justify-between items-center"><span>Category</span><span>10</span></Link>
               </li>
               <li>
                  <Link to='/' className="flex justify-between items-center"><span>Category</span><span>10</span></Link>
               </li>
            </ul>
            <div className={`relative mt-5 ${add ? 'hidden': 'block'}`}>
               <img src={Ads} className="w-full h-auto" alt="ads" />
               <span onClick={() => setAdd(true)} className="bg-gray-300 cursor-pointer text-sm font-medium absolute top-0 right-0 px-1.5 py-0.5">X</span>
            </div>
         </div>
      </div>
   );
};

export default SideNav;