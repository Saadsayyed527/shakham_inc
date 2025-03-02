const express = require('express');
const multer = require('multer');
const { uploadAssignment, getAssignments, downloadAssignment, submitAssignment } = require('../controllers/assignmentController');
const authenticate = require('../middleware/authMiddleware');

const router = express.Router();

const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + require('path').extname(file.originalname));
    }
});
const upload = multer({ storage });

router.post('/upload', authenticate, upload.single('file'), uploadAssignment);
router.get('/', authenticate, getAssignments);
router.get('/download/:id', authenticate, downloadAssignment);
router.post('/submit/:id', authenticate, upload.single('file'), submitAssignment);

module.exports = router;
