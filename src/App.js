import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import LogDetails from './LogDetails';
import GoalDetails from './GoalDetails';
import Evaluate from './Evaluate';
import Chat from './Chat';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/update">
              <LogDetails />
            </Route>
            <Route path="/goals/:id">
              <GoalDetails />
            </Route>
            <Route path="/evaluate">
              <Evaluate />
            </Route>
            <Route path="/chat">
              <Chat />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;