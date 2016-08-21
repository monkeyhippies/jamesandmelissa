// grab the things we need
var mongoose = require('mongoose');

// create a schema
var inviteeSchema = new mongoose.Schema({
    first_name: {type: String},
    last_name: {type: String},
    response: {type: String, in: [null, "yes", "no"]},
    response_at: {type: Date},
    responses_log: [{response: {type: String}, response_at: {type: Date}}]
})

var Invitee = mongoose.model('invitees', inviteeSchema);

// make this available to our users in our Node applications
module.exports = Invitee;
