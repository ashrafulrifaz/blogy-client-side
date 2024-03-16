import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import loading from '../../../assets/loading.gif'
import moment from 'moment';

const BannerCard = ({news}) => {
   const {title, image, published_date, _id, category} = news || {}
   const today = new Date();
   const secondsDiff = moment(today).diff(moment(published_date), 'seconds');
   const formattedDiff = moment.duration(secondsDiff, 'seconds').humanize();

   const imageStyle = {
      background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${image ? image : loading}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat'
   }

   return (
      <div style={imageStyle} className='h-60 rounded-lg banner_card'>
         <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})} to={`/${category}/${_id}`}>
            <div className='p-5 relative w-full h-full flex flex-col justify-end'>
               <div className='w-full cursor-pointer'>
                  <p className='text-sm font-medium text-[#ffffffb3]'>{formattedDiff} ago</p>
                  <h2 className='text-xl font-semibold mt-1 text-white transition-all duration-300'>{title}</h2>
               </div>
            </div>
         </Link>
      </div>
   );
};

BannerCard.propTypes = {
   news: PropTypes.object
}

export default BannerCard;