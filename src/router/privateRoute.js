import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

function mapState(state) {
  return ({
    isAuthorized: state.auth.isLoggedIn,
  })
}

const PrivateRender = (Component, isAuthorize, {location, title}) => {
  if (isAuthorize) {
    document.title = title;
    return (<Component />)
  } else {
    const login = {pathname: '/login', state: {from: location.pathname}};
    return (
      <Redirect to={login}/>
    )
  }
};


const PrivateRoute = connect(mapState)(({component, isAuthorized, ...rest}) => {
  return (
    <Route {...rest} render = {(props) => PrivateRender(component, isAuthorized, rest = {...rest, ...props})} />
  )
});

export default PrivateRoute;
