import React from 'react';

const WorkoutListItem = props => (
  <div>
    I'm a list item! My id is { props.key }
    My stuff is { props.workout }
  </div>
);

export default WorkoutListItem;
