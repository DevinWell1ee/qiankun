/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";

import './App.css';

import Home from './Home'
import About from './About'


let routeConfig = [
  {path:'/home',title:'home',exact:false,component:Home},
  {path:'/about',title:'about',exact:false,component:About},
]


function App() {
  const skip = useCallback(function() {
    // eslint-disable-next-line no-restricted-globals
    history.pushState(null, '/sub-vue', '/sub-vue')
  }, [])

  return (
    <Router basename={window.__POWERED_BY_QIANKUN__ ? '/sub-react' : '/'}>
      <div>
        <div>
          <h1>
            hello react
          </h1>

          <ul>
            <li>
              <Link to="/home">跳转到home</Link>
            </li>
            <li>
              <Link to="/about">跳转到about</Link>
            </li>
            <li>
              <div onClick={() => skip()}>跳转到sub-vue</div>
            </li>
          </ul>
        </div>

        <div>
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            {
              routeConfig.map((item,index)=>{
                  return (<Route key={index} exact={item.exact} path={item.path}  component={item.component} />)
              })
            }
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
