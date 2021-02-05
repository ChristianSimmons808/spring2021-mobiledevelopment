import Sidebar from './components/Sidebar.js';

const s = new Sidebar({
  menu: [
    'Albert Eggstein',
    'Attila the Hen',
    'Attila the Hen',
    'Dixie Chick',
    'Gregory Peck',
    'Mary Poopins'
  ]

});
let output = s.render()
// creates render() function and orders list in console, pulling from cont s
console.log(output);
