import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../Components/NavBar';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../config/vite.config';

const Categories = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/categories/`);
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

  const handleEdit = async (categoryId) => {
    try {
      // For editing
      const updatedData = { /* updated data */ };
      const editResponse = await axios.put(`${API_URL}/api/categories/${categoryId}`, updatedData);
      // Fetch categories again after editing
      fetchCategories();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (categoryId) => {
    try {
      // For deleting
      const deleteResponse = await axios.delete(`${API_URL}/api/categories/${categoryId}`);
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

      <button>Create Category</button>

      <input type="text" placeholder="Search.." />

      {categories.map(category => (
        <div key={category._id}>
          <Link to={`/category/${category._id}`}>{category.name}</Link>
          <span
            className="editLink"
            onClick={() => handleEdit(category._id)}
          >
            Edit
          </span>
          <span
            className="deleteLink"
            onClick={() => handleDelete(category._id)}
          >
            Delete
          </span>
        </div>
      ))}
    </div>
  );
}

export default Categories;