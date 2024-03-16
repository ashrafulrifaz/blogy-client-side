const FirstCatSkeleton = () => {
    return (
        <div className="space-y-4">
            <div className="w-full skeleton h-60 rounded-lg"></div>
            <div className='skeleton w-2/6 h-4 rounded-md'></div>
            <div className="skeleton w-full h-12 rounded-md"></div>
            <div className='skeleton w-full h-24 rounded-md'></div>
        </div>
    );
};

export default FirstCatSkeleton;