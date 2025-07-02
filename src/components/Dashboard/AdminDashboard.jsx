import React from 'react'
import Header from "../Other/Header"
import CreateTask from "../Other/CreateTask"
import AllTask from "../Other/AllTask"
import Lightning from '../Effects/Lightning';

const AdminDashboard = (props) => {
  return (
   <div className="h-screen w-full p-10 overflow-hidden relative"> 
      {/* Fixed background lightning */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Lightning 
          hue={220} 
          xOffset={0} 
          speed={1} 
          intensity={1} 
          size={1} 
        /> 
      </div>

      {/* Dashboard content */}
      <div className="relative z-10"> 
        <Header changeUser={props.changeUser}/> 
        <CreateTask/> 
        <AllTask/> 
      </div> 
    </div> 
  )
}

export default AdminDashboard