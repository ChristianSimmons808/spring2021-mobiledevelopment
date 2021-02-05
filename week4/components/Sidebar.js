import Component from './Component.js';

class Sidebar extends Component {

  constructor (props) {
    super(props);
  }

  render () {
  // creates function for ul/li list
    let responseHTML = '';
    responseHTML += '<ul>'
    this.props.menu.forEach( (item) => {
      responseHTML += '<li>'
      responseHTML += item
      responseHTML += '</li>'
    });
    responseHTML += '</ul>'
    return responseHTML;
  }
}

export default Sidebar;
