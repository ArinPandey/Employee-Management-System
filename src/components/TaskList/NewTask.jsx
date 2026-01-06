

import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const NewTask = ({ data }) => {
  const [userData, setUserData] = useContext(AuthContext)
  
  const handleAcceptTask = () => {
    // Get current logged in user
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
    const currentUserEmail = loggedInUser.data.email
    
    // Update the task status and user data
    const updatedData = userData.map(employee => {
      if (employee.email === currentUserEmail) {
        const updatedTasks = employee.tasks.map(task => {
          if (task.title === data.title && task.date === data.date) {
            return {
              ...task,
              newTask: false,
              active: true
            }
          }
          return task
        })
        
        return {
          ...employee,
          tasks: updatedTasks,
          taskCount: {
            ...employee.taskCount,
            newTask: employee.taskCount.newTask - 1,
            active: employee.taskCount.active + 1
          }
        }
      }
      return employee
    })
    
    // Update context and localStorage
    setUserData(updatedData)
    localStorage.setItem('employees', JSON.stringify(updatedData))
    
    // Update logged in user data
    const updatedLoggedInUser = updatedData.find(emp => emp.email === currentUserEmail)
    localStorage.setItem('loggedInUser', JSON.stringify({
      role: 'employee',
      data: updatedLoggedInUser
    }))
  }
  
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-white/50 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-indigo-700 text-sm px-3 py-1 rounded">{data.category}</h3>
        <h4 className="text-sm">{data.date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-2">{data.description}</p>
      <div className="mt-4">
        <button 
          onClick={handleAcceptTask}
          className="w-full bg-indigo-700 hover:bg-fuchsia-700 py-2 px-4 rounded text-white cursor-pointer"
        >
          Accept Task
        </button>
      </div>
    </div>
  )
}

export default NewTask