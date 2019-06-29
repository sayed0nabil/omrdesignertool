

const isEmpty = require('./isempty');
const validator = require('validator');
const createPaperValidationErrors = (body) =>{
    let errors = {};
    if(isEmpty(body.name)) 
        errors.name = 'Name field is required';
    if(isEmpty(body.width))
        errors.width = 'Width field is required';
    else if(isNaN(body.width))
        errors.width = 'Width must be a number';
    else if( body.width <= 0 )
        errors.width = 'Width must more than zero';
    if(isEmpty(body.height))
        errors.height = 'Height field is required';
    else if(isNaN(body.height))
        errors.height = 'Height must be a number';
    else if( body.width <= 0 )
        errors.height = 'Height must more than zero';
    return errors;
}
module.exports = createPaperValidationErrors;