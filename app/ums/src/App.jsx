import './App.css'
import './index.css'
import ListUserDataComponents from './Components/ListUserDataComponents'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserComponent from './Components/UserComponent'
import Home from './Components/Home'
import LoginForm from './Components/Login/LoginForm'
import SignUpForm from './Components/Signup/SignUpForm'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          // Defined for the Login page
          <Route path="/" element={<LoginForm/>} />
          <Route path="/login" element={<LoginForm/>} />

          // Defined for the SignUp page
          <Route path="/signup" element={<SignUpForm />} />

          // Defined for the Home page
          <Route path='/home' element={<Home/>} />

          // Defined for to show list of User Data
          <Route path='/users' element={<ListUserDataComponents />} />

          // Defined for to add a new user by ADMIN Side
          <Route path='add-user' element={<UserComponent/>} />

          // Defined for to edit by user
          <Route path='edit-user/:id' element={<UserComponent/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
