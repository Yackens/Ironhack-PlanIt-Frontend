import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../Components/NavBar';
import { API_URL } from '../config/vite.config';

function UpdateTask() {
  const navigate = useNavigate();
  const { taskId } = useParams();
  const location = useLocation();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState(new Date().toISOString().slice(0, 10));
  const [status, setStatus] = useState(''); // Add status state

  useEffect(() => {
    const taskData = location.state?.task;

    if (taskData) {
      setTitle(taskData.title);
      setDescription(taskData.description);
      setDueDate(taskData.dueDate);
      setStatus(taskData.status); // Set status from taskData
    }
  }, [location.state]);

  const handleUpdateTask = async (e) => {
    e.preventDefault();

    try {
      const tokenInStorage = localStorage.getItem('authToken');
      const response = await axios.put(
        `${API_URL}/api/tasks/${taskId}`,
        {
          title: title,
          description: description,
          dueDate: dueDate,
          status: status, // Include status in the request
        },
        { headers: { authorization: `Bearer ${tokenInStorage}` } }
      );

      if (response.status === 200) {
        const taskData = location.state?.task;
        navigate(`/categories/${taskData.category}`);
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

    
      <h2>{/* Display category name here */}</h2>
      <h3>Update Task</h3>

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
        <label>
          Status:
          <select id="dropdown" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </label>
        <button onClick={handleUpdateTask}>Save</button>
      </form>
    </div>
  );
}

export default UpdateTask;
