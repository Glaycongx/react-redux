import * as React from 'react';

import { Route } from 'react-router-dom';

// Pages

import { Home } from './pages';

class App extends React.Component {
   render() {
    return (
      <div className="App">
				<Route exact path='/' component={Home} />
      </div>
    );
  }
}

export default App;
