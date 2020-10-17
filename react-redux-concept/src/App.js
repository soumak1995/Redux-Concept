import React from 'react';
import logo from './logo.svg';
import './App.css';
import CakeContainer from './component/CakeContainer'
import HooksCakeContainer from './component/HooksCakeContainer'
import IceCreamContainer from './component/IceCreamContainer'
import {Provider} from 'react-redux'
import store from './Redux/Store'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer/>
        <CakeContainer/>
        <IceCreamContainer/>
    </div>
    </Provider>
    
  );
}

export default App;
