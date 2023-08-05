import React from 'react'

function NewTask() {
  return (
    <div>
         <h2>CATEGORY NAME</h2>
         <h3>Create New Task</h3>

         <form>
    <label>
      Task name
      <input/>
    </label>
    </form>

    <form>
    <label>
      Description
      <input/>
    </label>
    </form>
    </div>
  )
}

export default NewTask