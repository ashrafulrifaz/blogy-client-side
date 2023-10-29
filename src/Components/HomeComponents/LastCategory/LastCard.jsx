import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const LastCard = ({news}) => {
   const {image, title, published_date, post, _id, category} = news

   return (
      <div className='last_card'>
         <img src={image} alt="thumbnail" className='w-full h-32 rounded-lg' />
         <div className="py-3">
            <p className='text-sm font-medium'>{published_date.slice(0, 10)}</p>
            <h2 className='text-lg leading-snug font-medium mt-1'>{title}</h2>            
            <p className='text-[#000000b3] font-medium hidden' id='description'>{post.slice(0, 180)}...</p>
            <Link to={`/${category}/${_id}`} className="text-sm text-blue-500 underline">Read More</Link>
         </div>
      </div>
   );
};

LastCard.propTypes = {
   news: PropTypes.object
}

export default LastCard;