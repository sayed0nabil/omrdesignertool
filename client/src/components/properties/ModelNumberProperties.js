import React, { Component } from 'react'

export default class ModelNumberProperties extends Component {
  render() {
      const { modelNumber, modelNumberChange } = this.props;
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
                            <input type="number" className="form-control form-control-sm" name='x' value={modelNumber.x} onChange={modelNumberChange}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                y
                            </span>
                            <input type="number" className="form-control form-control-sm" name='y' value={modelNumber.y} onChange={modelNumberChange}/>
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
                                <select className="form-control form-control-sm" name='orientation' value={modelNumber.orientation} onChange={modelNumberChange}>
                                    <option value='horizontal'>Horizontal</option>
                                    <option value='vertical'>Vertical</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <span className="input-group-btn">
                                    Number Of Models
                                </span>
                                <input type="number" className="form-control form-control-sm" name='noModels' defaultValue={modelNumber.noModels} onChange={modelNumberChange}/>
                            </div>
                            <div className="input-group">
                                <span className="input-group-btn">
                                    Bubble Radius
                                </span>
                                <input type="number" className="form-control form-control-sm" name='bubbleWidth' defaultValue={modelNumber.bubbleWidth} onChange={modelNumberChange}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingFour">
                    <h4 className="panel-title"  data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                        <a className='accordion-toggle' role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                        Spacing
                        </a>
                    </h4>
                    </div>
                    <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                    <div className="panel-body">
                        <div className="input-group">
                            <span className="input-group-btn">
                                Space Between Columns
                            </span>
                            <input type="number" className="form-control form-control-sm" name='gridColumnGap' defaultValue={modelNumber.gridColumnGap} onChange={modelNumberChange}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                Space Between Rows
                            </span>
                            <input type="number" className="form-control form-control-sm" name='gridRowGap' defaultValue={modelNumber.gridRowGap} onChange={modelNumberChange}/>
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
