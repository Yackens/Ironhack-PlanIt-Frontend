import React from 'react'

function Categories() {
  return (
   <div>
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