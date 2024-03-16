import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const CategoryItem = ({category, posts}) => {
    const postCount = posts?.filter(post => post.category === category.name)

    return (
        <li>
            <Link to={`/${category?.slag}`} className="flex justify-between items-center capitalize font-medium hover:text-blue-500 transition-all"><span>{category?.name}</span><span>{postCount?.length}</span></Link>
        </li>
    );
};

CategoryItem.propTypes = {
    category: PropTypes.object,
    posts: PropTypes.object
}

export default CategoryItem;