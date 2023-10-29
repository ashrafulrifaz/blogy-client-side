import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PostCard = ({news}) => {
   const {title, image, post, category, _id, published_date} = news

   return (
      <div className="border-t border-gray-300 py-4 flex gap-3" id='third_card'>
         <div className="w-2/6">
            <img src={image} className="w-full h-full rounded-md" alt="" />
         </div>
         <div className="w-4/6">
            <p className='font-medium'>{published_date.slice(0, 10)}</p>
            <h2 className="text-xl font-medium my-1">{title}</h2>
            {/* <div className="my-2">
               <span className="py-1 px-2 bg-blue-400 text-white font-medium uppercase text-[13px] rounded-md">{category}</span>
            </div> */}
            <p className='text-gray-600'>{post.slice(0, 130)}... <Link to={`/${category}/${_id}`} className='text-[15px] text-blue-500 hover:underline'>Read More</Link></p>
         </div>
      </div>
   );
};

PostCard.propTypes = {
   news: PropTypes.object
}

export default PostCard;