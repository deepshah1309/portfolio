
import Home from './Home';
import './App.css';

import {Route,Switch} from 'react-router-dom';
function App() {
  return (
    <div className="App">
   
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

   </div>
  );
}

export default App;
