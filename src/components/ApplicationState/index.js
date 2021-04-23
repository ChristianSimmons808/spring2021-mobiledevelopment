let state = {

  Beach: 0,
  Hike: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'increment1':
     return {Beach: state.Beach +1, Hike: state.Hike};
    case 'increment2':
     return {Beach: state.Beach, Hike: state.Hike + 1};
    case 'decrement1':
     return {Beach: state.Beach -1, Hike: state.Hike };
    case 'decrement2':
     return {Beach: state.Beach , Hike: state.Hike - 1};

    default:
     throw new Error();

  }
}

export {state, reducer};
