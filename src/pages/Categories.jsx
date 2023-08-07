import React from 'react'
import NavBar from '../Components/NavBar'
import { Link } from "react-router-dom";

const Categories = () => {
      const [categories, setCategories] = useState([])

      const fetchStudents = async () => {
        try {
          const response = await fetch('http://localhost:5005/api/students/')
          if (response.status === 200) {
            const parsedCategories = await response.json()
            setCategories(parsedCategories)
          }
        } catch (error) {
          console.error(error)
        }
      }
    
      useEffect(() => {
        fetchStudents()
      }, [])


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