import moment from 'moment';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PostCard = ({news}) => {
   const {title, image, post, category, _id, published_date} = news || {}
   const today = new Date();
   const secondsDiff = moment(today).diff(moment(published_date), 'seconds');
   const formattedDiff = moment.duration(secondsDiff, 'seconds').humanize();

   return (
      <div>
         <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})} to={`/${category}/${_id}`}>
            <div className="border-t border-gray-300 py-4 flex gap-3 post_card">
               <div className="w-2/6 overflow-hidden rounded-lg">
                  <img src={image} className="w-full h-full rounded-lg transition-all duration-300" alt="" />
               </div>
               <div className="w-4/6">
                  <p className='font-medium'>{formattedDiff} ago</p>
                  <h2 className="text-xl font-semibold my-1 transition-all duration-300">{title}</h2>
                  <p className='text-gray-600'>{post.slice(0, 130)}... <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})} to={`/${category}/${_id}`} className='text-[15px] text-blue-500 hover:underline'>Read More</Link></p>
               </div>
            </div>
         </Link>
      </div>
   );
};

PostCard.propTypes = {
   news: PropTypes.object
}

export default PostCard;