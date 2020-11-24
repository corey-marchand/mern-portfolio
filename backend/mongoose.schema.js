const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Form = new Schema({
    form_firstName: {
        type: String
    },
    form_lastName: {
        type: String
    },
    form_company: {
        type: String
    },
    form_message: {
        type: String
    }
});

module.exports = mongoose.model('Form', Form);