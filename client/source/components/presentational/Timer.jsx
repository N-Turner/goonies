import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elapsedTime: 0,
      stop: null,
      time: null,
      savePoints: [],
    };
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  startTimer() {
    this.time = setInterval(() => this.setState({
      elapsedTime: this.state.elapsedTime + 1,
    }),
    1000);
  }

  stopTimer() {
    clearInterval(this.time);
    this.setState({
      stop: this.time
    });
  }

  resetTimer() {
    const { time } = this.state;
    clearInterval(time);
    this.setState({
      elapsedTime: 0,
    });
  }
  // awesome
  saveTime() {
    let { savePoints, elapsedTime } = this.state;
    this.setState({
      savePoints: savePoints.concat([elapsedTime]),
    });
  }

  render() {
    const timeFormat = sec => (`${Math.floor(sec / 60)}:${(`0${sec % 60}`).slice(-2)}`);

    const Button = props => (<button type="button" {...props} />);
    const { elapsedTime } = this.state;
    return (
      <div>
        <div>
          <h1>
            {timeFormat(elapsedTime)}
          </h1>
          <Button onClick={this.startTimer}>Start</Button>
          <Button onClick={this.stopTimer}>Stop</Button>
          <Button onClick={this.resetTimer}>Reset</Button>
        </div>
      </div>
    );
  }
}

export default Timer;