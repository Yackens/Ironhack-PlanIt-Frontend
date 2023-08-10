import React, { useState, useEffect } from 'react';
import NavBar from '../Components/NavBar';
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom';
import OneTask from '../Components/OneTask';
import axios from 'axios';
import { API_URL } from '../config/vite.config';

function CategoryTasks() {
  const navigate = useNavigate();
  const location = useLocation();
  const categoryName = location.state?.categoryName;
  const [tasks, setTasks] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tokenInStorage = localStorage.getItem('authToken');
        const response = await axios.get(`${API_URL}/api/tasks/${categoryId}`, {
          headers: { authorization: `Bearer ${tokenInStorage}` },
        });

        if (response.status === 200) {
          setTasks(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchTasks();
  }, [categoryId]); // Run the effect when categoryId changes

  const handleCreateNewTask = () => {
    navigate(`/categories/${categoryId}/tasks/new`, { categoryId });
  };

  return (
    <div className="post">
      <div className='header'>
        <div className="logo">
                <p>Plan<span>It</span></p>
        </div>
        <NavBar />
      </div>

      
      <h2>{categoryName}</h2>
      <button onClick={handleCreateNewTask} className='btn1'>Create New Task</button>
      <h3>Tasks</h3>

      <div>
        {tasks.map((task) => (
          <OneTask key={task.id} task={task} tasks = {tasks} setTasks = {setTasks}/>
        ))}
      </div>
    </div>
  );
}

export default CategoryTasks;
