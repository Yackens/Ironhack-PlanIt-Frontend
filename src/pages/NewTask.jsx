import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../Components/NavBar';
import { API_URL } from '../config/vite.config';

function NewTask() {
  const navigate = useNavigate();
  const { categoryId } = useParams();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState(new Date().toISOString().slice(0, 10));
  
  const handleCreateTask = async (e) => {
    // Handle creating the task and submitting to MongoDB
    e.preventDefault();

    try {
      const tokenInStorage = localStorage.getItem("authToken");

      const response = await axios.post(`${API_URL}/api/tasks/new`, {
        title: title,
        description: description,
        dueDate: dueDate,
        category: categoryId
      }, {headers: { authorization: `Bearer ${tokenInStorage}`}});

      if (response.status === 201) {
        // Redirect to the task page for the new category
        navigate(`/categories/${categoryId}`);
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
      {/**needs to be done */}
      <h3>Create New Task</h3>

      <form>
        <label>
          Task Title:
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Due Date:
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </label>
        <button onClick={handleCreateTask}>Create Task</button>
      </form>

    </div>
  );
}

export default NewTask;
