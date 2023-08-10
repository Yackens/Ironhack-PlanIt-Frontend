import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../Components/NavBar';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../config/vite.config';

const Categories = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");


  const handleCreateNewCategory = () => {
    navigate(`/categories/new`);
  };

  const fetchCategories = async () => {
    try {
      const tokenInStorage = localStorage.getItem("authToken");
      const response = await axios.get(`${API_URL}/api/categories/search?q=${searchQuery}`, {headers: { authorization: `Bearer ${tokenInStorage}` },
    });
      if (response.status === 200) {
        setCategories(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, [searchQuery]);

  const handleDelete = async (categoryId) => {
    try {
      // For deleting
      const tokenInStorage = localStorage.getItem("authToken");
      const deleteResponse = await axios.delete(`${API_URL}/api/categories/${categoryId}`, {headers: { authorization: `Bearer ${tokenInStorage}`}});
      if (deleteResponse.status === 204) {
        fetchCategories();
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

      <h2>Categories</h2>

      <button onClick={handleCreateNewCategory}>Create Category</button>

      <input
        type="text"
        placeholder="Search for categories..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {categories.map(category => (
        <div key={category._id}>
          <Link to={`/categories/${category._id}`} state={{ categoryName: category.name }}>
            {category.name}
          </Link>
          <button
            className="deleteLink"
            onClick={() => handleDelete(category._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Categories;