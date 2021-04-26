import React from 'react';

function Xbox (props) {

  return(
    <div>
    <h2>Xbox vote: {props.state.Xbox}</h2>
    <button onClick={() => props.dispatch({"type": "increment1"})}>Add Xbox vote</button>
    <button onClick={() => props.dispatch({"type": "decrement1"})}>Remove Xbox vote</button>
    </div>
  )
}
export default Xbox;