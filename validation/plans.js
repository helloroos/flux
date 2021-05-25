const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validatePlanInput(data) {
  let errors = {};
  

  data.text = validText(data.title) ? data.title : '';

  if (Validator.isEmpty(data.title)) {
    errors.title = 'title field is required';
  }

  // if (!Validator.isLength(data.description, { min: 2, max: 300 })) {
  //   errors.description = 'A plans description must be longer than 2 characters';
  // }

//   if (Validator.isEmpty(data.description)) {
//     errors.description = 'description field is required';
//   }
  
//   if (Validator.isEmpty(data.members)) {
//     errors.members = 'Members field is required';
//   }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};