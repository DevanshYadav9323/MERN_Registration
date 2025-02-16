import React from 'react';
import '../css/About.css';

function About() {
  return (
    <section className="about">
      <div className="about__content">
        <h1 className="about__title">Full-Stack Login & Registration Application</h1>
        <p className="about__description">
          A web application that allows users to register and log in securely, built using the MERN stack.
        </p>

        {/* Technologies Used */}
        <div className="about__section">
          <h2 className="about__section-title">Technologies Used</h2>

          <h3 className="about__subheading">Frontend:</h3>
          <ul className="about__list">
            <li className="about__list-item"><strong>React.js:</strong> Component-based UI development.</li>
            <li className="about__list-item"><strong>React Router DOM:</strong> Client-side routing.</li>
            <li className="about__list-item"><strong>React-Hot-Toast:</strong> User-friendly notifications.</li>
          </ul>

          <h3 className="about__subheading">Backend:</h3>
          <ul className="about__list">
            <li className="about__list-item"><strong>Node.js:</strong> Server-side JavaScript execution.</li>
            <li className="about__list-item"><strong>Express.js:</strong> Web framework for routing and middleware.</li>
            <li className="about__list-item"><strong>MongoDB:</strong> NoSQL database for flexible data storage.</li>
            <li className="about__list-item"><strong>Mongoose:</strong> ODM for structured MongoDB operations.</li>
            <li className="about__list-item"><strong>Bcrypt:</strong> Secure password hashing.</li>
            <li className="about__list-item"><strong>JWT:</strong> Authentication using JSON Web Tokens.</li>
          </ul>
        </div>

        {/* Key Features */}
        <div className="about__section">
          <h2 className="about__section-title">Key Features</h2>
          <ul className="about__list">
            <li className="about__list-item">✅ <strong>User Registration:</strong> Create an account with email and password.</li>
            <li className="about__list-item">✅ <strong>User Login:</strong> Secure authentication for registered users.</li>
            <li className="about__list-item">✅ <strong>Protected Routes:</strong> Restricts access to authenticated users.</li>
            <li className="about__list-item">✅ <strong>User Context Management:</strong> Tracks authentication state across the app.</li>
            <li className="about__list-item">✅ <strong>Form Validation:</strong> Ensures correct user input before submission.</li>
            <li className="about__list-item">✅ <strong>Hashed Passwords:</strong> Secure encryption for user credentials.</li>
            <li className="about__list-item">✅ <strong>JWT Authentication:</strong> Persistent login sessions using JWT cookies.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
