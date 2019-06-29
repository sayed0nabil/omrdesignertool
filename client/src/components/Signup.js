import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux';
import {registerUser } from '../actions/authAction';
import {Link} from 'react-router-dom'
class Signup extends Component {
 constructor(){
     super();
     this.state = {
         name: '',
         email: '',
         password1: '',
         password2: '',
         errors: {}
     }
 }
 submit = (e) =>{
     e.preventDefault();
     let data = {};
     data.name = document.getElementById('name_in').value;
     data.email = document.getElementById('email_in').value;
     data.password1 = document.getElementById('password1_in').value;
     data.password2 = document.getElementById('password2_in').value;
     this.props.registerUser(data, this.props.history);
 }
 componentDidMount(){
  if(this.props.auth.isAuthenticated)
     this.props.history.push('/papers');
}
 componentWillReceiveProps(nextProps){
    if(nextProps.errors){
      this.setState({
        errors: nextProps.errors
      })
    }
}
  render() {
    return (
      // custom-container landing background-img default-height
      // formStyle signupPadding
      <div className='background-img'>
      <div className='form-layout'>
        <div className='paperpage '>
          <div className=' formpage '>
            <form className='formStyle signupPadding mx-auto' onSubmit={this.submit}>
              <h4 className='text-center'>Signup New Account</h4>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                type="text"
                className= {classnames("form-control", {
                  'is-invalid': this.state.errors.name,
                })}
                id="name_in" 
                aria-describedby="emailHelp" 
                placeholder="Enter Name"
                defaultValue={this.state.name} 
                />
                {this.state.errors.name?(
                  <small className='form-text text-danger'>
                    {this.state.errors.name}
                  </small>
                ):null}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input 
                type="text" 
                className= {classnames("form-control" , {
                  'is-invalid': this.state.errors.email
                })}
                id="email_in" 
                aria-describedby="emailHelp" 
                placeholder="Enter email"
                defaultValue={this.state.email}
                />
                {this.state.errors.email?(
                  <small className='form-text text-danger'>
                    {this.state.errors.email}
                  </small>
                ):null}
              </div>

              <div className="form-group">
              <div className='row'>
                <div className='col-md-6 pl-0'>
                <label htmlFor="password1">Password</label>
                <input 
                type="password" 
                className={classnames("form-control", {
                  "is-invalid": this.state.errors.password1
                })}
                id="password1_in" 
                placeholder="Enter Password"
                defaultValue={this.state.password1}
                />
                {this.state.errors.password1?(
                  <small className='form-text text-danger'>
                    {this.state.errors.password1}
                  </small>
                ):null}
              </div>
              <div className="col-md-6 pr-0">
                <label htmlFor="password2">Password</label>
                <input 
                type="password" 
                className={classnames("form-control", {
                  'is-invalid': this.state.errors.password2
                })}
                id="password2_in" 
                placeholder="Confirm password"
                defaultValue={this.state.password2} 
                />
                {this.state.errors.password2?(
                  <small className='form-text text-danger'>
                    {this.state.errors.password2}
                  </small>
                ):null}
              </div>
              </div>
              </div>
              <button type="submit" className="btn w-100 mb-3">Register</button>
              <div className="or-seperator"></div><i>or</i><div className="or-seperator"></div>
              <div className='clearfix'></div>
              <p className="text-center mt-4">Login Existing Account 
                  <Link to='/login'> Login </Link>
              </p>
            </form>
            </div>
        </div>
      </div>
      </div>
    )
  }
}
const mapStatetoProps = state => (
  {
    auth: state.auth,
    errors: state.errors
  }
)
export default connect(mapStatetoProps, {registerUser})(withRouter(Signup));
