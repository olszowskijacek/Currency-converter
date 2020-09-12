import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';
import './App.css';
import Calculator from './pages/Calculator';
import Contact from './pages/Contact';
import About from './pages/About';



const day = 'Saturday'



function App() {
  return (
    <div className="App">

      <Router>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
        <p>Hello!!</p>
        <p>{day}</p>
        <Switch>
          <Route path='/' exact>
            <Calculator />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </Router>
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
