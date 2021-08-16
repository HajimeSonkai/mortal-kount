import React from 'react';
import TimeInput from './TimeImput';
import TimeDisplay from './TimeDisplay';

class KountDown extends React.Component {
    constructor () {
        super()
        this.state = {
            secondsRemaining: 10,
        }
    }

startCountdown = () => {
    setInterval(() => this.setState((prevState) => ({
        secondsRemaining:
        prevState.secondsRemaining - 1
    })), 1000);
    if (this.state.secondsRemaining === 0) {
        clearInterval();
    }
}

    render(){
        const {secondsRemaining} = this.state
        return (
            <>
            <TimeInput />
            <TimeDisplay secondsRemaining = { secondsRemaining } />
            <button onClick = { this.startCountdown }>Kount</button>
            </>
        );
    }
}

export default KountDown;