import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import error from '../../assets/404.jpg'

const ErrorPage = () => {
   return (
      <div>
         <Header></Header>
         <Navbar></Navbar>
         <img src={error} className='w-1/2 mx-auto' alt="" />
         <Footer></Footer>
      </div>
   );
};

export default ErrorPage;