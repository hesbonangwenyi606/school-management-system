export const StudentCardSkeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 animate-pulse">
      <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-3" />

      <div className="h-3 bg-gray-300 rounded w-2/3 mx-auto mb-2" />
      <div className="h-3 bg-gray-200 rounded w-1/2 mx-auto mb-4" />

      <div className="flex justify-between text-xs text-gray-300 mb-1 px-2">
        <div className="h-2 w-16 bg-gray-200 rounded" />
        <div className="h-2 w-10 bg-gray-200 rounded" />
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2 mb-2" />
      <div className="bg-gray-300 h-2 rounded-full w-3/4" />

      <div className="h-3 bg-gray-300 rounded w-1/3 mx-auto mt-4" />
    </div>
  );
};
