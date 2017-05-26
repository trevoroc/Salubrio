import React from 'react';

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
            <button className="dropdown-link">Add a workout</button>
          </li>
          <li key="route">
            <button className="dropdown-link">Create a route</button>
          </li>
          <li key="profile">
            <button className="dropdown-link">Profile</button>
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

// const NavBar = props => (
//   <header className="nav">
//     <h1>Salubrio</h1>
//     <button onClick={ e => {
//         e.preventDefault();
//         const dropdown = document.querySelector('.dropdown');
//         dropdown.classList.toggle('hidden');
//       }}>{ props.username }</button>
//     <ul className="dropdown hidden">
//       <li key="workout">
//         <button className="dropdown-link">Add a workout</button>
//       </li>
//       <li key="route">
//         <button className="dropdown-link">Create a route</button>
//       </li>
//       <li key="profile">
//         <button className="dropdown-link">Profile</button>
//       </li>
//       <li key="logout">
//         <button onClick={ e => {
//             e.preventDefault();
//             props.logout();
//           }
//         } className="dropdown-link">Logout</button>
//       </li>
//     </ul>
//   </header>
// );

export default NavBar;
