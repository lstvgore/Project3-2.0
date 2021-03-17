const Post = require("../models/userPostModel");

module.exports = {
  newPost: async (req, res) => {
    try {
      const newPost = new Post({
        title: req.body.title,
        text: req.body.text,
        authorId: req.user,
      });

      const savedPost = await newPost.save();
      res.json(savedPost);
    } catch (err) {
      res.status("error saving: ", err);
    }
  },
};
