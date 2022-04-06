import React from 'react';
import AllItems from './Components/AllItems';
import SelectedItems from './Components/SelectedItems';


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
