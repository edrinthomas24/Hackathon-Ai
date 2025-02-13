const express = require('express');
const multer = require('multer');
const router = express.Router();

const upload = multer({ dest: 'uploads/' });

// Fetch zone updates
router.get('/updates', (req, res) => {
  // Fetch updates from the database
  res.json({ message: 'Zone updates fetched' });
});

// Upload image
router.post('/upload', upload.single('image'), (req, res) => {
  // Process the uploaded image
  res.json({ message: 'Image uploaded successfully' });
});

module.exports = router;
