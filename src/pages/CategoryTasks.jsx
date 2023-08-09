import React from 'react';
import NavBar from '../Components/NavBar';
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import OneTask from "../Components/OneTask";

function CategoryTasks() {
  const navigate = useNavigate();
  const location = useLocation();
  const categoryName = location.state?.categoryName;

  const { categoryId } = useParams();
  console.log(categoryId);

  const handlePassInformation = async (e) => {
    e.preventDefault();

    try {
      const tokenInStorage = localStorage.getItem("authToken");
      const response = await axios.get(`${API_URL}/api/categories/${categoryId}`, {headers: { authorization: `Bearer ${tokenInStorage}`}});

      if (response.status === 201) {
        // Redirect to the task page for the new category
        navigate(`/categories`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateNewTask = () => {
    navigate(`/categories/${categoryId}/tasks/new`, {categoryId});
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
