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
		// e.preventDefault()

		// setNewTask({title,description,date,category,active:false,newTask:true,failed:false,completed:false})

		// const data = userData

		// data.forEach(function(elem){
		// 	if(assignTo == elem.firstname){
		// 	elem.tasks.push(newTask)
		// 	console.log(elem);
		// }
		// })
		// setUserData(data)
		// console.log(data)

		// // localStorage.setItem('employees',JSON.stringify(data))

		// // console.log(JSON.parse(data))
		// // console.log(task)
		// // console.log(taskTitle, taskDescription, taskDate, assignTo, category)
		// setTaskTitle('')
		// setAssignTo("")
		// setCategory("")
		// setTaskDescription("")
		// setTaskDate("")
		    e.preventDefault()
    
    // Create the new task object
    const newTaskObj = {
        title,
        description,
        date,
        category,
        active: false,
        newTask: true,
        failed: false,
        completed: false
    }
    
    // Create a copy of userData to avoid mutating state directly
    const updatedData = userData.map(employee => {
        if (assignTo === employee.firstname) {
            return {
                ...employee,
                tasks: [...employee.tasks, newTaskObj],
                taskCount: {
                    ...employee.taskCount,
                    newTask: employee.taskCount.newTask + 1
                }
            }
        }
        return employee
    })
    
    // Update the context state
    setUserData(updatedData)
    
    // Update localStorage
    localStorage.setItem('employees', JSON.stringify(updatedData))
    
    // Clear form fields
    setTaskTitle('')
    setAssignTo('')
    setCategory('')
    setTaskDescription('')
    setTaskDate('')
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