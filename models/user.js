const mongoose = require ('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    userID: String,
    name: String,
    typeID: Array,
    views: Number,
},
    { timestamps: true }
);  

const User = mongoose.models.User || mongoose.model('User', userSchema);
module.exports = User;