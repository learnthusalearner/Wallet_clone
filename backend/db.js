const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://kunalsrivastava0405:dgTIyDvloks4LFmI@cluster0.yqaacpj.mongodb.net/PAYTM');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

const accountSchema = new mongoose.Schema({
    UserId :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    Balance :{
        type: Number,
        required: true
    }
});


const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Account', accountSchema);

module.exports = {
	User,
    Account
};