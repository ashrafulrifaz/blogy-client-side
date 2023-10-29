import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SecondCard = ({news}) => {
   const {image, title, published_date, _id, category} = news

   return (
      <div className='border border-gray-300 rounded-lg'>
         <img src={image} className='w-full h-44 rounded-t-xl' alt="thumbnail" />
         <div className="p-3">
            <p className="text-[#000000b3] font-medium text-[15px]">{published_date.slice(0, 10)}</p>
            <h2 className="text-lg font-medium">{title}</h2>
            <Link to={`/${category}/${_id}`} className="text-blue-500 underline underline-offset-2 text-[15px]">See Post</Link>
         </div>
      </div>
   );
};

SecondCard.propTypes = {
   news: PropTypes.object
}

export default SecondCard;