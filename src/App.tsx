import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login-page/Login'
import Registeration from './pages/registeration-page/Registeration'
import Layout from './layout/Layout'
import Todolist from './pages/to-do list page/todolist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Layout>
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/' element={<Registeration/>}></Route>
      <Route path='/todolist' element={<Todolist/>}></Route>
    </Routes>
    </Layout>
    </BrowserRouter>
  )
}

export default App
