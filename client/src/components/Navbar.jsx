import React from 'react';
import { UserContext } from '../context/userContext';
import { useContext } from 'react';
import axios from 'axios';
import { toast } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaLock } from "react-icons/fa";
import "../css/Navbar.css"; 

function Navbar() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    await axios.get("/logout");
    toast.success("Logout Successful");
    navigate("/");
    // setTimeout(() => {
    //   window.location.reload();
    // }, 1500);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          {/* Dsy */}
          <FaLock />
        </Link>

        {/* Links Section */}
        <div className="navbar__links">
          {!user ? (
            <>
              <Link to="/register" className="navbar__link">
                Register
              </Link>
              <Link to="/login" className="navbar__link">
                Login
              </Link>
            </>
          ) : (
            <button onClick={handleLogout} className="navbar__button">
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
