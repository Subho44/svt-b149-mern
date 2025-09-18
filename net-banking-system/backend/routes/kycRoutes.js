// routes/kycRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const kycController = require('../controllers/kycController');

// configure multer to store files in backend/uploads
const uploadsDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir);

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsDir),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + '-' + Math.round(Math.random()*1e9) + ext);
  }
});
const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB
  fileFilter: (req, file, cb) => {
    if (/^image\/(jpeg|png|jpg)$/.test(file.mimetype)) cb(null, true);
    else cb(new Error('Only jpg/png images allowed'));
  }
});

// Routes
router.post('/', upload.single('photo'), kycController.addKYC);
router.get('/', kycController.getAllKYC);
router.get('/:id', kycController.getKYCById);
router.put('/:id', upload.single('photo'), kycController.updateKYC);
router.delete('/:id', kycController.deleteKYC);

module.exports = router;
