import React, { useState } from 'react';
import NavBar from '../Components/NavBar';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../config/vite.config';

function NewCategory() {
  const navigate = useNavigate();
  const [categoryName, setCategoryName] = useState('');

  const handleCreateCategory = async (e) => {
    e.preventDefault();

    try {
      const tokenInStorage = localStorage.getItem("authToken");
      const response = await axios.post(`${API_URL}/api/categories/new`, {
        name: categoryName
      }, {headers: { authorization: `Bearer ${tokenInStorage}`}});

      if (response.status === 201) {
        // Redirect to the task page for the new category
        navigate(`/categories`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div id="logo">
        <Link to='/'>
          <p>PlanIt</p>
        </Link>
      </div>

      <NavBar />
      <h2>Create Category</h2>

      <form onSubmit={handleCreateCategory}>
        <label>
          Category name
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            required
          />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default NewCategory;
