import React from 'react';

class WorkoutForm extends React.Component {
  constructor(props) {
    super(props);

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    this.state = {
      title: '',
      date: `${year}-${month >= 10 ? '' : '0'}${month}-${day}`,
      time: `${date.getHours()}:${date.getMinutes()}`,
      hours: 0,
      minutes: 0,
      seconds: 0,
      distance: 0,
      elevation: 0,
      description: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    // TODO: There are a lot of unit conversions that still need to happen to
    // have the workout object ready to ship
    // this.props.createWorkout(this.state);
  }

  render() {
    return (
      <div className="workout-form">
        <label>Title</label>
        <input type="text" className="workout-title" placeholder="Morning Run"
          onChange={ this.update('title') } value={ this.state.title }></input>

        <label>Date & Time</label>
        <input type="date" className="workout-date"
          onChange={ this.update('date') } value={ this.state.date }></input>
        <input type="time" className="workout-time"
          onChange={ this.update('time') } value={ this.state.time }></input>

        <input type="number" className="workout-duration hours"
          onChange={ this.update('hours') } value={ this.state.hours }></input>
        <input type="number" className="workout-duration minutes"
          onChange={ this.update('minutes') } value={ this.state.minutes }>
        </input>
        <input type="number" className="workout-duration seconds"
          onChange={ this.update('seconds') } value={ this.state.seconds }>
        </input>

        <input type="number" className="workout-distance"
          onChange={ this.update('distance') } value={ this.state.distance }>
        </input>

        <input type="number" className="workout-elevation"
          onChange={ this.update('elevation') } value={ this.state.elevation }>
        </input>

        <textarea className="workout-description" rows="10" cols="50"
          onChange={ this.update('description') }
          value={ this.state.description }></textarea>
      </div>
    );
  }
}

export default WorkoutForm;
