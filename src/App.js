import logo from './logo.svg';


import Navber from './components/Navber/Navber';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Meal from './components/Meal/Meal'
import NotFound from './components/NotFound/NotFound';
import Resturent from './components/Resturent/Resturent';
import Button from 'react-bootstrap/Button'

function App() {
  return (
    <div className="App">
       
      <Router>
      <Navber></Navber>
            <Switch>
                <Route exact path = "/">
                    <Home></Home>
                </Route>
                <Route exact path = "/home">
                  <Home></Home>
                </Route>
                <Route exact path ="/meal">
                  <Meal></Meal>
                </Route>
                <Route exact path="/meal/:idMeal">
                  <Resturent></Resturent>
                </Route>
                <Route exact path="*">
                  <NotFound></NotFound>
                </Route>
            </Switch>
            </Router>
    </div>
  );
}

export default App;
