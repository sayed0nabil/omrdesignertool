import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authAction';
import {Link} from 'react-router-dom';
class Login extends Component {
 constructor(){
     super();
     this.state = {
         email: '',
         password: '',
         errors: {}
     }
 }
 submit = (e) =>{
     e.preventDefault();
     let userData = {};
     userData.email = document.getElementById('email_in').value;
     userData.password = document.getElementById('password_in').value;
     this.props.loginUser(userData);
 }
 componentDidMount(){
   if(this.props.auth.isAuthenticated)
      this.props.history.push('/mypapers');
 }
 componentWillReceiveProps(nextProps){
   if(nextProps.auth.isAuthenticated){
      this.props.history.push('/mypapers');
   }
   if(nextProps.errors){
     this.setState({
       errors: nextProps.errors
     })
   }
 }
  render() {
    const { errors } = this.state;
    return (
        <div className='background-img'>
          <div className='form-layout'>
          <div className='paperpage '>
          <div className=' formpageLogin '>
            <form className='formStyle mx-auto' onSubmit={this.submit}>
              <h4 className='text-center'>Login</h4>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input 
                type="email" 
                className={classnames("form-control", "error-border", {
                  "is-invalid": errors.email
                })}
                id="email_in" 
                aria-describedby="emailHelp" 
                placeholder="Enter email"
                defaultValue={this.state.email}
                />
                {errors.email?(
                  <small id="emailHelp" className="form-text text-danger">{errors.email}</small>
                ): null}
            </div>
            <div className="form-group">
              <label htmlFor="password1">Password</label>
              <input 
              type="password" 
              className= {classnames("form-control", "error-border", {
                "is-invalid": errors.password
              })}
              id="password_in" 
              placeholder="Enter Password"
              defaultValue={this.state.password1}
              />
              {errors.password?(
                <small id="emailHelp" className="form-text text-danger">{errors.password}</small>
              ):null}
            </div>
            <button type="submit" className="btn mt-2 w-100 mb-3">Login</button>
            <div className="or-seperator"></div><i>or</i><div className="or-seperator"></div>
            <div className='clearfix'></div>
             <p className="text-center mt-4">SignUp New Account 
                <Link to='/signup'> Signup </Link>
             </p>
          </form>
          </div>
          </div>
          </div>
        </div>
    )
  }
}
const mapStatetoProps = (state) =>(
  {
    auth  : state.auth,
    errors: state.errors
  }
)
export default connect(mapStatetoProps, { loginUser })(Login)
