var Call = require('../models/call.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.call_create = function (req, res) {
    var call = new Call(
        {
            name: req.body.name,
            ani: req.body.ani,
            call_reason: req.body.call_reason,
            quote_number: req.body.quote_number,
            policy_number: req.body.policy_number,
            claim_number: req.body.claim_number
        }
    );

    call.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Call Created successfully')
    })
};

exports.calls_all = function (req, res, next) {
    Call.find({}, function (err, call) {
        if (err) return next(err);
        res.send(call);
    })
};

exports.call_details = function (req, res, next) {
    Call.findById(req.params.id, function (err, call) {
        if (err) return next(err);
        res.send(call);
    })
};

exports.call_update = function (req, res, next) {
    Call.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, call) {
        if (err) return next(err);
        res.send('Call udpated.');
    });
};

exports.call_delete = function (req, res, next) {
    Call.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};