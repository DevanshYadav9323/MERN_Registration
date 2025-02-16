import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import axios from "axios";
import { Toaster } from 'react-hot-toast';
import { UserContextProvider } from "./context/userContext";
import './App.css'

function App() {

  axios.defaults.baseURL = "https://dsy-mern-registration-backend.onrender.com";
  axios.defaults.withCredentials = true;


  return (
    <>
      <UserContextProvider>
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 2000,

          }} />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </UserContextProvider>
    </>
  )
}

export default App
