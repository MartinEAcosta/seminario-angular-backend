const { Router } = require("express");
const { uploadFile, uploadMultipleFiles } = require("../controllers/FileUploadController");

const router = Router();

router.post(
    '/single/:type',
    uploadFile,
)

router.post(
    '/multiple/:type',
    uploadMultipleFiles,
)

module.exports = router;