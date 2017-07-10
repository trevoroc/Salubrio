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
      date: `${year}-` + `${month >= 10 ? '' : '0'}${month}-` +
            `${day >= 10 ? '' : '0'}${day}`,
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
      <div className="workout-form-wrapper">
        <img className="form-background" src="/splash-banner-2.png" />
        <div className="workout-form">
          <h1>New Workout</h1>

          <section className="workout-form-section">
            <section className="workout-attr">
              <label>Title</label>
              <section className="attr-body">
                <input type="text" className="workout-title"
                  placeholder="Morning Run" onChange={ this.update('title') }
                  value={ this.state.title }></input>
              </section>
            </section>

            <section className="workout-attr">
              <label>Date & Time</label>
              <section className="attr-body">
                <input type="date" className="workout-date"
                  onChange={ this.update('date') } value={ this.state.date }>
                </input>
                <input type="time" className="workout-time"
                  onChange={ this.update('time') } value={ this.state.time }>
                </input>
              </section>
            </section>
          </section>

          <section className="workout-form-section">
            <section className="workout-attr">
              <label>Duration</label>
              <section className="attr-body">
                <input type="number" className="workout-duration hours short"
                  onChange={ this.update('hours') } value={ this.state.hours }>
                </input>
                <div className="units">hrs</div>
                <input type="number" className="workout-duration minutes short"
                  onChange={ this.update('minutes') }
                  value={ this.state.minutes }></input>
                <div className="units">min</div>
                <input type="number" className="workout-duration seconds short"
                  onChange={ this.update('seconds') }
                  value={ this.state.seconds }></input>
                <div className="units">s</div>
              </section>
            </section>

            <section className="workout-attr">
              <label>Distance</label>
              <section className="attr-body">
                <input type="number" className="workout-distance short"
                  onChange={ this.update('distance') }
                  value={ this.state.distance }></input>
                <div className="units">miles</div>
              </section>
            </section>

            <section className="workout-attr">
              <label>Elevation</label>
              <section className="attr-body">
                <input type="number" className="workout-elevation short"
                  onChange={ this.update('elevation') }
                  value={ this.state.elevation }></input>
                <div className="units">ft</div>
              </section>
            </section>
          </section>

          <section className="workout-form-section">
            <section className="workout-attr">
              <label>Description</label>
              <section className="attr-body">
                <textarea className="workout-description" rows="10" cols="50"
                  onChange={ this.update('description') }
                  value={ this.state.description }
                  placeholder="How did it feel? Did it rain?"></textarea>
              </section>
            </section>
          </section>

          <button onClick={ this.handleSubmit }>Create Workout</button>
        </div>
      </div>
    );
  }
}

export default WorkoutForm;
