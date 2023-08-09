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

function App() {
  return (
    <AuthContextWrapper>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/categories' element={ <IsPrivate><Categories /></IsPrivate>} />
      <Route path='/categories/new' element={ <IsPrivate><NewCategory /></IsPrivate> } />
      <Route path='/tasks' element={<IsPrivate><CategoryTasks /></IsPrivate>} />
      <Route path='/tasks/new' element={<IsPrivate><NewTask /></IsPrivate>} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='*' element={<h1>404 page</h1>} />
    </Routes>
    </AuthContextWrapper>
  );
}

export default App;
