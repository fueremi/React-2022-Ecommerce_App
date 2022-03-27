const LinearProgress = () => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-slate-200 fixed">
      <div className="bg-blue-600 h-2.5 rounded-full animate-loader absolute"></div>
    </div>
  );
};

export default LinearProgress;
