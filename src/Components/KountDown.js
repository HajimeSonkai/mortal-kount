import React from 'react';
import TimeInput from './TimeImput';
import TimeDisplay from './TimeDisplay';

class KountDown extends React.Component {
  constructor () {
    super()
      this.state = {
        secondsRemaining: 0,
        inputHours: '',
        inputMinuts: '',
        inputSeconds: '',
  }
}

startCountdown = () => {
  const updateState = () => {
    if (this.state.secondsRemaining > 0){
      this.setState ((prevState) => ({ secondsRemaining: prevState.secondsRemaining -1 }))
    } else {
      clearInterval(updateState);
    }
  }
  setInterval(updateState, 1000);
}

getTimeFromImput = ({ target }) => {
  const { name } = target;
  let { value } = target;
  if (value === '') value = 0;

  this.setState ({[name]: parseFloat(value)}, () => {
    this.setState({
      secondsRemaining: (
        this.state.inputHours*3600 +
        this.state.inputMinuts*60 +
        this.state.inputSeconds
      )
    })
  })
}

render(){
  const { secondsRemaining, inputHours, inputMinuts, inputSeconds } = this.state
  return (
    <>
      <TimeInput
      updateTimer = {this.getTimeFromImput }
      inputHours = { inputHours }
      inputMinuts = { inputMinuts }
      inputSeconds = { inputSeconds }
      />
      <TimeDisplay secondsRemaining = { secondsRemaining } />
      <button onClick = { this.startCountdown }>Kount</button>
    </>
    );
  }
}

export default KountDown;