import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.logout = this.logout.bind(this);
  }

  toggleDropdown(e) {
    e.preventDefault();

    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('hidden');
  }

  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    return (
      <header className="nav">
        <h1>Salubrio</h1>
        <button onClick={ this.toggleDropdown }>{ this.props.username }</button>
        <ul className="dropdown hidden">
          <li key="workout">
            <Link to="/newworkout" className="dropdown-link">
              Add a workout
            </Link>
          </li>
          <li key="route">
            <Link to="/newroute" className="dropdown-link">Create a route</Link>
          </li>
          <li key="profile">
            <Link to="/profile" className="dropdown-link">Profile</Link>
          </li>
          <li key="logout">
            <button onClick={ this.logout }
              className="dropdown-link">Logout</button>
          </li>
        </ul>
      </header>
    );
  }
}

export default NavBar;
