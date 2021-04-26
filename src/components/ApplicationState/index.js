let state = {

    Xbox: 0,
    Playstation: 0,
    Nintendo: 0,
  };
  
  function reducer(state, action) {
    switch (action.type) {
      case 'increment1':
       return {Xbox: state.Xbox +1, Playstation: state.Playstation, Nintendo: state.Nintendo};
      case 'increment2':
       return {Xbox: state.Xbox, Nintendo: state.Nintendo, Playstation: state.Playstation + 1};
       case 'increment3':
       return {Xbox: state.Xbox, Playstation: state.Playstation, Nintendo: state.Nintendo + 1};
      
      case 'decrement1':
       return {Xbox: state.Xbox -1, Playstation: state.Playstation, Nintendo: state.Nintendo };
      case 'decrement2':
       return {Xbox: state.Xbox , Nintendo: state.Nintendo, Playstation: state.Playstation - 1};
       case 'decrement3':
        return {Xbox: state.Xbox , Playstation: state.Playstation, Nintendo: state.Nintendo - 1};
  
      default:
       throw new Error();
  
    }
  }
  
  export {state, reducer};