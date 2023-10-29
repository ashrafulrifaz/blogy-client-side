import { Link } from "react-router-dom";
import Facebook from '../../assets/Facebook.png'
import Twitter from '../../assets/Twitter.png'
import Instagram from '../../assets/Instagram.png'
import Linkedin from '../../assets/linkedin.png'
import Youtube from '../../assets/youtube.png'

const Footer = () => {
   return (
      <div>
         <div className="border-t border-gray-300 py-10">
            <div className="max-w-[83%] mx-auto grid grid-cols-4 gap-8">
               <div>
                  <h2 className="font-semibold text-2xl">Blogy</h2>
                  <p className="mt-4 text-[#000000b3]">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
               </div>
               <div>
                  <h2 className="text-lg font-semibold">Categories</h2>
                  <ul className="grid gap-3 mt-4">
                     <li>
                        <Link to="/">Home</Link>
                     </li>
                     <li>
                        <Link to="/">About</Link>
                     </li>
                     <li>
                        <Link to="/">Terms & Condition</Link>
                     </li>
                     <li>
                        <Link to="/">Privacy Policy</Link>
                     </li>
                  </ul>
               </div>
               <div>
                  <h2 className="text-lg font-semibold">Categories</h2>
                  <ul className="grid gap-3 mt-4">
                     <li>
                        <Link to="/">Home</Link>
                     </li>
                     <li>
                        <Link to="/">About</Link>
                     </li>
                     <li>
                        <Link to="/">Terms & Condition</Link>
                     </li>
                     <li>
                        <Link to="/">Privacy Policy</Link>
                     </li>
                  </ul>
               </div>
               <div>
                  <h2 className="text-lg font-semibold">Follow us Socially</h2>
                  <div className="flex gap-4 mt-5">
                     <a href="#">
                        <img src={Facebook} alt="Facebook" />
                     </a>
                     <a href="#">
                        <img src={Twitter} alt="Facebook" />
                     </a>
                     <a href="#">
                        <img src={Instagram} alt="Facebook" />
                     </a>
                     <a href="#">
                        <img src={Linkedin} alt="Facebook" />
                     </a>
                     <a href="#">
                        <img src={Youtube} alt="Facebook" />
                     </a>
                  </div>
               </div>
            </div>
         </div>         
         <div className="border-t border-gary-300 py-4">
            <p className="text-center text-[#000000b3]">Copyright 2023 Blogy All Right Reserved.</p>
         </div>
      </div>
   );
};

export default Footer;