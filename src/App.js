import { useState } from 'react';
import SayController from './SayController';
import Viewer from './SayViewer';
import SayColor from './SayColor';

function App() {
  const [ message, setMessage ] = useState('');
  const [color, setColor] = useState('black');

  const handleSetMessage = (value) => {
    setMessage(value);
  }
  const ColorHandler = (color) => {
    setColor(color);
  };

  return (
    <div>
      <SayController handleSetMessage={ handleSetMessage } />
      <Viewer message={ message } color={color}/>
      <SayColor ColorHandler = {ColorHandler} />
    </div>

  );  
}
export default App;