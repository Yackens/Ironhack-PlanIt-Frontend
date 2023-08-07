import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar';

function NewTask() {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  
  const handleCreateTask = () => {
    // Handle creating the task and submitting to MongoDB
  
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
          <textarea
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
