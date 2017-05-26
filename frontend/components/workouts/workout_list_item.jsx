import React from 'react';

import {
  formatDate,
  formatDuration,
  formatDistance,
  formatPace
} from '../../util/format_util';

const WorkoutListItem = props => {
  const pace = formatPace(Math.round(props.workout.duration / props.workout.distance));
  const datetime = formatDate(props.workout.datetime);

  // TODO: Make sure that null items and everything needing them are not rendered
  return (
    <div>
      <div className="workout-label">
        <div className="name">{ props.workout.username }</div>
        <div className="datetime">{ datetime }</div>
      </div>

      <div className="workout-info">
        <div className="title">{ props.workout.title }</div>
        <div className="duration">
          { formatDuration(props.workout.duration) }
        </div>
        <div className="distance">
          { formatDistance(props.workout.distance) }mi
        </div>
        <div className="pace">{ pace }/mi</div>
      </div>
    </div>
  );
};

export default WorkoutListItem;
