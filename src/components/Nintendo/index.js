import React from 'react';

function Nintendo (props) {

  return(
    <div>
    <h2>Nintendo votes: {props.state.Nintendo}</h2>
    <button onClick={() => props.dispatch({"type": "increment3"})}>Add Nintendo vote</button>
    <button onClick={() => props.dispatch({"type": "decrement3"})}>Remove Nintendo vote</button>
    </div>
  )
}
export default Nintendo;