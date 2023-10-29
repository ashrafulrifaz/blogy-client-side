import error from '../../assets/404.jpg'

const ErrorPage = () => {
   return (
      <div>
         <img src={error} className='w-1/2 mx-auto' alt="" />
      </div>
   );
};

export default ErrorPage;