import React, { Component } from 'react'
import axios from 'axios';
import dummyExamImg from './dummyExamImg.jpg';
class UserPapers extends Component {
    constructor(){
        super();
        this.state = {
            papers: [],
            err  : null
        };
    }
 componentDidMount(){
     const { userId } = this.props.match.params;
    axios.get(`/api/papers/${userId}`)
    .then( result => {
        this.setState({
            papers: result.data
        })
    })
    .catch(err => {
        this.setState({
            err: 'can not connect to db'
        })
    });
 }
  render() {
    let html = '';
    if(this.state.err){
        html = (<p>{this.state.err}</p>);
    }else if(this.state.papers.length === 0){
        html = (<p>This user doesn't have public paper</p>) 
    }
    else{
    html = this.state.papers.map((paper, index) => {
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
                        <button onClick={(e) => {
                            this.props.history.push(`/papers/preview/${paper._id}/${paper.user._id}`)
                        }} className=" btn  d-inline-block btn-info mb-3">Preview Paper</button>
                    </div>
                </div>
            </div>
        )
    });
    html =  (
        <div className='overflow-hidden pt-5 pr-5 pl-5 paperpage'>
            <div className='mt-5'>
                <div className='container'>
                <div className='pt-2'>
                <h2 className='text-center pt-3'>{this.state.papers[0].user.email} Public Papers</h2>
                    <div className='row pt-3'>
                        {html}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }
    return (
    <div className='layout'>
        {html}
    </div>
    )
  }
}
export default UserPapers;
