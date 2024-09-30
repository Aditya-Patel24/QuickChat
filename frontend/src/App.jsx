import React from 'react'
import Left from './home/leftpart/Left'
import Right from './home/rightpart/Right'
import Signup from './components/Signup'
import { useAuth } from './context/Authprovider'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login'
import { Toaster } from 'react-hot-toast';
function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
  <Router>

    <Routes>
      <Route path="/" element={
        authUser ?
        (<div className="flex h-screen">
        <Left/>
        <Right/>
       </div> ): (<Navigate to={"/login"} />)
      }/>
      <Route path="/signup" element={authUser?<Navigate to={"/"}/>:<Signup />}/>
      <Route path="/login" element={authUser?<Navigate to={"/"}/>:<Login />} />
    </Routes>
<Toaster/>
  </Router>
  )
}

export default App
