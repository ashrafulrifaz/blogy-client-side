import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import useCategories from "../../Hooks/useCategories";

const Footer = () => {
   const {categories} = useCategories()

   return (
      <div>
         <div className="border-t border-gray-300 py-10">
            <div className="max-w-[90%] mx-auto grid grid-cols-4 gap-8">
               <div>
                  <Link to="/">
                     <h2 className="font-mono font-bold text-3xl">BLOGY</h2>
                  </Link>
                  <p className="mt-4 text-[#000000b3]">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
               </div>
               <div>
                  <h2 className="text-lg font-semibold">Links</h2>
                  <ul className="grid gap-3 mt-4">
                     <li>
                        <Link to="/" className="capitalize font-medium">Home</Link>
                     </li>
                     <li>
                        <Link to="/about" className="capitalize font-medium">About</Link>
                     </li>
                     <li>
                        <Link to="/terms&conditions" className="capitalize font-medium">Terms & Condition</Link>
                     </li>
                     <li>
                        <Link to="/privacy-policy" className="capitalize font-medium">Privacy Policy</Link>
                     </li>
                  </ul>
               </div>
               <div>
                  <h2 className="text-lg font-semibold">Categories</h2>
                  <ul className="grid gap-3 mt-4">
                     {
                        categories?.map(category => (
                           <li key={category._id}>
                              <Link to={category.slag} className="capitalize font-medium">{category?.name}</Link>
                           </li>                           
                        )).slice(0, 4)
                     }
                  </ul>
               </div>
               <div>
                  <h2 className="text-lg font-semibold">Follow us Socially</h2>
                  <div className="flex gap-5 mt-5">
                     <a href="https://www.facebook.com/drisshoofficial" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-2xl text-[#0866FF]" />
                     </a>
                     <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                        <FaXTwitter className="text-2xl text-black" />
                     </a>
                     <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn className="text-2xl text-[#0A66C2]" />
                     </a>
                     <a href="https://www.youtube.com/@drissho_official" target="_blank" rel="noopener noreferrer">
                        <FaYoutube className="text-2xl text-[#FF0000]" />
                     </a>
                  </div>
               </div>
            </div>
         </div>         
         <div className="border-t border-gary-300 py-4">
            <p className="text-center text-[#000000b3]">Copyright 2024 Drissho News All Right Reserved.</p>
         </div>
      </div>
   );
};

export default Footer;