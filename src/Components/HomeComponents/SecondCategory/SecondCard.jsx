import moment from 'moment';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SecondCard = ({news}) => {
   const {image, title, published_date, _id, category} = news || {}
   const today = new Date();
   const secondsDiff = moment(today).diff(moment(published_date), 'seconds');
   const formattedDiff = moment.duration(secondsDiff, 'seconds').humanize();

   return (
      <div className='border border-gray-300 rounded-lg second_card'>
         <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})} to={`/${category}/${_id}`}>
            <div className="overflow-hidden rounded-lg">
               <img src={image} className='w-full h-44 rounded-t-xl transition-all duration-300' alt="thumbnail" />
            </div>
            <div className="p-3">
               <p className="text-[#000000b3] font-medium text-[15px]">{formattedDiff} ago</p>
               <h2 className="text-lg font-semibold transition-all duration-300">{title}</h2>
               <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})} to={`/${category}/${_id}`} className="text-blue-500 underline underline-offset-2 text-[15px]">See Post</Link>
            </div>
         </Link>
      </div>
   );
};

SecondCard.propTypes = {
   news: PropTypes.object
}

export default SecondCard;