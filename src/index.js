import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
<<<<<<< HEAD
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
=======
import { BrowserRouter, Route } from 'react-router-dom';
>>>>>>> 44d440217ac170983ad3e789cf51739ccbc1cbbd

import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
<<<<<<< HEAD
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/" component={PostsIndex} />
        </Switch>
=======
        <Route path="/hello" component={Hello} />
        <Route path="/goodbye" component={Goodbye} />
>>>>>>> 44d440217ac170983ad3e789cf51739ccbc1cbbd
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
