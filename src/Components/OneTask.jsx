import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import { API_URL } from '../config/vite.config';
import { useNavigate, useParams } from "react-router-dom";

function OneTask({ task, tasks, setTasks }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (!task) {
    return <div>No task found.</div>;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const handleStatusChange = async () => {
    navigate(`/tasks/${task._id}/update`, { state: { task } });
  };

  const handleDelete = async (taskId, event) => {
    event.preventDefault();
    try {
      // Delete the task using the API
      const tokenInStorage = localStorage.getItem("authToken");
      await axios.delete(`${API_URL}/api/tasks/${task._id}`, {headers: { authorization: `Bearer ${tokenInStorage}`}});
      const updatedTasks = tasks.filter((task) => task._id !== taskId);
      console.log(updatedTasks);
      setTasks(updatedTasks);
      // You could trigger a refresh of the task list here if needed
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="tasks">
        <div key={task._id}>
          <h4>{task.title}</h4>
          <p>Due Date: {formatDate(task.dueDate)}</p>
          <p>{task.description}</p>
          <p>Current Status: {task.status}</p>
          <p>Created At: {formatDate(task.createdAt)}</p>
          <button
            className="editLink"
            onClick={() => handleStatusChange(task._id)}
          >
            Edit
          </button>
          <button
            className="deleteLink"
            onClick={(event) => handleDelete(task._id, event)}
          >
            Delete
          </button>
        </div>
    </div>
  );
}

export default OneTask;
