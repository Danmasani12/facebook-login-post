const facebookService = require('../services/facebookServices');

exports.login = (req, res) => {
  const { APP_ID, REDIRECT_URI } = process.env;
  const redirectUrl = `https://www.facebook.com/v12.0/dialog/oauth?client_id=${APP_ID}&redirect_uri=${REDIRECT_URI}&scope=email`;

  res.redirect(redirectUrl);
};

exports.callback = async (req, res) => {
  const { code } = req.query;

  try {
    const accessToken = await facebookService.getAccessToken(code);
    const userInfo = await facebookService.getUserInfo(accessToken);

    // Save user information to the database or perform other actions

    res.json({ user: userInfo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
