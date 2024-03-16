import moment from 'moment';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ThirdLeftCard = ({news}) => {
   const {title, published_date, post, _id, category} = news || {}
   const today = new Date();
   const secondsDiff = moment(today).diff(moment(published_date), 'seconds');
   const formattedDiff = moment.duration(secondsDiff, 'seconds').humanize();

   return (
      <div className='border-t border-slate-300 py-6 rounded' id='third_card'>
         <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})} to={`/${category}/${_id}`}>
            <div className="space-y-2">
               <p className="text-[#000000b3] font-medium text-[15px]">{formattedDiff} ago</p>
               <h2 className="text-lg md:text-xl font-semibold transition-all duration-300">{title}</h2>
               <p className="text-[#000000b3] font-medium">{post.slice(0, 120)}...<Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})} to={`/${category}/${_id}`} className="ml-2 text-blue-500 hover:underline">Read More</Link></p>
            </div>
         </Link>
      </div>
   );
};

ThirdLeftCard.propTypes = {
   news: PropTypes.object
}

export default ThirdLeftCard;