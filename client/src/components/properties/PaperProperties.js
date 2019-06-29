import React from 'react'

function PaperProperties({
    width,
    height,
    background,
    paperChange
}) {
    return (
        <div>
            <form>
            <div className="input-group">
                <span className="input-group-btn">
                    <label htmlFor="width">Width</label>
                </span>
                <input type="number" className="form-control form-control-sm" name='width' defaultValue={parseFloat(width)} onChange={paperChange}/>
            </div>
            <div className="input-group">
                <span className="input-group-btn">
                    <label htmlFor="height">Height</label>
                </span>
                <input type="number" className="form-control form-control-sm" name='height' defaultValue={parseFloat(height)} onChange={paperChange}/>
            </div>
            <div className="input-group">
                <span className="input-group-btn">
                    <label htmlFor="background">Background Color</label>
                </span>
                <input type="color" className="form-control form-control-sm" name='background' defaultValue={background} onChange={paperChange}/>
            </div>
            {/* <table>
                <tbody>
                <tr>
                   <td><label htmlFor="width">Width</label></td> 
                    <td><input type="number" className="form-control form-control-sm" name='width' defaultValue={parseFloat(width)} onChange={paperChange}/></td> 
                </tr>
                <tr>
                    <td><label htmlFor="height">Height</label></td>
                    <td><input type="number" className="form-control form-control-sm" name='height' defaultValue={parseFloat(height)} onChange={paperChange}/></td>
                </tr>
                <tr>
                    <td><label htmlFor="background">Background Color</label></td>
                    <td><input type="color" className="form-control form-control-sm" name='background' defaultValue={background} onChange={paperChange}/></td>
                </tr>
                </tbody>
                </table> */}
            </form>
            
        </div>
    )
}
export default PaperProperties;
