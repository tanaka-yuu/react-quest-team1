const URL_OAUTH =
  "https://zoom.us/oauth/authorize?response_type=code&client_id=";
const REDIRECT_URI = "&redirect_uri=";
const TOKEN_URL =
  "https://zoom.us/oauth/token?grant_type=authorization_code&code=";
const USER_URL = "https://api.zoom.us/v2/users/me";

const tokenURL = ZOOM.TOKEN_URL + req.query.code;
const tokenRedirectURI = ZOOM.REDIRECT_URI +process.env.redirectURL;
const POST_URL = tokenURL + tokenRedirectURI;

const oauthURL = ZOOM.URL_OAUTH + process.env.clientID;
const redirectURI = ZOOM.REDIRECT_URI + process.env.redirectURL;
const REDIRECT_URL = oauthURL + redirectURI;

module.exports = {
  URL_OAUTH,
  REDIRECT_URI,
  TOKEN_URL,
  USER_URL,
  POST_URL,
  REDIRECT_URL,
};
