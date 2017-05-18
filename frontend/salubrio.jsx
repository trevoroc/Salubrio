import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import configureStore from './store/store';
import Root from './components/root';

const initialState = {
  session: {
    currentUser: {
      id: null,
      username: null
    },
    errors: []
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  Modal.setAppElement(document.body);
  const store = configureStore(initialState);
  ReactDOM.render(<Root store={ store } />, root);
});
