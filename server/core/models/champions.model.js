const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    icon: {
        data: Buffer,
        contentType: String,
    },
    
});

schema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

var data = mongoose.model('champions', schema);
module.exports = data;