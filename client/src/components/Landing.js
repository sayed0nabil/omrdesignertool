import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import './css/landing.css';
class Landing extends Component{
  logout = (e) => {
    //   e.preventDefault();
      this.props.logoutUser();
  }
  render(){
    const { auth } = this.props;
    let dynamicLinks = !auth.isAuthenticated?(
          <div 
          style={{
            position: 'absolute',
            top: '75%',
            left: '45%'
          }}
          className='text-center first-btns mx-auto'>
            <Link className="btn-primary" to="/login">Login</Link>
            <Link className="btn-primary" to="/signup">Signup</Link>
          </div>
    ):null;
    return (
        <div className='landing background-img default-height'>
          <div className='landing-layout'>
              <div className='container align-div'>
                <h1 className="text-center">O<sub>ptical</sub> M<sub>anpulation</sub> R<sub>aw</sub> Designer Tool</h1>
                <h3 className="text-center p-3">
                I's a web application that give doctor ability to 
                create his own answers sheets and take screenshot of it and
                also can downlaod json file that taken for evaulation process</h3>
                
              </div>
              {/* {dynamicLinks} */}
          </div>
        </div>
    )
  }
}
const mapStateToProps = (state) =>(
  {
    auth: state.auth
  }
)
export default  connect(mapStateToProps)(Landing);
