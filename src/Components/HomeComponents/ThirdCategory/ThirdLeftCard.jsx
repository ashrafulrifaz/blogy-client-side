import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ThirdLeftCard = ({news}) => {
   const {title, published_date, post, _id, category} = news

   return (
      <div className='border-t border-slate-300 py-6 rounded' id='third_card'>
         <div className="space-y-2">
            <p className="text-[#000000b3] font-medium text-[15px]">{published_date.slice(0, 10)}</p>
            <h2 className="text-xl font-medium">{title}</h2>
            <p className="text-[#000000b3] font-medium">{post.slice(0, 120)}...<Link to={`/${category}/${_id}`} className="ml-2 text-blue-500 hover:underline">Read More</Link></p>
         </div>
      </div>
   );
};

ThirdLeftCard.propTypes = {
   news: PropTypes.object
}

export default ThirdLeftCard;