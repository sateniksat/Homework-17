import React from 'react';
import AllItems from './AllItems';
import SelectedItems from './SelectedItems';


// https://61f6a5402e1d7e0017fd6e5f.mockapi.io/names
function App() {
  return (
    <div className='App'>
      <AllItems/>
      <SelectedItems/>
    </div>
  );
}

export default App;
