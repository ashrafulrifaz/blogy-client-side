import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import moment from "moment";

const FirstCard = ({news}) => {
   const {_id, image, title, published_date, post, category} = news || {}
   const today = new Date();
   const secondsDiff = moment(today).diff(moment(published_date), 'seconds');
   const formattedDiff = moment.duration(secondsDiff, 'seconds').humanize();

   return (
      <div className="first_card">
         <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})} to={`/${category}/${_id}`}>
            <div className="overflow-hidden rounded-lg">
               <img src={image} alt="thumbnail" className="w-full h-40 md:h-60 rounded-lg transition-all duration-300" />
            </div>
            <div className="mt-3 md:space-y-2 px-2 pb-4">
               <p className="text-[#000000b3] font-medium text-[15px]">{formattedDiff} ago</p>
               <h2 className="text-lg md:text-xl font-semibold transition-all duration-300">{title}</h2>
               <p className="text-[#000000b3] font-medium">{post.slice(0, 120)}...<Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})} to={`/${category}/${_id}`} className="text-sm md:text-base ml-2 text-blue-500 hover:underline">Read More</Link></p>
            </div>
         </Link>
      </div>
   );
};

FirstCard.propTypes = {
   news: PropTypes.object
}

export default FirstCard;