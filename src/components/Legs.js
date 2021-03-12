import React, {Component} from 'react'

class Legs extends Component{
constructor(props){
  super(props);
  this.state = {
    days: 0
  };
};



render() {

  return(

    <div>
      <h3>Leg days: {this.state.days}</h3>
      <button onClick= {() => this.setState({days: this.state.days + 1})  }>Lift!</button>
      <button onClick={() => this.setState({days: 0})}>Reset Counter</button>
    </div>

  );
}
}

export default Legs;
