import React from 'react'

export default function ContentBlockProperties({
    contentBlockArray,
    contentDetermined,
    contentBlockChange,
    images
}) {
    let rootContentBlockElement =
    contentBlockArray[contentDetermined[contentDetermined.length - 1].index];
    let item = rootContentBlockElement;
    for(let i=contentDetermined.length - 2; i>=0; i--){
        item = item.childrends[contentDetermined[i]];
    }
    const dynamicContentTr = item.content || item.content === '' ? (
        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
            <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingFive">
                <h4 className="panel-title"  role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                    <a className='accordion-toggle'  role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                    Content
                    </a>
                </h4>
                </div>
                <div id="collapseFive" className="panel-collapse collapse show" role="tabpanel" aria-labelledby="headingFive">
                    <div className="panel-body">
                        <div className="input-group">
                            <span className="input-group-btn">
                                Image
                            </span>
                            <select className="form-control form-control-sm" name='img' value={item.img} onChange={contentBlockChange}>
                                <option value='none'>None</option>
                                {images.map(image => (
                                    <option 
                                    key={image._id}
                                    value={image.name}>{image.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                Text
                            </span>
                            <input 
                            disabled={item.img!=='none'?"disabled":""}
                            id='contentText' type="text" className="form-control form-control-sm" name='content' value={item.content} onChange={contentBlockChange}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                Font Size
                            </span>
                            <input 
                            disabled={item.img!=='none'?"disabled":""}
                            type="number" className="form-control form-control-sm" name='fontSize' value={item.fontSize} onChange={contentBlockChange}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                Font Weight
                            </span>
                            <select 
                            disabled={item.img!=='none'?"disabled":""}
                            className="form-control form-control-sm" name='fontWeight' value={item.fontWeight} onChange={contentBlockChange}>
                                <option value='normal'>Normal</option>
                                <option value='bold'>Bold</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                Color
                            </span>
                            <input 
                            disabled={item.img!=='none'?"disabled":""}
                            type="color" className="form-control form-control-sm" name='color' value={item.color} onChange={contentBlockChange}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                Align Text Horizontal
                            </span>
                            <select 
                            disabled={item.img!=='none'?"disabled":""}
                            className="form-control form-control-sm" name='textAlign' value={item.textAlign} onChange={contentBlockChange}>
                                <option value='flex-start'>Left</option>
                                <option value='center'>Center</option>
                                <option value='flex-end'>Right</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                Align Text Vertical
                            </span>
                            <select 
                            disabled={item.img!=='none'?"disabled":""}
                            className="form-control form-control-sm" name='alignItems' value={item.alignItems} onChange={contentBlockChange}>
                                <option value='flex-start'>Up</option>
                                <option value='center'>Center</option>
                                <option value='flex-end'>Down</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                BackgroundStyle
                            </span>
                            <select 
                            disabled={item.img!=='none'?"disabled":""}
                            className="form-control form-control-sm" name='backgroundt' value={item.backgroundt} onChange={contentBlockChange}>
                                <option value='none'>none</option>
                                <option value='transparent'>Transparent</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                BackgroundColor
                            </span>
                            <input 
                            disabled={item.img!=='none'?"disabled":""}
                            type="color" className="form-control form-control-sm" name='background' value={item.background} onChange={contentBlockChange}/>
                        </div>
                    </div>
                </div>
            </div>            
            <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingThree">
                <h4 className="panel-title collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseContentPadding" aria-expanded="true" aria-controls="collapseContentPadding">
                    <a className=" accordion-toggle collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseContentPadding" aria-expanded="true" aria-controls="collapseContentPadding">
                    Padding
                    </a>
                </h4>
                </div>
                <div id='collapseContentPadding' className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                    <div className="panel-body">
                        <div className="input-group">
                            <span className="input-group-btn">
                                All
                            </span>
                            <input type="number" className="form-control form-control-sm" name='padding' value={item.padding} onChange={contentBlockChange}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                Padding Top
                            </span>
                            <input type="number" className="form-control form-control-sm" name='paddingTop' value={item.paddingTop} onChange={contentBlockChange}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                Padding Bottom
                            </span>
                            <input type="number" className="form-control form-control-sm" name='paddingBottom' value={item.paddingBottom} onChange={contentBlockChange}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                Padding Left
                            </span>
                            <input type="number" className="form-control form-control-sm" name='paddingLeft' value={item.paddingLeft} onChange={contentBlockChange}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                Padding Right
                            </span>
                            <input type="number" className="form-control form-control-sm" name='paddingRight' value={item.paddingRight} onChange={contentBlockChange}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingSix">
            <h4 className="panel-title collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                <a className='accordion-toggle collapsed'  role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
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
                    <input type="number" className="form-control form-control-sm" name='borderRadius' defaultValue={item.borderRadius} onChange={contentBlockChange}/>
                </div>
                <div className="input-group">
                    <span className="input-group-btn">
                        Width
                    </span>
                    <input type="number" className="form-control form-control-sm" name='borderWidth' defaultValue={item.borderWidth} onChange={contentBlockChange}/>
                </div>
                <div className="input-group">
                    <span className="input-group-btn">
                        Style
                    </span>
                    <select className="form-control form-control-sm" name='borderStyle' defaultValue={item.borderStyle} onChange={contentBlockChange}>
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
                    <input type="color" className="form-control form-control-sm" name='borderColor' defaultValue={item.borderColor} onChange={contentBlockChange}/>
                </div>
            </div>
            </div>
        </div>
        </div>
        
    ):(null);
    const dynamicContentBlockTrs = contentDetermined.length === 1 ?(
        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
            <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingTwo">
                <h4 className="panel-title"  role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <a className=" accordion-toggle"   role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Positions
                    </a>
                </h4>
                </div>
                <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                <div className="panel-body">
                    <div className="input-group">
                        <span className="input-group-btn">
                            x
                        </span>
                        <input type="number" className="form-control form-control-sm" name='left' value={item.left} onChange={contentBlockChange}/>
                    </div>
                    <div className="input-group">
                        <span className="input-group-btn">
                            y
                        </span>
                        <input type="number" className="form-control form-control-sm" name='top' value={item.top} onChange={contentBlockChange}/>
                    </div>
                </div>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingThree">
                <h4 className="panel-title" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseContentBlockPadding" aria-expanded="false" aria-controls="collapseContentBlockPadding">
                    <a className=" accordion-toggle" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseContentBlockPadding" aria-expanded="false" aria-controls="collapseContentBlockPadding">
                    Padding
                    </a>
                </h4>
                </div>
                <div id='collapseContentBlockPadding' className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                    <div className="panel-body">
                        <div className="input-group">
                            <span className="input-group-btn">
                                All
                            </span>
                            <input type="number" className="form-control form-control-sm" name='padding' value={item.padding} onChange={contentBlockChange}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                Padding Top
                            </span>
                            <input type="number" className="form-control form-control-sm" name='paddingTop' value={item.paddingTop} onChange={contentBlockChange}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                Padding Bottom
                            </span>
                            <input type="number" className="form-control form-control-sm" name='paddingBottom' value={item.paddingBottom} onChange={contentBlockChange}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                Padding Left
                            </span>
                            <input type="number" className="form-control form-control-sm" name='paddingLeft' value={item.paddingLeft} onChange={contentBlockChange}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                Padding Right
                            </span>
                            <input type="number" className="form-control form-control-sm" name='paddingRight' value={item.paddingRight} onChange={contentBlockChange}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingThree">
                <h4 className="panel-title" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <a className=" accordion-toggle" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Dimintions
                    </a>
                </h4>
                </div>
                <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                    <div className="panel-body">
                        <div className="input-group">
                            <span className="input-group-btn">
                                Min Width
                            </span>
                            <input type="number" className="form-control form-control-sm" name='minWidth' value={item.minWidth} onChange={contentBlockChange}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                Min Height
                            </span>
                            <input type="number" className="form-control form-control-sm" name='minHeight' value={item.minHeight} onChange={contentBlockChange}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingFour">
                <h4 className="panel-title" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="true" aria-controls="collapseOne">
                    <a className='accordion-toggle'  role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="true" aria-controls="collapseOne">
                    Spaces
                    </a>
                </h4>
                </div>
                <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                <div className="panel-body">
                    <div className="input-group">
                        <span className="input-group-btn">
                            Between Columns
                        </span>
                        <input type="number" className="form-control form-control-sm" name='gridColumnGap' defaultValue={item.gridColumnGap} onChange={contentBlockChange}/>
                    </div>
                    <div className="input-group">
                        <span className="input-group-btn">
                            Between Rows
                        </span>
                        <input type="number" className="form-control form-control-sm" name='gridRowGap' defaultValue={item.gridRowGap} onChange={contentBlockChange}/>
                    </div>
                </div>
                </div>
            </div>
            <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingSix">
            <h4 className="panel-title collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#borderContentBlockWithoutpos" aria-expanded="true" aria-controls="borderContentBlockWithoutpos">
                <a className='accordion-toggle collapsed'  role="button" data-toggle="collapse" data-parent="#accordion" href="#borderContentBlockWithoutpos" aria-expanded="true" aria-controls="borderContentBlockWithoutpos">
                Border
                </a>
            </h4>
            </div>
            <div id="borderContentBlockWithoutpos" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSix">
            <div className="panel-body">
                <div className="input-group">
                    <span className="input-group-btn">
                        Radius
                    </span>
                    <input type="number" className="form-control form-control-sm" name='borderRadius' defaultValue={item.borderRadius} onChange={contentBlockChange}/>
                </div>
                <div className="input-group">
                    <span className="input-group-btn">
                        Width
                    </span>
                    <input type="number" className="form-control form-control-sm" name='borderWidth' defaultValue={item.borderWidth} onChange={contentBlockChange}/>
                </div>
                <div className="input-group">
                    <span className="input-group-btn">
                        Style
                    </span>
                    <select className="form-control form-control-sm" name='borderStyle' value={item.borderStyle} onChange={contentBlockChange}>
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
                    <input type="color" className="form-control form-control-sm" name='borderColor' value={item.borderColor} onChange={contentBlockChange}/>
                </div>
            </div>
            </div>
            </div>
        </div>
        
       
    ):(null);
    const dynamicContentBlockTrsWithoutPos = contentDetermined.length > 1 
    && (item.rows > 1 || item.cols > 1) ?(
        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
            <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingThree">
                <h4 className="panel-title" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseContentBlockPadding" aria-expanded="false" aria-controls="collapseContentBlockPadding">
                    <a className=" accordion-toggle" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseContentBlockPadding" aria-expanded="false" aria-controls="collapseContentBlockPadding">
                    Padding
                    </a>
                </h4>
                </div>
                <div id='collapseContentBlockPadding' className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                    <div className="panel-body">
                        <div className="input-group">
                            <span className="input-group-btn">
                                All
                            </span>
                            <input type="number" className="form-control form-control-sm" name='padding' value={item.padding} onChange={contentBlockChange}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                Padding Top
                            </span>
                            <input type="number" className="form-control form-control-sm" name='paddingTop' value={item.paddingTop} onChange={contentBlockChange}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                Padding Bottom
                            </span>
                            <input type="number" className="form-control form-control-sm" name='paddingBottom' value={item.paddingBottom} onChange={contentBlockChange}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                Padding Left
                            </span>
                            <input type="number" className="form-control form-control-sm" name='paddingLeft' value={item.paddingLeft} onChange={contentBlockChange}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                Padding Right
                            </span>
                            <input type="number" className="form-control form-control-sm" name='paddingRight' value={item.paddingRight} onChange={contentBlockChange}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingThree">
                <h4 className="panel-title" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <a className=" accordion-toggle" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Dimintions
                    </a>
                </h4>
                </div>
                <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                    <div className="panel-body">
                        <div className="input-group">
                            <span className="input-group-btn">
                                Min Width
                            </span>
                            <input type="number" className="form-control form-control-sm" name='minWidth' value={item.minWidth} onChange={contentBlockChange}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                Min Height
                            </span>
                            <input type="number" className="form-control form-control-sm" name='minHeight' value={item.minHeight} onChange={contentBlockChange}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingFour">
                <h4 className="panel-title" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="true" aria-controls="collapseOne">
                    <a className='accordion-toggle'  role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="true" aria-controls="collapseOne">
                    Spaces
                    </a>
                </h4>
                </div>
                <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                <div className="panel-body">
                    <div className="input-group">
                        <span className="input-group-btn">
                            Between Columns
                        </span>
                        <input type="number" className="form-control form-control-sm" name='gridColumnGap' defaultValue={item.gridColumnGap} onChange={contentBlockChange}/>
                    </div>
                    <div className="input-group">
                        <span className="input-group-btn">
                            Between Rows
                        </span>
                        <input type="number" className="form-control form-control-sm" name='gridRowGap' defaultValue={item.gridRowGap} onChange={contentBlockChange}/>
                    </div>
                </div>
                </div>
            </div>
            <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingSix">
            <h4 className="panel-title collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#borderContentBlockWithoutpos" aria-expanded="true" aria-controls="borderContentBlockWithoutpos">
                <a className='accordion-toggle collapsed'  role="button" data-toggle="collapse" data-parent="#accordion" href="#borderContentBlockWithoutpos" aria-expanded="true" aria-controls="borderContentBlockWithoutpos">
                Border
                </a>
            </h4>
            </div>
            <div id="borderContentBlockWithoutpos" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSix">
            <div className="panel-body">
                <div className="input-group">
                    <span className="input-group-btn">
                        Radius
                    </span>
                    <input type="number" className="form-control form-control-sm" name='borderRadius' defaultValue={item.borderRadius} onChange={contentBlockChange}/>
                </div>
                <div className="input-group">
                    <span className="input-group-btn">
                        Width
                    </span>
                    <input type="number" className="form-control form-control-sm" name='borderWidth' defaultValue={item.borderWidth} onChange={contentBlockChange}/>
                </div>
                <div className="input-group">
                    <span className="input-group-btn">
                        Style
                    </span>
                    <select className="form-control form-control-sm" name='borderStyle' value={item.borderStyle} onChange={contentBlockChange}>
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
                    <input type="color" className="form-control form-control-sm" name='borderColor' value={item.borderColor} onChange={contentBlockChange}/>
                </div>
            </div>
            </div>
            </div>
        </div>
    ):null;
    return (
        <div style={{
            paddingTop: '20px'
        }}>
            <form>
                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingOne">
                    <h4 className="panel-title collapsed"  role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        <a className='accordion-toggle'  role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        Numbers
                        </a>
                    </h4>
                    </div>
                    <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                    <div className="panel-body">
                        <div className="input-group">
                            <span className="input-group-btn">
                               Columns
                            </span>
                            <input type="number" className="form-control form-control-sm" name='cols' value={item.cols} onChange={contentBlockChange}/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                Rows
                            </span>
                            <input type="number" className="form-control form-control-sm" name='rows' value={item.rows} onChange={contentBlockChange}/>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {dynamicContentBlockTrs}
                {dynamicContentTr}
                {dynamicContentBlockTrsWithoutPos}
            </form>
        </div>
    )
}
