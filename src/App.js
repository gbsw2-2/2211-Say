import { useState } from 'react';
import Controller from './SayController';
import Viewer from './SayViewer';

function App() {
  const [ message, setMessage ] = useState('')

  const handleSetMessage = (value) => {
    setMessage(value)
  }

  return (
    <div>
      <Controller handleSetMessage={ handleSetMessage } />
      {/* <div>
        <button onClick={ () => handleSetMessage('안녕하세요!') }>입장</button>
        <button onClick={ () => handleSetMessage('안녕히 가세요!') }>퇴장</button>
      </div> */}
      <Viewer message={ message } />
      {/* <div>
        <h1>{message}</h1>
      </div> */}
    </div>
  );
}

export default App;