
import Home from './Home';
import './App.css';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
function App() {
  return (
    <div className="App">
   <Router>
     <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/Contact">

          </Route>
          <Route path="/internships">
              Internships
          </Route>
          <Route path="/projects">
            Projects
          </Route>
        </Switch>
   </Router>
   </div>
  );
}

export default App;
