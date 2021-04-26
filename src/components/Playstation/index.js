import React from 'react';

function Playstation (props) {

  return(
    <div>
    <h2>Playstation votes: {props.state.Playstation}</h2>
    <button onClick={() => props.dispatch({"type": "increment2"})}>Add Playstation vote</button>
    <button onClick={() => props.dispatch({"type": "decrement2"})}>Remove Playstation vote</button>
    </div>
  )
}
export default Playstation;