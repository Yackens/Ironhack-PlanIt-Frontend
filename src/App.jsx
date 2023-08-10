import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Categories from './pages/Categories';
import NewCategory from './pages/NewCategory';
import CategoryTasks from './pages/CategoryTasks';
import NewTask from './pages/NewTask';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import IsPrivate from './Components/isPrivate';
import { AuthContextWrapper } from './pages/context/Auth.context'; 
import UpdateTask from './pages/UpdateTask';
import Error404 from './pages/Error404';

function App() {
  return (
    <AuthContextWrapper>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/categories' element={ <IsPrivate><Categories /></IsPrivate>} />
      <Route path='/categories/new' element={ <IsPrivate><NewCategory /></IsPrivate> } />
      <Route path='/categories/:categoryId' element={<IsPrivate><CategoryTasks /></IsPrivate>} />
      <Route path='/categories/:categoryId/tasks/new' element={<IsPrivate><NewTask /></IsPrivate>} />
      <Route path='/tasks/:taskId/update' element={<IsPrivate><UpdateTask /></IsPrivate>} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='*' element={<Error404/>} />
    </Routes>
    </AuthContextWrapper>
  );
}

export default App;
