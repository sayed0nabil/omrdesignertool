import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import allPapers from '../actions/allPapersAction';
import axios from 'axios';
import dummyExamImg from './BubbleAnswerSheet.jpg';
import './css/papers.css'
class Papers extends Component {
    constructor(){
        super();
        this.state = {
            errors: {}
        }
    }
  userPaper = (userId) => {
      axios.get(`/api/papers/${userId}`)
      .then(result => {
        this.setState({
            papers: result.data
        })
      })
      .catch( err => {
          this.setState({
              error: err.response.data
          })
      })
  }
  componentDidMount(){
      let loggedUserId = null;
      if(this.props.auth.isAuthenticated)
        loggedUserId = this.props.auth.user.id
      setTimeout(this.props.allPapers(loggedUserId), 20000);
  }
  componentWillReceiveProps(nextProps){
      if(nextProps.errors)
        this.setState({
            errors: nextProps.errors
        })
      else if(nextProps.papers)
        this.setState({
            papers: nextProps.papers
        })
  }
  render() {
    if(!this.state.papers){
        return(
            <div className='layout pt-5'>
                <div className='overflow-hidden pt-5 pr-5 pl-5' style={{paddingBottom:'55px'}}>
                    Looding
                </div>
            </div>
        )
    }
    else if(this.state.papers.length === 0){
        return(
            <div className='layout pt-5'>
                <div className='overflow-hidden pt-5 pr-5 pl-5' style={{paddingBottom:'55px'}}>
                    <div className='alert alert-danger text-center d-inline-block w-100  mt-5'>
                        There is no public Papers
                    </div>
                </div>
            </div>
        )
    }else{  
            let papersHtml = this.state.papers.map((paper, index) => {
                return ( 
                    <div className='col-md-3' key={index}>
                        <div className="card papercard"
                            >
                            <img 
                            className="paperimg" 
                            src={dummyExamImg} 
                            alt='img'
                            height='150'
                            />
                            <div className="card-body paperinfo">
                                <h6 className="card-title"><b>Paper Name:</b> {paper.name}</h6>
                                <p className="card-text">Created By: <Link to={`/papers/${paper.user._id}`}>{paper.user.email}</Link></p>
                                <button onClick={(e) => {
                                    this.props.history.push(`/papers/preview/${paper._id}/${paper.user._id}`)
                                }} className=" btn  d-inline-block btn-info mb-3">Preview Paper</button>
                            </div>
                        </div>
                    </div>
                )
            });
            return(
                <div className='layout'>
                    <div className='overflow-hidden pt-5 pr-5 pl-5 paperpage'>
                        <div className='mt-5'>
                            <div className='container'>
                            <h2 className='mt-5 pt-3 text-center'>Public Papers</h2>
                            <div className='pt-2'>
                                <div className='row'>
                                    {papersHtml}
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
    }
  }
}
const mapStateToProps = (state) => (
    {
        auth  : state.auth,
        papers: state.papers
    }
)
export default connect(mapStateToProps, { allPapers })(Papers);
