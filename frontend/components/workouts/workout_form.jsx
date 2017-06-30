import React from 'react';

class WorkoutForm extends React.Component {
  constructor(props) {
    super(props);

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const hours = date.getHours();
    const minutes = date.getMinutes();

    this.state = {
      title: '',
      date: `${year}-${month >= 10 ? '' : '0'}${month}-${day}`,
      time: `${hours >= 10 ? '' : '0'}${hours}` +
            `:${minutes >= 10 ? '' : '0'}${minutes}`,
      hours: 0,
      minutes: 0,
      seconds: 0,
      distance: null,
      elevation: null,
      description: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const workout = {
      user_id: this.props.id,
      title: this.state.title,
      datetime: this.state.date + ' ' + this.state.time,
      duration: parseInt(this.state.hours) * 3600 +
        parseInt(this.state.minutes) * 60 + parseInt(this.state.seconds),
      distance: this.state.distance,
      elevation: this.state.elevation,
      description: this.state.description
    };

    this.props.createWorkout(workout);
  }

  render() {
    return (
      <div className="workout-form">
        <h1>New Workout</h1>

        <section className="workout-form-section">
          <label>Title</label>
          <input type="text" className="workout-title" placeholder="Morning Run"
            onChange={ this.update('title') } value={ this.state.title }>
          </input>

          <label>Date & Time</label>
          <input type="date" className="workout-date"
            onChange={ this.update('date') } value={ this.state.date }></input>
          <input type="time" className="workout-time"
            onChange={ this.update('time') } value={ this.state.time }></input>
        </section>

        <section className="workout-form-section">
          <label>Duration</label>
          <input type="number" className="workout-duration hours"
            onChange={ this.update('hours') } value={ this.state.hours }>
          </input>
          <input type="number" className="workout-duration minutes"
            onChange={ this.update('minutes') } value={ this.state.minutes }>
          </input>
          <input type="number" className="workout-duration seconds"
            onChange={ this.update('seconds') } value={ this.state.seconds }>
          </input>

          <label>Distance</label>
          <input type="number" className="workout-distance"
            onChange={ this.update('distance') } value={ this.state.distance }>
          </input>

          <label>Elevation</label>
          <input type="number" className="workout-elevation"
            onChange={ this.update('elevation') }
            value={ this.state.elevation }></input>
        </section>

        <section className="workout-form-section">
          <label>Description</label>
          <textarea className="workout-description" rows="10" cols="50"
            onChange={ this.update('description') }
            value={ this.state.description }></textarea>

          <button onClick={ this.handleSubmit }>Create Workout</button>
        </section>
      </div>
    );
  }
}

export default WorkoutForm;
