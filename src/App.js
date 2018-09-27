import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

import Main from './components/Main';
import NavBar from './components/NavBar';
import SideNav from './components/SideNav';
//import Footer from './components/Footer';


const App = () => (
  <Provider store={store}>
    <div className="App">
    	<SideNav />
		<NavBar />
		<Main />
    </div>
  </Provider>
)

export default App;
