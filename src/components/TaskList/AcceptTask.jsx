


import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AcceptTask = ({ data }) => {
  const [userData, setUserData] = useContext(AuthContext)
  
  const handleTaskUpdate = (newStatus) => {
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
              active: false,
              completed: newStatus === 'completed',
              failed: newStatus === 'failed'
            }
          }
          return task
        })
        
        return {
          ...employee,
          tasks: updatedTasks,
          taskCount: {
            ...employee.taskCount,
            active: employee.taskCount.active - 1,
            completed: newStatus === 'completed' ? employee.taskCount.completed + 1 : employee.taskCount.completed,
            failed: newStatus === 'failed' ? employee.taskCount.failed + 1 : employee.taskCount.failed
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
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-white/50 rounded-xl backdrop-blur-md">
      <div className="flex justify-between items-center">
        <h3 className="bg-indigo-700 text-sm px-3 py-1 rounded">{data.category}</h3>
        <h4 className="text-sm">{data.date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold text-gray-200">{data.title}</h2>
      <p className="text-sm mt-2 text-gray-200">{data.description}</p>
      <div className="flex justify-between mt-4">
        <button 
          onClick={() => handleTaskUpdate('completed')}
          className="bg-indigo-700 hover:bg-fuchsia-700 px-2 py-1 text-sm rounded cursor-pointer"
        >
          Mark as completed
        </button>
        <button 
          onClick={() => handleTaskUpdate('failed')}
          className="bg-indigo-700 hover:bg-fuchsia-700 px-2 py-1 text-sm rounded cursor-pointer"
        >
          Mark as failed
        </button>
      </div>
    </div>
  )
}

export default AcceptTask