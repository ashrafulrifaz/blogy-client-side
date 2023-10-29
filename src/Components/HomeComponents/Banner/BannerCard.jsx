import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import loading from '../../../assets/loading.gif'

const BannerCard = ({news}) => {
   const {title, image, published_date, _id, category} = news
   
   const imageStyle = {
      background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${image ? image : loading}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat'
   }

   return (
      <div style={imageStyle} className='p-5 rounded-lg banner_card relative w-full h-60 flex flex-col justify-end'>
         <Link to={`/${category}/${_id}`}>
            <div className='w-full cursor-pointer'>
               <p className='text-sm font-medium text-[#ffffffb3]'>{published_date.slice(0, 10)}</p>
               <h2 className='text-xl font-medium mt-1 text-white'>{title}</h2>
            </div>
         </Link>
      </div>
   );
};

BannerCard.propTypes = {
   news: PropTypes.object
}

export default BannerCard;