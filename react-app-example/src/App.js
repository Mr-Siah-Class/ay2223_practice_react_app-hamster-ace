import logo from './logo.svg';
import React from 'react';
import './App.css';

import { 
  route, userparams, Routes,BrowerRouter
} from 'react-router-dom';

import Navbar from './Components/Navbar';
import Homescreen from './screens/homescreen'
import NoScreen from './screens/NoScreens'
import ProductsScreen from './screens/ProductScreen'
import Usercart from './screens/Usercart'
import userprofile from './screens/UserProfile'
import SingleProductScreen from './screens/SinglePRoductScreen'
import HomeScreen from './screens/homescreen';

class App extends React.Component
{
  constructor() {
    super()
  }
  render(){
    return(
      <div>
        <Navbar/>

        <BrowerRouter>
        <Routes>
          <Route exact path="/" element={<HomeScreen/>}/>
          <Route path="./products" element={<ProductsScreen/>}/>
          <Route/>

            </Routes></BrowerRouter>
        <h1>Hello React! </h1>
      </div>
    );
  }
}

export default App;
