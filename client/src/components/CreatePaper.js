import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import createPaper from '../actions/createPaper';
class CreateFile extends Component {
  constructor(){
    super();
    this.state = {
      errors: {}
    }
  }
  submit = (e) =>{
    e.preventDefault();
    let paper = {};
    paper.name = document.getElementById('paperName_id').value.trim();
    paper.width = +document.getElementById('paperWidth_id').value;
    paper.height = +document.getElementById('paperHeight_id').value;
    paper.access = document.getElementById('access_id').value;
    paper.bg = document.getElementById('paperbg_id').value;
    paper.paperType = document.getElementById('paperType_id').value;
    this.props.createPaper(paper, this.props.history);
    console.log(paper)
  }
  typeChange = () =>{
      let type = document.getElementById('paperType_id').value;

      if(type === 'a3') {
        document.getElementById('paperWidth_id').value= '30';
        document.getElementById('paperHeight_id').value = '42'
      } else if(type  ===  'a4') {
        document.getElementById('paperWidth_id').value= '210';
        document.getElementById('paperHeight_id').value= '297'
      } else if(type  ===  'a5'){
        document.getElementById('paperWidth_id').value= '15';
        document.getElementById('paperHeight_id').value= '21'
      } else if (type  ===  'a6') {
        document.getElementById('paperWidth_id').value= '10';
        document.getElementById('paperHeight_id').value= '15'
      }  else if(type  ===  'a7') {
        document.getElementById('paperWidth_id').value= '7';
        document.getElementById('paperHeight_id').value= '10'
      }else if(type === 'a8') {
        document.getElementById('paperWidth_id').value= '5';
        document.getElementById('paperHeight_id').value= '7'
      }else {
        document.getElementById('paperWidth_id').value= '';
        document.getElementById('paperHeight_id').value= ''
      }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.errors){
      this.setState({
        errors: nextProps.errors
      })
    }
  }
  render() {
    if(!this.props.auth.isAuthenticated){
      return this.props.history.push('/');
    }
    const { errors } = this.state;
    return (
      <div className='background-img '>
      <div className='form-layout'>
        <div className='paperpage pt-5'>
          <div className='formpage'>
        <form className='formStyle signupPadding  w-50 mx-auto' onSubmit={this.submit}>
          <h4 className='text-center'>Create New Paper</h4>
          <div className=''>
            <div className="form-group">
              <label htmlFor="name">Paper Name</label>
              <input 
              type="text" 
              id='paperName_id'
              name='name'
              className={classnames("form-control", {
                "is-invalid": errors.name
              })}
              aria-describedby="emailHelp" 
              placeholder="Enter paper name"
              defaultValue={this.state.email}
              />
              {errors.name?(
                <small className="form-text text-danger">{errors.name}</small>
              ): null}
          </div>
          
            <div className='row'>
              <div className="form-group col-md-4 pl-0">
                <label htmlFor="name">Paper Type</label>
                <select 
                className="form-control" 
                name='paperType' 
                id='paperType_id'
                onChange={this.typeChange}>
                  <option>Choose...</option>
                  <option value="a3">A3</option>
                  <option value="a4">A4</option>
                  <option value="a5">A5</option>
                  <option value="a6">A6</option>
                  <option value="a7">A7</option>
                  <option value="a8">A8</option>
                </select>
              </div>   
              <div className="form-group col-md-4 p-0">
                <label htmlFor="width">Paper Width</label>
                <input 
                type="number" 
                id='paperWidth_id'
                name='width'
                className={classnames("form-control", {
                  "is-invalid": errors.width
                })}
                aria-describedby="emailHelp" 
                placeholder="width"
                defaultValue={this.state.width}
                />
                {errors.width?(
                  <small className="form-text text-danger">{errors.width}</small>
                ): null}
              </div>
              <div className="form-group col-md-4 pr-0">
                <label htmlFor="height">Paper Height</label>
                <input 
                type="number"
                id = "paperHeight_id"
                name='height'
                className={classnames("form-control", {
                  "is-invalid": errors.height
                })}
                aria-describedby="emailHelp" 
                placeholder="height"
                defaultValue={this.state.height}
                />
                {errors.height?(
                  <small className="form-text text-danger">{errors.height}</small>
                ): null}
              </div>
              
            </div>
            
            <div className="form-group">
              <label htmlFor='paperAccess'>Paper Access</label>
              <select 
              className="form-control" 
              name='access' 
              defaultValue="public"
              id='access_id'>
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="bg">Paper Background Color</label>
              <input 
              type="color"
              id="paperbg_id"
              name='bg'
              className="form-control"
              aria-describedby="emailHelp" 
              defaultValue="#FFFFFF"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Create Paper</button>
        </div>
      </form>
        </div>
        </div>
      </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => (
  {
    auth: state.auth,
    errors: state.errors
  }
)
export default connect(mapStateToProps , { createPaper })(withRouter(CreateFile));
