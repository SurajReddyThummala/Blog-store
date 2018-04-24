import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import PostIndex from "./components/PostIndex";
import NewPost from "./components/NewPost";
import ShowPost from "./components/ShowPost";
import reducers from "./reducers";
import { Router, BrowserRouter, Route, Link, Switch } from "react-router-dom";
import ReducerPromise from 'redux-promise';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MaterialUiForm from './components/NewPost';

const createStoreWithMiddleware = applyMiddleware(ReducerPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
         <div>
           <Switch>
             <Route exact path="/" component={PostIndex} />
             <Route path="/posts/:id" component={ShowPost} />

             <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div style={{ padding: 15 }}>
      <Route path="/post/new" component={MaterialUiForm} />
      </div>
    </MuiThemeProvider>

           </Switch>
         </div>
       </BrowserRouter>

  </Provider>,
  document.querySelector(".container")
);
