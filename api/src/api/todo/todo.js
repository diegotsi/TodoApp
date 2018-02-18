const restful = require('node-restful');
const mongoose = restful.mongoose;

var toLocalTime = function(time) {
    var d = new Date(time);
    var offset = (new Date().getTimezoneOffset() / 60) * -1;
    var n = new Date(d.getTime() + offset);
    return n;

    console.log(n);
};

const todoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true } ,
    done: { type: Boolean, required: true, default: false },
    startDate: {type: Date},
    endDate: {type: Date},
    createdAt: { type: Date, default: toLocalTime(new Date()) }
})

module.exports = restful.model('Todo', todoSchema);