import React from 'react';

class KountDown extends React.Component {
    constructor () {
        super()
        this.state = {
            secondsRemaining: 1000,
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
        return (
            <>
            <p>{ this.state.secondsRemaining }</p>
            <button onClick = { this.startCountdown }>Kount</button>
            </>
        );
    }
}

export default KountDown;