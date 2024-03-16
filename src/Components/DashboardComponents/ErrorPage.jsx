import error from '../assets/404.jpg'
const ErrorPage = () => {
   return (
      <div>
         <img src={error} className='w-2/5 mx-auto' alt="" />
      </div>
   );
};

export default ErrorPage;