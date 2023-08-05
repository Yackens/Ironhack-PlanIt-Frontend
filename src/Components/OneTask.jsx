import React from 'react'
import '../App.css'

function OneTask() {
  return (
    <div>
    <div>
        <h3>TASK NAME</h3>
        <div className='statusDiv'></div>
        <p>DUE DATE</p>
    </div>
    <div>
        <p>DESCRIPTION</p>
    </div>
    <div>
    <label for="dropdown">Status</label>
    <select id="dropdown">
        <option value="option1">Not Started</option>
        <option value="option2">In Progress</option>
        <option value="option3">Completed</option>
  
    </select>
    </div>

    </div>
  )
}

export default OneTask