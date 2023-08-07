import React from 'react';
import NavBar from '../Components/NavBar';
import { Link, useNavigate } from "react-router-dom";
import OneTask from "../Components/OneTask";

function Tasks() {
  const navigate = useNavigate();

  const handleCreateNewTask = () => {
    navigate('/task/new');
  };

  return (
    <div>
      <div id="logo">
        <Link to='/'>
          <p>PlanIt</p>
        </Link>
      </div>

      <NavBar />

      {/*Needs to be done */}
      <h2>CATEGORY NAME</h2>

      <button onClick={handleCreateNewTask}>Create New Task</button>
      <h3>Tasks</h3>

      <div>
        <OneTask />
      </div>
    </div>
  );
}

export default Tasks;
