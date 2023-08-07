import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar';

function NewTask() {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const categoryName = "CATEGORY NAME"; // Hier den tatsächlichen Kategorienamen einsetzen

  const handleCreateTask = () => {
    // Handle creating the task and submitting to MongoDB
    // You can use the state variables taskName and description
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
      <h2>{categoryName}</h2>
      <h3>Create New Task</h3>

      <form>
        <label>
          Task name
          <input
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </label>
      </form>

      <form>
        <label>
          Description
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </form>

      <button onClick={handleCreateTask}>Create Task</button>
    </div>
  );
}

export default NewTask;
