const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    text: {type: String, required: true},
    user: {type: String, required: true},
    added: {type: Date}
});

messageSchema.virtual("url").get(function() {
    return `/catalog/messages/${this._id}`;
});
const Message = mongoose.model("messages", messageSchema);
module.exports = Message;