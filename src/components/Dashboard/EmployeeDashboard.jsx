import React from 'react'
import Header from '../Other/Header'
import TasklistNumbers from '../Other/TasklistNumbers'
import Tasklist from '../TaskList/Tasklist'
import Particles from '../Effects/Particles';

const EmployeeDashboard = (props) => {
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen relative overflow-hidden"> {/* Add relative and overflow-hidden */}
      <div style={{
        position: 'absolute', // Position the particles absolutely
        top: 0,
        left: 0,
        width: '100%',
        height: '100%', // Make it cover the full height of the parent
        zIndex: 0, // Ensure it's behind other content
      }}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="relative z-10"> {/* Ensure this content is above the particles */}
        <Header changeUser={props.changeUser} data = {props.data}/>
        <TasklistNumbers data = {props.data}/>
        <Tasklist data = {props.data}/>
      </div>
    </div>
  )
}

export default EmployeeDashboard;