import React from 'react';

function Beach (props) {

  return(
    <div>
    <h2>Beach days: {props.state.Beach}</h2>
    <button onClick={() => props.dispatch({"type": "increment1"})}>Add Beach day</button>
    <button onClick={() => props.dispatch({"type": "decrement1"})}>Remove Beach day</button>
    </div>
  )
}
export default Beach;
