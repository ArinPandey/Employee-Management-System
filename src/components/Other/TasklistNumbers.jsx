// import React from 'react'

// const TasklistNumbers = ({data}) => {
//   return (
//     <div className="flex justify-between gap-5  screen mt-10">

//     	<div className="w-[45%] py-6 px-9 bg-red-400 rounded-xl">
//     		<h2 className="text-3xl font-semibold">{data.taskCount.newTask}</h2>
//     		<h3 className="text-xl font-medium">New Task</h3>
//     	</div>

//     	<div className="w-[45%] py-6 px-9 bg-blue-400 rounded-xl">
//     		<h2 className="text-3xl font-semibold">{data.taskCount.completed}</h2>
//     		<h3 className="text-xl font-medium">Completed Task</h3>
//     	</div>

//     	<div className="w-[45%] py-6 px-9 bg-yellow-400 rounded-xl">
//     		<h2 className="text-3xl font-semibold">{data.taskCount.active}</h2>
//     		<h3 className="text-xl font-medium">Accepted Task</h3>
//     	</div>

//     	<div className="w-[45%] py-6 px-9 bg-green-400 rounded-xl">
//     		<h2 className="text-3xl font-semibold">{data.taskCount.failed}</h2>
//     		<h3 className="text-xl font-medium">Failed Task</h3>
//     	</div>

//     </div> ) }

// export default TasklistNumbers;

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
      <div className="w-[45%] py-6 px-9 bg-red-700 rounded-xl">
        <h2 className="text-3xl font-semibold">{newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>

      <div className="w-[45%] py-6 px-9 bg-blue-700 rounded-xl">
        <h2 className="text-3xl font-semibold">{completed}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>

      <div className="w-[45%] py-6 px-9 bg-yellow-600 rounded-xl">
        <h2 className="text-3xl font-semibold">{active}</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>

      <div className="w-[45%] py-6 px-9 bg-green-600 rounded-xl">
        <h2 className="text-3xl font-semibold">{failed}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TasklistNumbers;

