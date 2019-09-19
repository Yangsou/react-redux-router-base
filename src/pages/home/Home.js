import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../../stores/auth/index';

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.props.login('hello');
  }
  render() {
    return (
      <Fragment>
        <div>
          <button onClick={this.handleClick}>Click me</button>
        </div>
      </Fragment>
    )
  }
}
const mapState = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
  isRequesting: state.auth.isRequesting,
});
const mapDispatch = dispatch => bindActionCreators({
  login
}, dispatch)
export default connect(mapState, mapDispatch)(Home);