import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShortenerPage from './pages/Shortener/ShortenerPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ShortenerPage} />
      </Switch>
    </Router>
  );
}

export default App;
