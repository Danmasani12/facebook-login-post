const facebookService = require('../services/facebookServices');

exports.createPost = async (req, res) => {
  const { message } = req.body;
  const { access_token } = req.headers;

  try {
    const postId = await facebookService.createFacebookPost(access_token, message);
    res.json({ postId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating Facebook post' });
  }
};
