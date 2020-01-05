import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import Counter from './components/Counter';

const renderNotFound = () => (<div>Not Found</div>);

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/a">page A</Link>
        <Link to="/b">page B</Link>
      </header>
      <Switch>
        <Route path="/a" component={Counter} />
        <Route path="/b" component={renderNotFound} />
        <Route render={renderNotFound} />
      </Switch>
    </div>
  );
};

export default App;
