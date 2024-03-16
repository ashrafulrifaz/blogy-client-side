const SideNavSkeleton = () => {
    return (
        <div className="flex justify-between items-center">
            <div className='skeleton w-2/5 h-4 rounded-md'></div>
            <div className="skeleton w-1/5 h-4 rounded-md"></div>
        </div>
    );
};

export default SideNavSkeleton;