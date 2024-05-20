const express = require("express");
const Photo = require("../db/photoModel");
const router = express.Router();

router.get("/:id", async (request, response) => {
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

module.exports = router;
