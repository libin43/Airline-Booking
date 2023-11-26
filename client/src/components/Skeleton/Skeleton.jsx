/* eslint-disable react/prop-types */

export const Skeleton = ({ rows }) => {
  let skelRows = [];
  for (let i = 0; i < rows; i++) {
    skelRows.push(i);
  }

  return (
    <div>
      {skelRows.map((row, index) => (
        <div key={index} className="group relative overflow-hidden bg-white shadow hover:shadow-md hover:-mt-2 rounded-md transition-all xl:mx-20 mx-1 my-5 duration-500 h-fit">
          <div className="px-4">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 min-w-[56px] bg-gray-300 rounded-md animate-pulse"></div>
              <div className="ltr:ml-3 rtl:mr-3 cursor-pointer">
                <div className="inline-block text-lg font-semibold hover:text-blue-600 transition-all duration-500 ltr:mr-1 rtl:ml-1 bg-gray-300 h-6 w-24 animate-pulse"></div>
              </div>
              <span className="absolute right-80 bg-gray-300 h-6 w-16 animate-pulse"></span>
              <span className="absolute right-7 bg-gray-300 h-6 w-24 animate-pulse"></span>
            </div>
            <div className="text-slate-400 grid grid-flow-col text-center">
              <div className="h-full w-full ">
                <p className="text-slate-600 font-semibold bg-gray-300 h-6 w-16 animate-pulse"></p>
                <p className="bg-gray-300 h-6 w-24 animate-pulse"></p>
                <p className="bg-gray-300 h-6 w-40 animate-pulse"></p>
              </div>
              <div className="h-full w-full ">
                <div className="h-14 w-14 m-auto bg-gray-300 rounded-full animate-pulse"></div>
                <p className="bg-gray-300 h-6 w-16 animate-pulse"></p>
              </div>
              <div className="h-full w-full  ">
                <p className="text-slate-600 font-semibold bg-gray-300 h-6 w-16 animate-pulse"></p>
                <p className="bg-gray-300 h-6 w-24 animate-pulse"></p>
                <p className="bg-gray-300 h-6 w-40 animate-pulse"></p>
              </div>
            </div>
          </div>
          <div className="px-6 py-2 bg-slate-50 flex justify-between items-center">
            <div className="space-x-2 grid grid-flow-col">
              <span>
                {' '}
                <div className="bg-gray-300 h-4 w-4 animate-pulse"></div>
              </span>
              <span className="inline-block ltr:mr-1 rtl:ml-1 font-semibold bg-gray-300 h-4 w-16 animate-pulse"></span>
              <span className="inline-block ltr:mr-1 rtl:ml-1 text-slate-400 bg-gray-300 h-4 w-32 animate-pulse"></span>
            </div>
            <div className="cursor-pointer btn btn-sm text-sm px-2 py-1 rounded-md hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white ltr:md:ml-2 rtl:md:mr-2 md:w-auto bg-gray-300 h-8 w-24 animate-pulse"></div>
          </div>
          <div className="btn btn-icon rounded-full bg-blue-600/5 hover:bg-blue-600 border-blue-600/10 hover:border-blue-600 text-blue-600 hover:text-white absolute top-0 right-0 m-3 bg-gray-300 h-8 w-8 animate-pulse"></div>
        </div>
      ))}
    </div>
  );
};
