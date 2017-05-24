import React from 'react';

const NavBar = props => (
  <header className="nav">
    <h1>Salubrio</h1>
    <button onClick={ e => {
        e.preventDefault();
        const dropdown = document.querySelector('.dropdown');
        dropdown.classList.toggle('hidden');
      }}>{ props.username }</button>
    <ul className="dropdown hidden">
      <li key="workout">
        <button className="dropdown-link">Add a workout</button>
      </li>
      <li key="route">
        <button className="dropdown-link">Create a route</button>
      </li>
      <li key="profile">
        <button className="dropdown-link">Profile</button>
      </li>
      <li key="logout">
        <button onClick={ e => {
            e.preventDefault();
            props.logout();
          }
        } className="dropdown-link">Logout</button>
      </li>
    </ul>
  </header>
);

export default NavBar;
