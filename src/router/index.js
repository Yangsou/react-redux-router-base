import HomeRoute from '../pages/home/router';
import React, { Suspense } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import PrivateRoute from './privateRoute';

const rootRouter = [
  ...HomeRoute
]
export default () => {
  return (
    <Suspense fallback={null}>
      <Router>
        <Switch>
          {
            rootRouter.map(({isPublic, component: Component, ...rest}, idx) => {
              if (!isPublic) {
                return <PrivateRoute key={idx} component={Component} {...rest}/>
              } else {
                return (
                  <Route key={idx} component={Component} {...rest}/>
                )
              }
            })
          }
        </Switch>
      </Router>
    </Suspense>
  )
}
