const LinearProgress = () => {
  return (
    <div className="w-full bg-indigo-400 rounded-full h-2.5 dark:bg-slate-200 fixed">
      <div className="bg-indigo-500 h-2.5 rounded-full animate-loader absolute"></div>
    </div>
  );
};

export default LinearProgress;
