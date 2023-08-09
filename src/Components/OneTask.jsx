import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import { API_URL } from '../config/vite.config';

function OneTask({ task }) {
  if (!task) {
    return <div>No task found.</div>;
  }

  // Initialize status state with the task's status
  const [status, setStatus] = useState(task.status);

  const handleStatusChange = async (event) => {
    const newStatus = event.target.value;
    setStatus(newStatus);

    try {
      // Update the task's status using the API
      await axios.put(`${API_URL}/api/tasks/${task._id}`, { status: newStatus });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      // Delete the task using the API
      await axios.delete(`${API_URL}/api/tasks/${task._id}`);
      // You could trigger a refresh of the task list here if needed
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="task">
      <div>
        <h3>{task.category.name}</h3>
        <div className="statusDiv">{status}</div>
        <p>{task.dueDate}</p>
      </div>
      <div>
        <p>{task.description}</p>
      </div>
      <div>
        <label htmlFor="dropdown">Status</label>
        <select id="dropdown" value={status} onChange={handleStatusChange}>
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <button onClick={handleStatusChange}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
        {/* You could add a button or link for editing here */}
      </div>
    </div>
  );
}

export default OneTask;
