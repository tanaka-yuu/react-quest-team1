const URL_OAUTH =
  "https://zoom.us/oauth/authorize?response_type=code&client_id=";
const REDIRECT_URI = "&redirect_uri=";
const TOKEN_URL =
  "https://zoom.us/oauth/token?grant_type=authorization_code&code=";
const USER_URL = "https://api.zoom.us/v2/users/me";

const toTokenURL = (req) => TOKEN_URL + req.query.code;
const tokenRedirectURI = REDIRECT_URI +process.env.redirectURL;
const To_POST_URL = (req) => toTokenURL(req) + tokenRedirectURI;

const oauthURL = URL_OAUTH + process.env.clientID;
const redirectURI = REDIRECT_URI + process.env.redirectURL;
const REDIRECT_URL = oauthURL + redirectURI;

module.exports = {
  URL_OAUTH,
  REDIRECT_URI,
  To_POST_URL,
  USER_URL,
  REDIRECT_URL,
};
