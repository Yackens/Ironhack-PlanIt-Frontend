import React from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Categories from './pages/Categories'
import NewCategory from './pages/NewCategory'
import Tasks from './pages/Tasks'
import NewTask from './pages/NewTask'
import SignUp from './pages/SignUp'
import Home from './pages/Home';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        
        <Route path='/categories' element={<Categories />} />
        <Route path='/category/new' element={<NewCategory />} />
        <Route path='/tasks' element={<Tasks />} />
        <Route path='/task/new' element={<NewTask />} />
      
        <Route path='/signup' element={<SignUp />} />

        <Route path='*' element={<h1>404 page</h1>} />
      </Routes>
    </>
  )
}

export default App