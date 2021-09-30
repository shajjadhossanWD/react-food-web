import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About/About';
import Foods from './components/Foods/Foods';
import Home from './components/Home/Home';
import Nav from './components/Navbar/Nav';
import Notfound from './components/Notfound/Notfound';
import Singlefood from './components/Foods/Singlefood';

function App() {
  return (
    <div className="App">
      <Router>
       <Nav/>
        <Switch>
          <Route exact path = "/home">
           <Home></Home> 
          </Route>
          <Route exact path = "/foods">
           <Foods></Foods>
          </Route>
          <Route path="/meal/:mealId">
            <Singlefood/>
          </Route>
          <Route path = "/about">
           <About></About>
          </Route>
          <Route exact path = "/">
           <Home></Home>
          </Route>
          <Route>
           <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
