import React from 'react';

import WorkoutFormContainer from './workout_form_container';
import NavBarContainer from '../navbar/nav_bar_container';

class WorkoutFormPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBarContainer />
        <WorkoutFormContainer />
      </div>
    );
  }
}

export default WorkoutFormPage;
