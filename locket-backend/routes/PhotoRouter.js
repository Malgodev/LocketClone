const express = require("express");
const Photo = require("../db/photoModel");
const router = express.Router();

router.get("/list", async (request, response) => {
  try {
    const photos = await Photo.find({}).sort({ date_time: -1 });
    response.send(photos);
  } catch (error) {
    response.status(500).send({ error });
  }
});

router.get("/photoOfUser/:id", async (request, response) => {
  try {
    const photos = await Photo.find({ user_id: request.params.id });
    if (!photos || photos.length === 0) {
      response.status(400).send("No photos found for the user");
    } else {
      response.send(photos);
    }
  } catch (error) {
    response.status(500).send({ error });
  }
});

router.post("/create", async (request, response) => {
  try {
      const post = new Photo(request.body);
      // console.log(post);
      await post.save();
      response.status(200).send("Post created successfully");
  }catch(error) {
      response.status(500).send({error});
  }
});

module.exports = router;
