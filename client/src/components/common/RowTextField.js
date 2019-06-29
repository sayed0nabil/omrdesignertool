import React from 'react';

function RowTextField({
    label, 
    type,
    id
}) {
  return (
    <div className="row my-3">
    <div className="col-md-6">
    <label htmlFor="left">{label}</label>
    </div>
    <div className="col-md-6">
    <input 
      type={type} 
      id={id}
      className="form-control form-control-sm" 
      />
    </div>
  </div>
  )
}
export default RowTextField;
