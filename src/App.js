import React from 'react';
import './App.css';
// import { Button } from './components/Button';
import {Calculator} from './components/Calculator';
const day = 'Saturday'



function App() {
  return (
    <div className="App">
      <p>Hello!!</p>
      <p>{day}</p>
    
    <Calculator/>
    </div>
  );
}
// {
// details: "https://exchangeratesapi.io"
// }

{/* 
      <App>
        <Header>
          <Menu></Menu>
        </Header>
        <Main>
          <div></div>
          <div></div>
          <div></div>
        </Main>
        <Footer></Footer>
      </App> */}


export default App;
