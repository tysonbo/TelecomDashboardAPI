const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CallSchema = new Schema({
    ani: {type: String, required: false},
    call_reason: {type: String, required: false},
    quote_number: {type: String, required: false},
    policy_number: {type: String, required: false},
    claim_number: {type: String, required: false},
    name: {type: String, required: false}
    
});

// Export the model
module.exports = mongoose.model('Call', CallSchema);