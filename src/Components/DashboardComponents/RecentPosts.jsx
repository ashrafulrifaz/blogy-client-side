import moment from "moment";

const RecentPosts = ({news}) => {
    const {title, published_date} = news || {}
    const today = new Date();
    const secondsDiff = moment(today).diff(moment(published_date), 'seconds');
    const formattedDiff = moment.duration(secondsDiff, 'seconds').humanize();

    return (
        <div className="border border-gray-300 p-3 rounded-lg">
            <h2 className="font-semibold">{title}</h2>
            <p className="text-sm font-medium mt-1">Posted {formattedDiff} ago</p>
        </div>
    );
};

export default RecentPosts;