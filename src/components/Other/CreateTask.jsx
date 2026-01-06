import React, {useState,useContext} from 'react'
import {AuthContext} from '../../context/AuthProvider'

const CreateTask = () => {

	const [userData,setUserData] = useContext(AuthContext)

	const [title, setTaskTitle] = useState('')
	const [description, setTaskDescription] = useState('')
	const [date, setTaskDate] = useState('')
	const [assignTo, setAssignTo] = useState('')
	const [category, setCategory] = useState('')

	const [newTask,setNewTask] = useState({})

	const submitHandler = (e) => {
		e.preventDefault()

    // 1. VALIDATION CHECK: Stop if any important field is missing
    if (!title || !date || !assignTo || !category || !description) {
        alert("Please fill in all fields before creating a task.")
        return // This stops the function here. No task is created.
    }

    // 2. Create the Task Object (Only happens if fields are full)
    const newTask = { 
        title, 
        description, 
        date, 
        category, 
        active: false, 
        newTask: true, 
        failed: false, 
        completed: false 
    }

    const data = userData
    
    // 3. Find the employee and add the task
    data.forEach(function (elem) {
        if (assignTo == elem.firstname) {
            elem.tasks.push(newTask)
            
            // OPTIONAL: Update the task counts immediately for better UX
            elem.taskCount.newTask = elem.taskCount.newTask + 1
        }
    })
    
    setUserData(data)
    
    // 4. Save to LocalStorage (So data stays after refresh)
    localStorage.setItem('employees', JSON.stringify(data));

    // 5. Clear the form
    setTaskTitle('')
    setAssignTo("")
    setCategory("")
    setTaskDescription("")
    setTaskDate("")
	}

  return (
       <div className="p-5 bg-white/20 mt-10 rounded"> 
	    		<form onSubmit={(e) => {
	    			submitHandler(e)
	    		}} className="flex flex-wrap w-full items-start justify-between">
	    			<div className="w-1/2">
	    			    <div>
		    				<h3 className="text-sm text-gray-300 mb-1">Task Title</h3>
		    				<input
		    				id="taskTitle"
              name="taskTitle"
		    				value = {title}
		    				onChange ={(e)=>{
		    					setTaskTitle(e.target.value)
		    				}}

		    				 type="text" placeholder="Make a UI design" className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"/>
	    				</div>

	    				<div>
		    				<h3 className="text-sm text-gray-300 mb-1">Date</h3>
		    				<input
		    				id="taskDate"
              name="taskDate"
		    				value = {date}
		    				onChange ={(e)=>{
		    					setTaskDate(e.target.value)
		    				}}
		    				type="date" className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"/> 
	    				</div>

	    				<div>
		    				<h3 className="text-sm text-gray-300 mb-1">Assign to</h3>
		    			    <input 
		    			    id="assignTo"
              name="assignTo"
		    			    value = {assignTo}
			    				onChange ={(e)=>{
			    					setAssignTo(e.target.value)
			    				}}
		    			    type="text" placeholder="Employee name" className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"/> 
	    				</div>
		    			<div>
		    				<h3 className="text-sm text-gray-300 mb-1">Category</h3>
		    			  	<input
		    			  	id="category"
              name="category" 
		    			  	value = {category}
			    				onChange ={(e)=>{
			    					setCategory(e.target.value)
			    				}}
		    			  	type="text" placeholder="design,dev,etc.." className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"/>
		    			</div>
	    				
	    			</div>


	    			<div className="w-2/5 flex flex-col items-start">
	    				<h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
	    				<textarea
	    				id="taskDescription"
            name="taskDescription"
            value = {description}
			    				onChange ={(e)=>{
			    					setTaskDescription(e.target.value)
			    				}}
	    				className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px]" cols="30" rows="10"></textarea>
	    				<button className="bg-indigo-700 hover:bg-indigo-900 px-5 py-3 rounded text-sm mt-4 w-full cursor-pointer">Create Task</button>
	    			</div>
	    		
	    		</form>
    	</div>
  )
}

export default CreateTask