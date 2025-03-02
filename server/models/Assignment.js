const mongoose = require('mongoose');

const AssignmentSchema = new mongoose.Schema({
    title: String,
    filePath: String,
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    submittedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
    submittedFilePath: { type: String, default: null }
});

module.exports = mongoose.model('Assignment', AssignmentSchema);
