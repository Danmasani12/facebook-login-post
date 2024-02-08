const facebookService = require('../services/facebookServices');

module.exports = async (req, res, next) => {
  const { access_token } = req.headers;

  if (!access_token) {
    return res.status(401).json({ error: 'Unauthorized - Access Token missing' });
  }

  try {
    // You may want to add additional verification logic here if needed
    await facebookService.getUserInfo(access_token);
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: 'Unauthorized - Invalid Access Token' });
  }
};
