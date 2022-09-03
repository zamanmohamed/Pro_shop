import path from "path";
import express from "express";
import multer from "multer";
const router = express.Router();

//uploads folder තුල save කරන අතර file name එකද මෙහිදී define කරගනී ==> (1)
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

//check File Type --> මෙහිදී /jpg|jpeg|png/ පමණක් ගනී ==> (2)
function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb("Images only!");
  }
}

// (1) හා (2) use කරමින් multer function එක call කරයි
const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

//මෙහිදී file.path එක return කරයි
router.post("/", upload.single("image"), (req, res) => {
  res.send(`/${req.file.path}`);
});

export default router;
