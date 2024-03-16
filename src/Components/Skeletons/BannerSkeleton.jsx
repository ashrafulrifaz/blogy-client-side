const BannerSkeleton = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="skeleton row-span-2 w-[340px] h-[500px] rounded-lg">

            </div>
            <div className="skeleton col-span-1 w-[340px] h-60 rounded-lg">

            </div>
            <div className="skeleton col-span-1 w-[340px] h-60 rounded-lg">

            </div>
            <div className="skeleton col-span-1 w-[340px] h-60 rounded-lg">

            </div>
            <div className="skeleton col-span-1 w-[340px] h-60 rounded-lg">

            </div>
        </div>
    );
};

export default BannerSkeleton;