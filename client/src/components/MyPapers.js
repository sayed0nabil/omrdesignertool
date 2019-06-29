import React, { Component } from 'react';
import { connect } from 'react-redux';
import myPapers from '../actions/myPapers';
import dummyExamImg from './dummyExamImg.jpg';
class MyPapers extends Component {
    constructor(){
        super();
        this.state = {
            papers: [],
            errors: {}
        }
    }
    componentDidMount(){
        if(this.props.auth.isAuthenticated){
            this.props.myPapers(this.props.auth.user.id);
        } else{
            this.props.history.push('/papers');
        }
    }
  render() {
    const { papers, errors } = this.props;
    let html = errors ?
    (
        <div className=''>
            <p>You don't have any paper</p>
        </div>
    )
    :
    papers.length === 0?
    (
        
        <p className='alert alert-danger text-center m-auto w-100'>You don't have any paper</p>

    )
    :
    papers.map((paper, index) => {
        return (
            <div className='col-md-3' key={index}>
            <div className="card papercard papercardmy mt-3 mr-3"
             >
                <img 
                className="paperimg" 
                src={dummyExamImg} 
                alt='img'
                height='150'/>
                <div className="card-body paperinfo">
                    <h6 className="card-title"><b>Paper Name:</b> {paper.name}</h6>
                    <button onClick={(e) => {
                        this.props.history.push(`/papers/preview/${paper._id}/${paper.user}`)
                    }} className=" btn  d-inline-block btn-primary">Preview Paper</button>
                </div>
            </div>
            </div>
        )
    })
    return (
        <div className='layout'>
            <div className='paperpage pt-5'>
                <div className='container'>
                    <h2 className='mt-5 pt-3 text-center'>Your Papers</h2>
                    <div className='pt-2'>
                        <div className='row'>
                            {html}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
const mapStateToProps = (state) =>(
    {
        auth: state.auth,
        papers: state.papers
    }
)
export default connect(mapStateToProps, { myPapers })(MyPapers);