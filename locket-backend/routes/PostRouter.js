const Photo = require("../db/photoModel");
const express = require("express");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'D:/Coding/WebProgramming/LocketClone/locket-clone/public/images')
      },
      filename: function (req, file, cb) {
        cb(null, file.originalname)
      }
})

const upload = multer({ storage: storage });

router.post("/upload", upload.single("image"), (require, response) => {
    response.json(require.files);
})

router.post("/:id", async (request, response) => {
  const { _id, comment, like, user } = request.body;
  try {
    const post = await Photo.findOne({ _id: _id }).lean();

    if (post) {
      if (comment) {
        post.comments.push({
          comment: comment,
          user_id: user,
        });
      }

      await Photo.findByIdAndUpdate(_id, post);
      
      const newPost = await Photo.findOne({ _id: _id }).lean();

      response.status(200).send(newPost);
    } else {
      response.status(404).send("Invalid post");
    }
  } catch (error) {
    response.status(500).send({ error });
  }
});

module.exports = router;