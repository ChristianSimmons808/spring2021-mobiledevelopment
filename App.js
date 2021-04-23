import React, {useReducer} from 'react';
import {state, reducer} from './src/components/ApplicationState';
import Beach from './src/components/beach';
import Hike from './src/components/hike'

function App() {

  const [currentState, dispatch] = useReducer(reducer, state);

  return(
    <div className="App">
     <header className="App-header">
      <Beach state={currentState} dispatch={dispatch}/>
      <Hike state={currentState} dispatch={dispatch}/>
      </header>
      </div>
  );
}

export default App;
