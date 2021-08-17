import React from 'react'

class TimeInput extends React.Component {
  render() {
    const { updateTimer, inputHours, inputMinuts, inputSeconds } = this.props;
    return (
      <>
        <label>Hours
          <input type="number"
          name = "inputHours"
          onChange = { updateTimer }
          value = { inputHours }
          />
        </label>
        <label>Minutes
          <input type="number"
          name = "inputMinuts"
          onChange = { updateTimer }
          value = { inputMinuts }
          />
        </label>
        <label>Seconds
          <input type="number"
          name = "inputSeconds"
          onChange = { updateTimer }
          value = { inputSeconds }/>
        </label>
      </>
    )
  }
}

export default TimeInput;
