import React from 'react';
import AllItems from './Components/AllItems';
import SelectedItems from './Components/SelectedItems';
import AllItemsProvider from './Context/AllItemsContext';


// https://61f6a5402e1d7e0017fd6e5f.mockapi.io/names
function App() {
  return (
    <div className='App'>
      <AllItemsProvider>
      <AllItems/>
      <SelectedItems/>
      </AllItemsProvider>
    </div>
  );
}

export default App;
