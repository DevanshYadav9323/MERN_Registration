import { UserContext } from '../context/userContext';
import { useContext } from 'react';
import "../css/Dashboard.css"

function Dashboard() {

 const {user} = useContext(UserContext);

  return (
    <>
    <div className="dashboard__wrapper">
      <div className="dashboard__content">
        <h1 className="dashboard__title">Dashboard</h1>
        <h2 className="dashboard__greeting">
          {!user ? "Hello User" : `Hello ${user.FirstName}`}
        </h2>
      </div>
    </div>
    </>
  )
}

export default Dashboard
