import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { Provider } from 'react-redux';
// Custom components
import store  from './store';
import Navbar from './components/Navbar';
import Landing   from './components/Landing';
import Signup from './components/Signup';
import Login  from './components/Login';
import Footer from './components/Footer';
import CreatePaper from './components/CreatePaper';
import Papers from './components/Papers';
import MyPapers from './components/MyPapers';
import UserPapers from './components/UserPapers';
import PaperPreview from './components/PaperPreview';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './actions/authAction';
import { logoutUser } from './actions/authAction';

import './App.css';
if(localStorage.jwttoken){
  setAuthToken(localStorage.jwttoken);
  const decoded = jwt_decode(localStorage.jwttoken);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime){
    store.dispatch(logoutUser());
    window.location.href = '/login';
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
          <React.Fragment>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Landing}/> 
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/createpaper' component={CreatePaper} />
            <Route exact path='/papers' component={Papers} />
            <Route exact path='/mypapers' component={MyPapers} />
            <Route exact path='/papers/preview/:paperId/:userId' component={PaperPreview} />
            <Route exact path='/papers/:userId' component={UserPapers} />
          </Switch>
          <Footer />
          </React.Fragment>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
