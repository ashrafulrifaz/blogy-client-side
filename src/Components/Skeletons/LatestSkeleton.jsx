const LatestSkeleton = () => {
    return (
        <div className="h-36 flex items-center gap-5">
            <div className="w-2/6 skeleton h-full rounded-lg">
            </div>
            <div className="w-4/6 h-full flex flex-col justify-center gap-3">
                <div className='skeleton w-1/4 h-3 rounded-md'></div>
                <div className="skeleton w-full h-8 rounded-md"></div>
                <div className='skeleton w-full h-14 rounded-md'></div>
            </div>
        </div>
    );
};

export default LatestSkeleton;