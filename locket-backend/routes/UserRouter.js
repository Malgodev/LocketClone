const express = require("express");
const User = require("../db/userModel");
const router = express.Router();

router.get("/list", async (request, response) => {
  try {
    const users = await User.find({});
    response.send(users);
  } catch (error) {
    response.status(500).send({ error });
  }
});

router.get("/profile/:id", async (request, response) => {
  try {
    const user = await User.findOne({ _id: request.params.id });

    if (user) {
      response.send(user);
    } else {
      response.status(400).send("Invalid");
    }
  } catch (error) {
    response.status(400).send({ error });
  }
});

router.post("/login", async (request, response) => {
  const { username, password } = request.body;
  try {
    const user = await User.findOne({ login_name: username, password: password }).lean();

    if (user) {
      require("jsonwebtoken").sign(
        { _id: user._id },
        process.env.SECRET,
        { expiresIn: "24h" },
        (error, token) => {
          if (error) {
            throw error;
          } else {
            user.token = token;
            response.send(user);
          }
        },
      );
    } else {
      response.status(404).send("Invalid username or password");
    }
  } catch (error) {
    console.error(error);
    response.status(500).send("Something went wrong. Please try again");
  }
});

module.exports = router;
