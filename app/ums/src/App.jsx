import './App.css'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import LoginForm from './Components/Login/LoginForm'
import SignUpForm from './Components/Signup/SignUpForm'
import ForgotPassword from './Components/ForgotPassword/ForgotPassword'
import ListUserData from './Components/ListUserData/ListUserData'
import AddUserByAdmin from './Components/AddUserByAdmin/AddUserByAdmin'

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

          // Defined for the Forgot Password page
          <Route path="/forgotPassword" element={<ForgotPassword />} />

          // Defined for the Home page
          <Route path='/home' element={<Home/>} />

          // Defined for to show list of Users Data
          <Route path='/users' element={<ListUserData />} />

          // Defined for to add a new user by ADMIN Side
          <Route path='add-user' element={<AddUserByAdmin/>} />

          // Defined for to edit by user
          <Route path='edit-user/:id' element={<AddUserByAdmin/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
