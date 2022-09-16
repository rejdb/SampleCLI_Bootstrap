// Required fields
const isRequired = input => (input==='') ? 'This field is require': true;
const isBoolean = input => (input=='true') ? true:false;

module.exports = { isRequired, isBoolean }