import React, {useReducer} from 'react';
import {state, reducer} from './src/components/ApplicationState';
import Xbox from './src/components/Xbox';
import Playstation from './src/components/Playstation'
import Nintendo from './src/components/Nintendo'

function App() {

  const [currentState, dispatch] = useReducer(reducer, state);

  return(

    <div className="App">
     <header className="App-header">
      <Xbox state={currentState} dispatch={dispatch}/>
      <Playstation state={currentState} dispatch={dispatch}/>
      <Nintendo state={currentState} dispatch={dispatch}/>
      </header>
      </div>
  );
}

export default App;