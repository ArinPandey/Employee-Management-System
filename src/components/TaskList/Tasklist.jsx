// import React from 'react'
// import AcceptTask from '/src/components/TaskList/AcceptTask'
// import NewTask from '/src/components/TaskList/NewTask'
// import CompleteTask from '/src/components/TaskList/CompleteTask'
// import FailedTask from '/src/components/TaskList/FailedTask'

// const Tasklist = ({data}) => {
//   console.log(data)

//   return (
//     <div id="tasklist" className="h-[55%] w-full py-5 mt-10 flex items-center justify-around rounded-md overflow-x-auto gap-5">

//         {data.tasks.map((elem,idx)=>{

//           if(elem.active){
//             return <AcceptTask key={idx} data={elem}/>
//           }

//           if(elem.newTask){
//             return <NewTask key={idx} data={elem}/>
//           }

//           if(elem.completed){
//             return <CompleteTask key={idx} data={elem}/>
//           }

//           if(elem.failed){
//             return <FailedTask key={idx} data={elem}/> 
//           }
//         })}

//       {/*    	<div className="h-full w-[300px] p-5 bg-lime-700 rounded-xl flex-shrink-0">
//           		<div className="flex justify-between items-center">
//           			<h3 className="bg-red-600 text-sm py-1 px-3 rounded">Hello</h3>
//           			<h4>20 feb 2024</h4>
//           		</div>
//           		<h2 className="mt-5 text-2xl font-semibold">Make a Youtube video</h2>
//           		<p className='text-sm mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing, elit. Dolore recusandae ipsam impedit culpa quos consequatur quam quisquam aliquid ducimus, delectus</p>
//           	</div>

//           	<div className="h-full w-[300px] p-5 bg-lime-700 rounded-xl flex-shrink-0">
//           		<div className="flex justify-between items-center">
//           			<h3 className="bg-red-600 text-sm py-1 px-3 rounded">Hello</h3>
//           			<h4>20 feb 2024</h4>
//           		</div>
//           		<h2 className="mt-5 text-2xl font-semibold">Make a Youtube video</h2>
//           		<p className='text-sm mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing, elit. Dolore recusandae ipsam impedit culpa quos consequatur quam quisquam aliquid ducimus, delectus</p>
//           	</div>

//           	<div className="h-full w-[300px] p-5 bg-lime-700 rounded-xl flex-shrink-0">
//       		   	<div className="flex justify-between items-center">
//           			<h3 className="bg-red-600 text-sm py-1 px-3 rounded">Hello</h3>
//           			<h4>20 feb 2024</h4>
//           		</div>
//           		<h2 className="mt-5 text-2xl font-semibold">Make a Youtube video</h2>
//           		<p className='text-sm mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing, elit. Dolore recusandae ipsam impedit culpa quos consequatur quam quisquam aliquid ducimus, delectus</p>	
//           	</div>

//           	<div className="h-full w-[300px] p-5 bg-lime-700 rounded-xl flex-shrink-0">
//           	    <div className="flex justify-between items-center">
//           			<h3 className="bg-red-600 text-sm py-1 px-3 rounded">Hello</h3>
//           			<h4>20 feb 2024</h4>
//           		</div>
//           		<h2 className="mt-5 text-2xl font-semibold">Make a Youtube video</h2>
//           		<p className='text-sm mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing, elit. Dolore recusandae ipsam impedit culpa quos consequatur quam quisquam aliquid ducimus, delectus</p>
//           	</div>

//           	<div className="h-full w-[300px] p-5 bg-lime-700 rounded-xl flex-shrink-0">
//           	    <div className="flex justify-between items-center">
//           			<h3 className="bg-red-600 text-sm py-1 px-3 rounded">Hello</h3>
//           			<h4>20 feb 2024</h4>
//           		</div>
//           		<h2 className="mt-5 text-2xl font-semibold">Make a Youtube video</h2>
//           		<p className='text-sm mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing, elit. Dolore recusandae ipsam impedit culpa quos consequatur quam quisquam aliquid ducimus, delectus</p>
//           	</div>

//           	<div className="h-full w-[300px] p-5 bg-lime-700 rounded-xl flex-shrink-0">
//           	    <div className="flex justify-between items-center">
//           			<h3 className="bg-red-600 text-sm py-1 px-3 rounded">Hello</h3>
//           			<h4>20 feb 2024</h4>
//           		</div>
//           		<h2 className="mt-5 text-2xl font-semibold">Make a Youtube video</h2>
//           		<p className='text-sm mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing, elit. Dolore recusandae ipsam impedit culpa quos consequatur quam quisquam aliquid ducimus, delectus</p>
//           	</div>*/}
//     </div>
//   )
// }

// export default Tasklist

import React from 'react';
import AcceptTask from '/src/components/TaskList/AcceptTask';
import NewTask from '/src/components/TaskList/NewTask';
import CompleteTask from '/src/components/TaskList/CompleteTask';
import FailedTask from '/src/components/TaskList/FailedTask';

const Tasklist = ({ data }) => {
  // Check if data or data.tasks is null/undefined before accessing tasks
  if (!data || !data.tasks) {
    // You can display a loading spinner or a message saying "No tasks available"
    return <div>No tasks available</div>;
  }

  return (
    <div id="tasklist" className="h-[55%] w-full py-5 mt-10 flex items-center justify-around rounded-md overflow-x-auto gap-5">
      {data.tasks.map((elem, idx) => {
        // Map through the tasks and return different components based on their properties
        if (elem.active) {
          return <AcceptTask key={idx} data={elem} />;
        }

        if (elem.newTask) {
          return <NewTask key={idx} data={elem} />;
        }

        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />;
        }

        if (elem.failed) {
          return <FailedTask key={idx} data={elem} />;
        }

        return null; // Return null if none of the conditions match
      })}
    </div>
  );
};

export default Tasklist;
