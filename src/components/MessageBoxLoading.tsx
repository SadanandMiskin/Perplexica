const MessageBoxLoading = () => {
return (
    <div className="flex items-start space-x-3 w-full">
      <div className="flex-shrink-0 mt-1">
        <div className="w-4 h-4 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
      </div>
      <div className="flex flex-col space-y-2 w-full lg:w-9/12 bg-light-primary dark:bg-dark-primary animate-pulse rounded-lg py-3">
        <div className="h-2 rounded-full w-full bg-gray-400 dark:bg-gray-700" />
        <div className="h-2 rounded-full w-9/12 bg-gray-400 dark:bg-gray-700" />
        <div className="h-2 rounded-full w-10/12 bg-gray-400 dark:bg-gray-700" />
      </div>
    </div>
  )
};

export default MessageBoxLoading;
