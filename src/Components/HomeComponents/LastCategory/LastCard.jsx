import moment from 'moment';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LastCard = ({news}) => {
   const {image, title, published_date, post, _id, category} = news || {}
   const today = new Date();
   const secondsDiff = moment(today).diff(moment(published_date), 'seconds');
   const formattedDiff = moment.duration(secondsDiff, 'seconds').humanize();

   return (
      <div className='last_card'>
         <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})} to={`/${category}/${_id}`}>
            <div className="overflow-hidden rounded-lg">
               <img src={image} alt="thumbnail" className='w-full h-40 md:h-32 rounded-lg transition-all duration-300' />
            </div>
            <div className="py-3">
               <p className='text-sm font-medium'>{formattedDiff} ago</p>
               <h2 className='text-lg leading-snug font-semibold mt-1'>{title}</h2>            
               <p className='text-[#000000b3] font-medium hidden transition-all duration-300' id='description'>{post.slice(0, 180)}...</p>
               <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})} to={`/${category}/${_id}`} className="text-sm text-blue-500 hover:underline">Read More</Link>
            </div>
         </Link>
      </div>
   );
};

LastCard.propTypes = {
   news: PropTypes.object
}

export default LastCard;