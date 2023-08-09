import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Categories from './pages/Categories';
import NewCategory from './pages/NewCategory';
import Tasks from './pages/CategoryTasks';
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
      <Route path='/categories' element={ <><Categories /></>} />
      <Route path='/categories/new' element={ <><NewCategory /></> } />
      <Route path='/tasks' element={<><Tasks /></>} />
      <Route path='/tasks/new' element={<><NewTask /></>} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='*' element={<h1>404 page</h1>} />
    </Routes>
    </AuthContextWrapper>
  );
}

export default App;
