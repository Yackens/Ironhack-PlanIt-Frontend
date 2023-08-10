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
      <div className='header'>
          <div className="logo">
                <p>Plan<span>It</span></p>
         </div>
         <NavBar />
      </div>
      
      
      
      <h2>Create New Task</h2>

      <form className="signFlex">
        <label>
          Task Title:
          <input className="inputFlex"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Description:
          <textarea className="areaFlex"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Due Date:
          <input className="inputFlex"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </label>
        <button onClick={handleCreateTask} className='btn1'>Create Task</button>
      </form>

    </div>
  );
}

export default NewTask;
