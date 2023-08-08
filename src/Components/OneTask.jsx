import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import { API_URL } from '../config/vite.config';



function OneTask({ task }) {
  if (!task) {
    return <div>Loading task data...</div>;
  }

  const [status, setStatus] = useState(task.status);

  const handleStatusChange = async event => {
    const newStatus = event.target.value;
    setStatus(newStatus);
    
    try {
      // API-Anfrage zum Aktualisieren des Task-Status in der MongoDB
      await axios.put(`${API_URL}/api/tasks/${task._id}`, { status: newStatus });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      // API-Anfrage zum Löschen des Tasks aus der MongoDB
      await axios.delete(`http://localhost:5005/api/tasks/${task._id}`);
      // Hier könntest du eine Aktualisierung der Task-Liste auslösen
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
    
        <h3>{task.name}</h3>
        <div className='statusDiv'>{status}</div>
        
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
        <button onClick={handleDelete}>Delete</button>
        {/* Hier könntest du einen Link oder Button für die Bearbeitung hinzufügen */}
      </div>
    </div>
  );
}

export default OneTask;
