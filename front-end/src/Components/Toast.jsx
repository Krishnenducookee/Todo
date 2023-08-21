import React from 'react'

const Toast = () => {
  return (

  <div
    className="flex items-center w-full max-w-xs p-4 mb-4 text-white bg-green-800 rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
    role="alert"
  >
    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
    </div>
    <div className="ml-3 text-sm font-normal">Task Saved successfully.</div>
  </div>
  

  
  
  )
}

export default Toast
