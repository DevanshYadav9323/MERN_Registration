import React from 'react'
import { FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "../css/Home.css";

function Home() {
  return (
    <div className="home__wrapper">
      <div className="home__content">
        {/* <FaLock className="home__icon" /> */}
        <h1 className="home__title">Secure & Seamless Authentication</h1>
        <p className="home__subtitle">More Details <Link to={"/about"} className='home__link'>Here</Link></p>
      </div>
    </div>
  )
}

export default Home
