import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../Components/NavBar';

function NewTask() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState(Date.now());
  
  const handleCreateTask = async (e) => {
    // Handle creating the task and submitting to MongoDB
    e.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/api/tasks/new`, {
        name: categoryName
      });

      if (response.status === 201) {
        // Redirect to the task page for the new category
        const newTaskId = response.data._id;
        navigate(`/tasks/${newTaskId}`);
      }
    } catch (error) {
      console.error(error);
    }
  
    console.log('Create Task clicked');
    console.log('Task Name:', taskName);
    console.log('Description:', description);
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
      <h2>categoryName</h2>
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
