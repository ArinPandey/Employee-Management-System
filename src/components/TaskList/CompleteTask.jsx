

import React from 'react'

const CompleteTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-white/50 rounded-xl backdrop-blur-md">
      <div className="flex justify-between items-center">
        <h3 className="bg-indigo-700 text-sm px-3 py-1 rounded ">{data.category}</h3>
        <h4 className="text-sm">{data.date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold text-gray-200">{data.title}</h2>
      <p className="text-sm mt-2 text-gray-200">{data.description}</p>
      
      <div className="mt-4">
        <div className="w-full bg-indigo-700 hover:bg-fuchsia-700 py-2 px-4 rounded text-white text-center cursor-pointer">
          ✓ Completed
        </div>
      </div>
    </div>
  )
}

export default CompleteTask