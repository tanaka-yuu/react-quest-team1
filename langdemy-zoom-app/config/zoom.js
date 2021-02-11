const URL_OAUTH =
  "https://zoom.us/oauth/authorize?response_type=code&client_id=";
const REDIRECT_URI = "&redirect_uri=";
const TOKEN_URL =
  "https://zoom.us/oauth/token?grant_type=authorization_code&code=";
const USER_URL = "https://api.zoom.us/v2/users/me";

module.exports = {
  URL_OAUTH,
  REDIRECT_URI,
  TOKEN_URL,
  USER_URL,
};
