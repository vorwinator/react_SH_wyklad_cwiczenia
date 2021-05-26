import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';

import Home from './views/home/Home';
import Movie from './views/movie/Movie';
import Page404 from './views/page404/Page404';
import store from './store';

import './App.css';
import TodoPanel from './views/todoPanel/TodoPanel';

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Provider store = {store}>
          <Switch>
            <Route path="/movie/:id" component={Movie} exact/>
            <Route path="/" component={Home} exact/>
            <Route path="/todos" component={TodoPanel}/>
            <Route path="*" component={Page404} />
          </Switch>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
