import React from 'react'
import NavBar from '../Components/NavBar'
import { Link } from "react-router-dom";


function NewCategory() {
  return (
    <div>
        <div id="logo">
            <Link to='/'>
                <p>PlanIt</p>
            </Link>
         </div>

        <NavBar />
        <h2>Create Category</h2>

         <form>
        <label>
           Category name
         <input/>
         </label>
         </form>

         <button>Create</button>
    </div>
  )
}

export default NewCategory