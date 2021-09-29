import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Friends from './components/Friends/Friends';
import About from './components/About/About';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Culture from './components/Culture/Culture';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/friends">
            <Friends></Friends>
          </Route>
          <Route path="/friend/:friendID">
            <FriendDetails></FriendDetails>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/about/culture">
            <Culture></Culture>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
