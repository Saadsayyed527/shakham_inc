const Assignment = require('../models/Assignment');

exports.uploadAssignment = async (req, res) => {
    if (req.user.role !== 'teacher') return res.status(403).send('Access Denied');
    const assignment = new Assignment({
        title: req.body.title,
        filePath: req.file.path,
        uploadedBy: req.user._id
    });
    await assignment.save();
    res.send('Assignment Uploaded');
};

exports.getAssignments = async (req, res) => {
    const assignments = await Assignment.find().populate('uploadedBy', 'username');
    res.json(assignments);
};

exports.downloadAssignment = async (req, res) => {
    const assignment = await Assignment.findById(req.params.id);
    if (!assignment) return res.status(404).send('Assignment not found');
    res.download(assignment.filePath);
};

exports.submitAssignment = async (req, res) => {
    if (req.user.role !== 'student') return res.status(403).send('Access Denied');
    const assignment = await Assignment.findById(req.params.id);
    if (!assignment) return res.status(404).send('Assignment not found');

    assignment.submittedBy = req.user._id;
    assignment.submittedFilePath = req.file.path;
    await assignment.save();
    res.send('Assignment Submitted');
};
