import React from 'react'
import Left from './home/leftpart/Left'
import Right from './home/rightpart/Right'
import Signup from './components/Signup'
import { useAuth } from './context/Authprovider'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login'
import { Toaster } from 'react-hot-toast';
import useConversation from './zustand/useConversation';

function App() {
  const [authUser] = useAuth();
  const { selectedConversation } = useConversation(); // Use Zustand to track selected conversation

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          authUser ? (
            <div className="relative flex h-screen">
              {/* Left Sidebar */}
              <div className={`w-full md:w-[30%] ${selectedConversation ? 'hidden md:block' : 'block'}`}>
                <Left />
              </div>

              {/* Right Content */}
              <div className={`absolute md:static right-0 top-0 w-full md:w-[70%] transition-transform transform 
                ${selectedConversation ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0`}>
                <Right />
              </div>
            </div>
          ) : (
            <Navigate to="/login" />
          )
        } />
        <Route path="/signup" element={authUser ? <Navigate to="/" /> : <Signup />} />
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
