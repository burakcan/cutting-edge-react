import React, { PropTypes } from 'react';
import AppContainer from 'containers/App';
import CounterContainer from 'containers/Counter';
import {
  Router as ReactRouter,
  Route,
  IndexRoute,
  browserHistory,
} from 'react-router';

export default function Router({ history = browserHistory }) {
  return (
    <ReactRouter history={ history }>
      <Route path="/" component={ AppContainer }>
        <IndexRoute component={ CounterContainer } />
      </Route>
    </ReactRouter>
  );
}

Router.propTypes = {
  history: PropTypes.object,
};
