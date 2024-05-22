const Photo = require("../db/photoModel");
const express = require("express");
const router = express.Router();

router.get("/photo/:id", async (request, response) => {
    const { _id, like, comment } = request.body;
  
    try {
      const post = await Photo.findOne({ _id: request.params.id }).lean();
      if (post) {
    //     if (comment) {
    //       post.comments.push({
    //         comment: comment,
    //         user_id: request.user._id,
    //       });
    //     }
    // if (like){
    //     if (post.like_user_id) post.like_user_id = [];
    //     post.like_user_id.push(request.user._id);
    // } else if (like === false){
    //     post.like_user_id = post.like_user_id.filter((like_user_id) => (!like_user_id.equals(request.user._id)));
    // }
        response.status(200).send(post);
      } else {
        response.status(404).send("Invalid post");
      }
    } catch (error) {
      response.status(500).send({ error });
    }
  });

router.post("/:id", async (request, response) => {
  const { _id, comment, like, user_id } = request.body;

  try {
    const post = await Photo.findOne({ _id: _id }).lean();

    if (post) {
        
      if (comment) {
        post.comments.push({
          comment: comment,
          user_id: user_id,
        });

        console.log(post.comments, post._id);
      }


      await Photo.findByIdAndUpdate(post._id, post);
      res.status(200).send("Update successfully");
    } else {
      response.status(404).send("Invalid post");
    }
  } catch (error) {
    response.status(500).send({ error });
  }
});

module.exports = router;