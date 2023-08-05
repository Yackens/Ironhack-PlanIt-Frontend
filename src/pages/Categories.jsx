import React from 'react'
import NavBar from '../Components/NavBar'
import { Link } from "react-router-dom";

function Categories() {
  return (

   <div>
    <div id="logo">
                <Link to='/'>
                       <p>PlanIt</p>
                        </Link>
                </div>

    <NavBar />

    <h2>Categories</h2>

    <button>Create Category</button>

    <input type="text" placeholder="Search.."></input>

    <a href='#'>CATEGORIE 1</a>
       <span class="edit-icon" onclick="editItem()">Edit</span>
       <span class="delete-icon" onclick="deleteItem()">Delete</span>
    <a href='#'>CATEGORIE 2</a>
   
          <span class="edit-icon" onclick="editItem()">Edit</span>
          <span class="delete-icon" onclick="deleteItem()">Delete</span>
    <a href='#'>CATEGORIE 3</a>
          <span class="edit-icon" onclick="editItem()">Edit</span>
          <span class="delete-icon" onclick="deleteItem()">Delete</span>
    <a href='#'>CATEGORIE 4</a>
         <span class="edit-icon" onclick="editItem()">Edit</span>
        <span class="delete-icon" onclick="deleteItem()">Delete</span>
    </div> 
  )
}

export default Categories