import React,{useContext} from 'react'
import{AuthContext} from '../../context/AuthProvider'

const AllTask = () => {

  const [userData,setUserData] = useContext(AuthContext)

  console.log(userData)


  return (
    <div className="bg-white/20 p-5 rounded mt-10 h-55">

      <div className="py-2 px-4 flex justify-between rounded mb-2 bg-stone-600">
            <h2 className="w-1/5 !text-amber-400">Employee Name</h2>
            <h3 className="w-1/5 !text-sky-400">New Task</h3>
            <h5 className="w-1/5 !text-green-400">Active</h5>
            <h5 className="w-1/5 !text-purple-400">Completed</h5>
            <h5 className="w-1/5 !text-orange-400">Failed</h5>
      </div>

        <div className="h-[80%] overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {userData.map(function(elem,idx){
          return(
              <div key={idx} className="py-2 px-4 flex justify-between rounded mb-2 bg-stone-600">
                <h2 className="w-1/5 bg-stone-500">{elem.firstname}</h2>
                <h3 className="w-1/5 bg-stone-500">{elem.taskCount.newTask}</h3>
                <h5 className="w-1/5 bg-stone-500">{elem.taskCount.active}</h5>
                <h5 className="w-1/5 bg-stone-500">{elem.taskCount.completed}</h5>
                <h5 className="w-1/5 bg-stone-500">{elem.taskCount.failed}</h5>
              </div>
            )
        })}
        </div>

{/*    	 <div className="py-2 px-4 flex justify-between rounded mb-2">
    	 	<h2>Sarthak</h2>
    	 	<h3>Make a UI Design</h3>
    	 	<h5>Status</h5>
    	 </div>

    	 <div className="py-2 px-4 flex justify-between rounded mb-2">
    	 	<h2>Sarthak</h2>
    	 	<h3>Make a UI Design</h3>
    	 	<h5>Status</h5>
    	 </div>

    	 <div className="py-2 px-4 flex justify-between rounded mb-2">
    	 	<h2>Sarthak</h2>
        <h3>Make a UI Design</h3>
    	 	<h5>Status</h5>
    	 </div>

    	 <div className="py-2 px-4 flex justify-between rounded mb-2">
    	 	<h2>Sarthak</h2>
    	 	<h3>Make a UI Design</h3>
    	 	<h5>Status</h5>
    	 </div>

    	 <div className="py-2 px-4 flex justify-between rounded mb-2">
    	 	<h2>Sarthak</h2>
    	 	<h3>Make a UI Design</h3>
    	 	<h5>Status</h5>
    	 </div>*/}

    </div>
  )
}

export default AllTask