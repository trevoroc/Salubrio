import React from 'react';

const WorkoutListItem = props => (
  <div>
    I'm a list item! My id is { props.id }
    My title is { props.workout.title }
  </div>
);

export default WorkoutListItem;
