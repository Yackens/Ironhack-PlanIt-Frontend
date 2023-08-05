import React from 'react'
import NavBar from '../Components/NavBar'
import { Link } from "react-router-dom";

function NewTask() {
  return (
    <div>

        <div id="logo">
            <Link to='/'>
                <p>PlanIt</p>
            </Link>
         </div>    

        <NavBar />
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