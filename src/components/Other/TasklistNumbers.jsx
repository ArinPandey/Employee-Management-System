// import React from 'react'

// const TasklistNumbers = ({data}) => {
//   return (
//     <div className="flex mt-10 justify-between gap-5 screen">
        
//         {/* New Task - Blue Accent */}
//         <div className="rounded-xl w-[45%] py-6 px-9 bg-[#2c2c2c] border border-blue-500/20 shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
//             <h2 className="text-3xl font-bold text-blue-400">{data.taskCount.newTask}</h2>
//             <h3 className="text-xl font-medium text-gray-400 mt-1">New Task</h3>
//         </div>

//         {/* Completed - Green Accent */}
//         <div className="rounded-xl w-[45%] py-6 px-9 bg-[#2c2c2c] border border-green-500/20 shadow-lg hover:shadow-green-500/10 transition-all duration-300">
//             <h2 className="text-3xl font-bold text-green-400">{data.taskCount.completed}</h2>
//             <h3 className="text-xl font-medium text-gray-400 mt-1">Completed Task</h3>
//         </div>

//         {/* Accepted - Yellow Accent */}
//         <div className="rounded-xl w-[45%] py-6 px-9 bg-[#2c2c2c] border border-yellow-500/20 shadow-lg hover:shadow-yellow-500/10 transition-all duration-300">
//             <h2 className="text-3xl font-bold text-yellow-400">{data.taskCount.active}</h2>
//             <h3 className="text-xl font-medium text-gray-400 mt-1">Accepted Task</h3>
//         </div>

//         {/* Failed - Red Accent */}
//         <div className="rounded-xl w-[45%] py-6 px-9 bg-[#2c2c2c] border border-red-500/20 shadow-lg hover:shadow-red-500/10 transition-all duration-300">
//             <h2 className="text-3xl font-bold text-red-400">{data.taskCount.failed}</h2>
//             <h3 className="text-xl font-medium text-gray-400 mt-1">Failed Task</h3>
//         </div>

//     </div>
//   )
// }

// export default TasklistNumbers


import React from 'react';

const TasklistNumbers = ({ data }) => {
  // Early return if data or taskCount is missing
  if (!data || !data.taskCount) {
    return <div className="text-red-600">Loading task stats...</div>;
  }

  const { newTask = 0, completed = 0, active = 0, failed = 0 } = data.taskCount;
  console.log("TasklistNumbers props:", data);


  return (
    <div className="flex justify-between gap-5 screen mt-10">
      <div className="w-[45%] py-6 px-9 bg-white/50 rounded-xl">
        <h2 className="text-3xl font-semibold">{newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>

      <div className="w-[45%] py-6 px-9 bg-white/50 rounded-xl">
        <h2 className="text-3xl font-semibold">{completed}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>

      <div className="w-[45%] py-6 px-9 bg-white/50 rounded-xl">
        <h2 className="text-3xl font-semibold">{active}</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>

      <div className="w-[45%] py-6 px-9 bg-white/50 rounded-xl">
        <h2 className="text-3xl font-semibold">{failed}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TasklistNumbers;

