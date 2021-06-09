import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  useEffect(() => {
    
  }, [])
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/users">
          asasas
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
