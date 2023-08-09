import React from 'react';
import NavBar from '../Components/NavBar';
import { Link, useNavigate, useLocation } from "react-router-dom";
import OneTask from "../Components/OneTask";

function CategoryTasks() {
  const navigate = useNavigate();
  const location = useLocation();
  const categoryName = location.state?.categoryName;


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
      <h2>{categoryName}</h2>

      <button onClick={handleCreateNewTask}>Create New Task</button>
      <h3>Tasks</h3>

      <div>
        <OneTask />
      </div>
    </div>
  );
}

export default CategoryTasks;
