import React, { useState, useEffect } from 'react'; // Import React and hooks only once
import axios from 'axios';
import NavBar from '../Components/NavBar';
import { Link } from 'react-router-dom';


const Categories = () => {
      const [categories, setCategories] = useState([]);
    
      const fetchCategories = async () => {
        try {
          const response = await axios.get('http://localhost:5005/api/students/');
          if (response.status === 200) {
            setCategories(response.data);
          }
        } catch (error) {
          console.error(error);
        }
      }
    
      useEffect(() => {
        fetchCategories();
      }, []);
    
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
    
          <input type="text" placeholder="Search.." />
    
          {categories.map(category => (
            <div key={category._id}>
              <Link to={`/category/${category._id}`}>{category.name}</Link>
              <Link className="editLink" to={`/delete/${category._id}`}></Link>
              <Link className="deleteLink" to={`/delete/${category._id}`}>Delete</Link>
            </div>
          ))}
        </div>
      );
    }
    
    export default Categories;
    