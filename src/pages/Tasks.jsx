import React from 'react'
import NavBar from '../Components/NavBar'
import { Link } from "react-router-dom";
import OneTask from "../Components/OneTask"

function Tasks() {
  return (
    <div>
        <div id="logo">
            <Link to='/'>
                 <p>PlanIt</p>
             </Link>
        </div>

        <NavBar />
        <h2>CATEGORY NAME</h2>

        <button>Create New Task</button>
        <h3>Tasks</h3>

        <div>
            <OneTask />
        </div>
    </div>
  )
}

export default Tasks