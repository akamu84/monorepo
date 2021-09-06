import './index.scss';
import React from 'react';
import Figure from '@frx/components/dist/components/Figure';

function App() {
  return (
    <div className="App">
      <Figure alt="image" src="https://picsum.photos/200" isRound size="is-128x128">
        Caption Text
        </Figure>
    </div>
  );
}

export default App;
