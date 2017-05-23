import React from 'react';

class WorkoutList extends React.Component {
  constructor(props) {
    super(props);
  }

  buildWorkoutItems() {
    const workoutIds = Object.keys(this.props.workouts);
    return workoutIds.map(id => (
      <WorkoutListItem key={ id } workout={ this.props.workouts[id] } />
    ));
  }

  render() {
    const workoutItems = this.buildWorkoutItems();
    return (
      <ul>
        { workoutItems }
      </ul>
    );
  }
}
