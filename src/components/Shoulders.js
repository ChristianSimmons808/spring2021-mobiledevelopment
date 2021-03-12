import React, {Component} from 'react'

class Shoulders extends Component{
constructor(props){
  super(props);
  this.state = {
    days: 0
  };
};



render() {

  return(

    <div>
      <h4>Shoulder days: {this.state.days}</h4>
      <button onClick= {() => this.setState({days: this.state.days + 1})  }>Lift!</button>
      <button onClick={() => this.setState({days: 0})}>Reset Counter</button>
    </div>

  );
}
}

export default Shoulders;
