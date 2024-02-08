const axios = require('axios');
require('dotenv').config();

const { APP_ID, APP_SECRET, REDIRECT_URI } = process.env;

exports.getAccessToken = async (code) => {
  try {
    const tokenResponse = await axios.get(
      `https://graph.facebook.com/v12.0/oauth/access_token?client_id=${APP_ID}&redirect_uri=${REDIRECT_URI}&client_secret=${APP_SECRET}&code=${code}`
    );
    return tokenResponse.data.access_token;
  } catch (error) {
    throw new Error('Error getting access token');
  }
};

exports.getUserInfo = async (accessToken) => {
  try {
    const userResponse = await axios.get(
      `https://graph.facebook.com/v12.0/me?fields=id,name,email&access_token=${accessToken}`
    );
    return userResponse.data;
  } catch (error) {
    throw new Error('Error getting user information');
  }
};

exports.createFacebookPost = async (accessToken, message) => {
  try {
    const postResponse = await axios.post(
      `https://graph.facebook.com/v12.0/me/feed`,
      { message },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return postResponse.data.id;
  } catch (error) {
    throw new Error('Error creating Facebook post');
  }
};
