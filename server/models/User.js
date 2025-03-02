const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    role: { type: String, enum: ['teacher', 'student'], required: true }
});

module.exports = mongoose.model('User', UserSchema);
