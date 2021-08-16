import React from 'react'

class TimeInput extends React.Component {
  render() {
    return (
      <>
        <label>Hours
          <input type="number" />
        </label>
        <label>Minutes
          <input type="number" />
        </label>
        <label>Seconds
          <input type="number" />
        </label>
      </>
    )
  }
}

export default TimeInput;
