import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { MainPage, UsersPage, SignInPageContainer, Profile , App1} from '../pages';

import { Navbar } from '../components';
import { ROUTES } from '../const';

class Navigator extends Component {

  state = {
    userData : null,
  }

  setUserData = (XXX) => {
    this.setState({userData : XXX});
    console.log(this.state.userData);
  }

  render () {
    return (
      <BrowserRouter>
        <Navbar userData = {this.state.userData}/>
        <Switch>
          <Route path={'/users/:index'} component = {Profile}/>
          <Route path={ROUTES.USERS} component={UsersPage} />
          <Route path={ROUTES.CUSTOMINPUT} component={App1} />
          <Route path={ROUTES.SIGNIN} render ={ (props) => <SignInPageContainer setUserData = {this.setUserData} {...props}/>}/>{/*component={SignInPageContainer} */}
          <Route path={ROUTES.MAIN} component={MainPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Navigator;