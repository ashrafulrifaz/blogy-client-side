const SecondCatSkeleton = () => {
    return (
        <div className="space-y-4">
            <div className="w-full skeleton h-40 rounded-lg"></div>
            <div className='skeleton w-1/2 h-4 rounded-md'></div>
            <div className="skeleton w-full h-20 rounded-md"></div>
            <div className='skeleton w-2/6 h-6 rounded-md'></div>
        </div>
    );
};

export default SecondCatSkeleton;