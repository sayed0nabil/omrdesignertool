import React, { Component } from 'react'

export default class SeatNumberProperties extends Component {
  render() {
      const { seatNumber, seatNumberChange } = this.props;
    return (
        <div style={{
            // color: 'white'
        }}>
            <form>
            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingTwo">
                    <h4 className="panel-title" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <a className="collapsed accordion-toggle"  role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Positions
                        </a>
                    </h4>
                    </div>
                    <div id="collapseTwo" className="panel-collapse collapse show" role="tabpanel" aria-labelledby="headingTwo">
                    <div className="panel-body">
                        <div className="input-group">
                            <span className="input-group-btn">
                                x
                            </span>
                            <input type="number" className="form-control form-control-sm" name='left' value={seatNumber.left} onChange={seatNumberChange}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                y
                            </span>
                            <input type="number" className="form-control form-control-sm" name='top' value={seatNumber.top} onChange={seatNumberChange}/>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingThree">
                    <h4 className="panel-title"  role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <a className=" accordion-toggle"  role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        General
                        </a>
                    </h4>
                    </div>
                    <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                        <div className="panel-body">
                            <div className="input-group">
                                <span className="input-group-btn">
                                    Style
                                </span>
                                <select className="form-control form-control-sm" name='horizontal' defaultValue={seatNumber.horizontal?'horizontal':'vertical'} onChange={seatNumberChange}>
                                    <option value='horizontal'>Horizontal</option>
                                    <option value='vertical'>Vertical</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <span className="input-group-btn">
                                    Number Of {seatNumber.horizontal?'Rows':'Columns'}
                                </span>
                                <input type="number" className="form-control form-control-sm" name='noRowORColumns' defaultValue={seatNumber.noRowORColumns} onChange={seatNumberChange}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingFour">
                    <h4 className="panel-title"  data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                        <a className='accordion-toggle' role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                        Style
                        </a>
                    </h4>
                    </div>
                    <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                    <div className="panel-body">
                        <div className="input-group">
                            <span className="input-group-btn">
                                Radius
                            </span>
                            <input type="number" className="form-control form-control-sm" name='circleWidth' defaultValue={seatNumber.circleWidth} onChange={seatNumberChange}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                FontSize
                            </span>
                            <input type="number" className="form-control form-control-sm" name='fontSize' defaultValue={seatNumber.fontSize} onChange={seatNumberChange}/>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingFive">
                    <h4 className="panel-title"  data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                        <a className='accordion-toggle' role="button"  data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                        Padding
                        </a>
                    </h4>
                    </div>
                    <div id="collapseFive" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                    <div className="panel-body">
                        <div className="input-group">
                            <span className="input-group-btn">
                                All
                            </span>
                            <input type="number" className="form-control form-control-sm" name='padding' defaultValue={seatNumber.padding} onChange={seatNumberChange}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                Top
                            </span>
                            <input type="number" className="form-control form-control-sm" name='paddingTop' defaultValue={seatNumber.paddingTop} onChange={seatNumberChange}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                Right
                            </span>
                            <input type="number" className="form-control form-control-sm" name='paddingRight' defaultValue={seatNumber.paddingRight} onChange={seatNumberChange}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                Bottom
                            </span>
                            <input type="number" className="form-control form-control-sm" name='paddingBottom' defaultValue={seatNumber.paddingBottom} onChange={seatNumberChange}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                Left
                            </span>
                            <input type="number" className="form-control form-control-sm" name='paddingLeft' defaultValue={seatNumber.paddingLeft} onChange={seatNumberChange}/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </form>
        </div>
    )
  }
}
