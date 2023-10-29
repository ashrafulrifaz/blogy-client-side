import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const FirstCard = ({news}) => {
   const {_id, image, title, published_date, post, category} = news

   return (
      <div>
         <img src={image} alt="thumbnail" className="w-full h-60 rounded-lg" />
         <div className="mt-3 space-y-2 px-2 pb-4">
            <p className="text-[#000000b3] font-medium text-[15px]">{published_date.slice(0, 10)}</p>
            <h2 className="text-2xl font-medium">{title}</h2>
            <p className="text-[#000000b3] font-medium">{post.slice(0, 120)}...<Link to={`/${category}/${_id}`} className="ml-2 text-blue-500 hover:underline">Read More</Link></p>
         </div>
      </div>
   );
};

FirstCard.propTypes = {
   news: PropTypes.object
}

export default FirstCard;