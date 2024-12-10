import { BrowserRouter,Navigate,Route,Router,RouterProvider, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import ProtectedRoute from './components/ProtectedRoute'
import Notfound from './pages/Notfound'

function Logout(){
  localStorage.clear()
  return <Navigate to="/login"/>
}
function RegisterAndLogout(){
  localStorage.clear()
  return <Register/>

}

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={ <ProtectedRoute> <Home/> </ProtectedRoute>}/>

        <Route   path="/login" element={  <Login/> }/>

        <Route  path="/register" element={  <RegisterAndLogout/>}/>
        <Route  path="*" element={ <Notfound/> }/>

       

      </Routes>
    </BrowserRouter>


  )
}

export default App
