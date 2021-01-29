// Component is the parent
class Component {
  constructor (props) {
    this.props = {}; //sets to empty brackets
    this.props = props; // sets value to props
  }

  render () {
    // Child objects define their own render() methods
    return '<h1>${this.props.title}</h1>'; // returns title value using render
  }
}

export default Component;
