import React from 'react';

function Hike (props) {

  return(
    <div>
    <h2>Hike days: {props.state.Hike}</h2>
    <button onClick={() => props.dispatch({"type": "increment2"})}>Add Hike day</button>
    <button onClick={() => props.dispatch({"type": "decrement2"})}>Remove Hike day</button>
    </div>
  )
}
export default Hike;
