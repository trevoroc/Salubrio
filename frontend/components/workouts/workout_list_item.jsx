import React from 'react';

import { feetToMiles } from '../../util/unit_conversions';
import {
  formatDate,
  formatDuration,
  formatDistance,
  formatPace
} from '../../util/format_util';

const WorkoutListItem = props => {
  const duration = props.workout.duration;
  const distance = feetToMiles(props.workout.distance);
  const pace = formatPace(Math.round(duration / distance));
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
        <div className="duration">{ formatDuration(duration) }</div>
        <div className="distance">
          { formatDistance(Math.round(distance * 100) / 100) }
        </div>
        <div className="pace">{ pace }/mi</div>
      </div>
    </div>
  );
};

export default WorkoutListItem;
