
import Home from './Home';
import './App.css';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
function App() {
  return (
    <div className="App">
   <Router>
     <Switch>
          <Route exact path="/portfolio/">
            <Home/>
          </Route>
          <Route exact path="/portfolio/Contact">

          </Route>
          <Route path="/portfolio/internships">
              Internships
          </Route>
          <Route exact path="/portfolio/Projects">
            Projects
          </Route>
        </Switch>
   </Router>
   </div>
  );
}

export default App;
