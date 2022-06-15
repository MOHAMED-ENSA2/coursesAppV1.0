import React from 'react'

import "./Alert.css"

function Alert({message, setIsaved}) {
  return (
    <div className='alert'>
        <div>{message}</div>
        <i 
            onClick={() => setIsaved(false)}
            className="fa-solid fa-x fa-xs">
        </i>
    </div>
  )
}

export default Alert