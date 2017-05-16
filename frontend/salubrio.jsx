import React from 'react';
import ReactDOM from 'react-dom';

// TODO: Code below this line for testing only
import { createUser } from './actions/user_actions';
window.createUser = createUser;
// TODO: Code aboe this line for testing only

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Salubrio</h1>, root);
});
