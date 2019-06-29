import React from 'react';

export default function QuestionBlockProperties({
    questionBlock,
    questionBlockChange,
    questionsChange,
    answersChange
}) {
    return (
        <div style={{
            // color: 'white'
        }}>
            <form>
            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingOne">
                    <h4 className="panel-title" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <a className='collapsed'  role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Positions
                        </a>
                    </h4>
                    </div>
                    <div id="collapseOne" className="panel-collapse collapse in show" role="tabpanel" aria-labelledby="headingOne">
                    <div className="panel-body">
                        <div className="input-group">
                            <span className="input-group-btn">
                                x-axis
                            </span>
                            <input type="number" className="form-control form-control-sm" name='left' value={questionBlock.left} onChange={questionBlockChange}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                y-axis
                            </span>
                            <input type="number" className="form-control form-control-sm" name='top' value={questionBlock.top} onChange={questionBlockChange}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                Q Style
                            </span>
                            <select className="form-control form-control-sm" name='questionShape' defaultValue={questionBlock.questionShape} onChange={questionBlockChange}>
                                <option value='horizontal'>Horizontal</option>
                                <option value='vertical'>Vertical</option>
                            </select>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingTwo">
                    <h4 className="panel-title"  role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <a className="" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Numbers
                        </a>
                    </h4>
                    </div>
                    <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                    <div className="panel-body">
                        <div className="input-group">
                            <span className="input-group-btn">
                                Q Num
                            </span>
                            <input type="number" className="form-control form-control-sm" name='questionsNumber' defaultValue={questionBlock.questionsNumber} onChange={questionBlockChange}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                Columns Num
                            </span>
                            <input type="number" className="form-control form-control-sm" name='cols' defaultValue={questionBlock.cols} onChange={questionBlockChange}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                Choises Num
                            </span>
                            <input type="number" className="form-control form-control-sm" name='choices' defaultValue={questionBlock.choices} onChange={questionBlockChange}/>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingThree">
                    <h4 className="panel-title" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <a className=""  role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Colors
                        </a>
                    </h4>
                    </div>
                    <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                        <div className="panel-body">
                            <div className="input-group">
                                <span className="input-group-btn">
                                    background-color
                                </span>
                                <input type="color" className="form-control form-control-sm" name='background' defaultValue={questionBlock.background} onChange={questionBlockChange}/>
                            </div>
                            <div className="input-group">
                                <span className="input-group-btn">
                                    background
                                </span>
                                <select className="form-control form-control-sm" name='backgroundt' defaultValue={questionBlock.backgroundt} onChange={questionBlockChange}>
                                <option value='none'>None</option>
                                <option value='transparent'>Transparent</option>
                            </select>
                            </div>
                            <div className="input-group">
                                <span className="input-group-btn">
                                    Color
                                </span>
                                <input type="color" className="form-control form-control-sm" name='color' defaultValue={questionBlock.color} onChange={questionBlockChange}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingFour">
                    <h4 className="panel-title"  role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="true" aria-controls="collapseOne">
                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="true" aria-controls="collapseOne">
                        Margins
                        </a>
                    </h4>
                    </div>
                    <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                    <div className="panel-body">
                        <div className="input-group">
                            <span className="input-group-btn">
                                Between Columns
                            </span>
                            <input type="number" className="form-control form-control-sm" name='gridColumnGap' defaultValue={questionBlock.gridColumnGap} onChange={questionBlockChange}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                Between Rows
                            </span>
                            <input type="number" className="form-control form-control-sm" name='gridRowGap' defaultValue={questionBlock.gridRowGap} onChange={questionBlockChange}/>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingFive">
                    <h4 className="panel-title" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="true" aria-controls="collapseOne">
                        <a  role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="true" aria-controls="collapseOne">
                        Paddings
                        </a>
                    </h4>
                    </div>
                    <div id="collapseFive" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                        <div className="panel-body">
                            <div className="input-group">
                                <span className="input-group-btn">
                                    All
                                </span>
                                <input type="number" className="form-control form-control-sm" name='padding' defaultValue={questionBlock.padding} onChange={questionBlockChange}/>
                            </div>
                            <div className="input-group">
                                <span className="input-group-btn">
                                    Top
                                </span>
                                <input type="number" className="form-control form-control-sm" name='paddingTop' defaultValue={questionBlock.paddingTop} onChange={questionBlockChange}/>
                            </div>
                            <div className="input-group">
                                <span className="input-group-btn">
                                    Right
                                </span>
                                <input type="number" className="form-control form-control-sm" name='paddingRight' defaultValue={questionBlock.paddingRight} onChange={questionBlockChange}/>
                            </div>
                            <div className="input-group">
                                <span className="input-group-btn">
                                    Bottom
                                </span>
                                <input type="number" className="form-control form-control-sm" name='paddingBottom' defaultValue={questionBlock.paddingBottom} onChange={questionBlockChange}/>
                            </div>
                            <div className="input-group">
                                <span className="input-group-btn">
                                    Left
                                </span>
                                <input type="number" className="form-control form-control-sm" name='paddingLeft' defaultValue={questionBlock.paddingLeft} onChange={questionBlockChange}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingSix">
                    <h4 className="panel-title" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                        <a  role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                        Border
                        </a>
                    </h4>
                    </div>
                    <div id="collapseSix" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSix">
                    <div className="panel-body">
                        <div className="input-group">
                            <span className="input-group-btn">
                                Radius
                            </span>
                            <input type="number" className="form-control form-control-sm" name='borderRadius' defaultValue={questionBlock.borderRadius} onChange={questionBlockChange}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                Width
                            </span>
                            <input type="number" className="form-control form-control-sm" name='borderWidth' defaultValue={questionBlock.borderWidth} onChange={questionBlockChange}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                Style
                            </span>
                            <select className="form-control form-control-sm" name='borderStyle' defaultValue={questionBlock.borderStyle} onChange={questionBlockChange}>
                                    <option value='solid'>Solid</option>
                                    <option value='dotted'>Dotted</option>
                                    <option value='double'>Double</option>
                                    <option value='dashed'>Dashed</option>
                                </select>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                Color
                            </span>
                            <input type="color" className="form-control form-control-sm" name='borderColor' defaultValue={questionBlock.borderColor} onChange={questionBlockChange}/>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingSeven">
                    <h4 className="panel-title"  role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                        All Questions Padding
                        </a>
                    </h4>
                    </div>
                    <div id="collapseSeven" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSeven">
                    <div className="panel-body">
                        <div className="input-group">
                            <span className="input-group-btn">
                                All
                            </span>
                            <input type="number" className="form-control form-control-sm" name='padding' defaultValue={questionBlock.questionsStyling.padding} onChange={questionBlockChange}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                Top
                            </span>
                            <input type="number" className="form-control form-control-sm" name='paddingTop' defaultValue={questionBlock.questionsStyling.paddingTop} onChange={questionsChange}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                Right
                            </span>
                            <input type="number" className="form-control form-control-sm" name='paddingRight' defaultValue={questionBlock.questionsStyling.paddingRight} onChange={questionsChange}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                Bottom
                            </span>
                            <input type="number" className="form-control form-control-sm" name='paddingBottom' defaultValue={questionBlock.questionsStyling.paddingBottom} onChange={questionsChange}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                Left
                            </span>
                            <input type="number" className="form-control form-control-sm" name='paddingLeft' defaultValue={questionBlock.questionsStyling.paddingLeft} onChange={questionsChange}/>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingEight">
                    <h4 className="panel-title" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseEight" aria-expanded="true" aria-controls="collapseEight">
                        <a  role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseEight" aria-expanded="true" aria-controls="collapseEight">
                        Answer
                        </a>
                    </h4>
                    </div>
                    <div id="collapseEight" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingEight">
                    <div className="panel-body">
                        <div className="input-group">
                            <span className="input-group-btn">
                                Width
                            </span>
                            <input type="number" className="form-control form-control-sm" name='width' defaultValue={questionBlock.answersStyling.width} onChange={answersChange}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                FontSize
                            </span>
                            <input type="number" className="form-control form-control-sm" name='fontSize' defaultValue={questionBlock.answersStyling.fontSize} onChange={answersChange}/>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="heading9">
                    <h4 className="panel-title" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse9" aria-expanded="true" aria-controls="collapse9">
                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse9" aria-expanded="true" aria-controls="collapse9">
                        One Question
                        </a>
                    </h4>
                    </div>
                    <div id="collapse9" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading9">
                    <div className="panel-body">
                        <div className="input-group">
                            <span className="input-group-btn">
                                Margin Right
                            </span>
                            <input type="number" className="form-control form-control-sm" name='marginRight' defaultValue={questionBlock.answersStyling.marginRight} onChange={answersChange}/>
                        </div> 
                        <div className="input-group">
                            <span className="input-group-btn">
                                Margin Left
                            </span>
                            <input type="number" className="form-control form-control-sm" name='marginLeft' defaultValue={questionBlock.answersStyling.marginLeft} onChange={answersChange}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                Margin Top
                            </span>
                            <input type="number" className="form-control form-control-sm" name='marginTop' defaultValue={questionBlock.answersStyling.marginTop} onChange={answersChange}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                Margin Bottom
                            </span>
                            <input type="number" className="form-control form-control-sm" name='marginBottom' defaultValue={questionBlock.answersStyling.marginBottom} onChange={answersChange}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                Border Radius
                            </span>
                            <input type="number" className="form-control form-control-sm" name='borderRadius' defaultValue={questionBlock.questionsStyling.borderRadius} onChange={questionsChange}/>
                        </div> 
                        <div className="input-group">
                            <span className="input-group-btn">
                                Width
                            </span>
                            <input type="number" className="form-control form-control-sm" name='borderWidth' defaultValue={questionBlock.questionsStyling.borderWidth} onChange={questionsChange}/>
                        </div> 
                        <div className="input-group">
                            <span className="input-group-btn">
                                Style
                            </span>
                            <select className="form-control form-control-sm" name='borderStyle' defaultValue={questionBlock.questionsStyling.borderStyle} onChange={questionsChange}>
                                <option value='solid'>Solid</option>
                                <option value='dotted'>Dotted</option>
                                <option value='double'>Double</option>
                                <option value='dashed'>Dashed</option>
                            </select>
                        </div>  
                        <div className="input-group">
                            <span className="input-group-btn">
                                Color
                            </span>
                            <input type="color" className="form-control form-control-sm" name='borderColor' defaultValue={questionBlock.questionsStyling.borderColor} onChange={questionsChange}/>
                        </div>  
                        <div className="input-group btn-group">
                            <span className="input-group-btn">
                                bg Q Color
                            </span>
                            <input 
                                type='radio' 
                                value='columns' 
                                className=''
                                name='qStyle'
                                onChange={questionBlockChange}
                                />
                                <span>Columns</span>
                                <input 
                                type='radio' 
                                value='rows' 
                                className='ml-1'
                                name='qStyle'
                                onChange={questionBlockChange}
                                defaultChecked
                                 />
                                <span>Rows</span>
                        </div>
                        <div className="input-group btn-group">
                            <span className="input-group-btn">
                                Even/Odd
                            </span>
                            <input 
                                type='radio' 
                                value='even' 
                                className=''
                                name='qOption'
                                onChange={questionBlockChange}
                                defaultChecked/>
                                <span>Even</span>
                                <input 
                                type='radio' 
                                value='odd' 
                                className='ml-1'
                                name='qOption'
                                onChange={questionBlockChange}
                                 />
                                <span>Odd</span>
                        </div> 
                        <div className="input-group btn-group">
                            <span className="input-group-btn">
                            Background Color
                            </span>
                            <input type="color" className="form-control form-control-sm" name='qbackground' defaultValue={questionBlock.qbackground} onChange={questionBlockChange}/>
                        </div> 
                        <div className="input-group btn-group">
                            <span className="input-group-btn">
                            Backgound Style
                            </span>
                            <select className="form-control form-control-sm" name='qbackgroundt' defaultValue={questionBlock.qbackgroundt} onChange={questionBlockChange}>
                                <option value='none'>None</option>
                                <option value='transparent'>Transparent</option>
                            </select>
                        </div>      
                    </div>
                    </div>
                </div>
                </div>
            </form> 
        </div>
    )
}
