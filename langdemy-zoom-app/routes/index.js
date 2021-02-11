require("dotenv/config");

const express = require("express");
const request = require("request");
const router = express.Router();
const ZOOM = require("../config/zoom");
const authResponse = require("../views/authResponse");
const jsonResponse = require("../views/jsonResponse");

router.get("/", function (req, res, next) {
  // Step 1:
  // Check if the code parameter is in the url
  // if an authorization code is available, the user has most likely been redirected from Zoom OAuth
  // if not, the user needs to be redirected to Zoom OAuth to authorize

  if (req.query.code) {
    // Step 3:
    // Request an access token using the auth code

    request
      .post(ZOOM.POST_URL, (error, response, body) => {
        // Parse response to JSON
        const postBodyParam = JSON.parse(body);

        // Logs your access and refresh tokens in the browser
        console.log(`access_token: ${postBodyParam.access_token}`);
        console.log(`refresh_token: ${postBodyParam.refresh_token}`);

        if (postBodyParam.access_token) {
          // Step 4:
          // We can now use the access token to authenticate API calls

          // Send a request to get your user information using the /me context
          // The `/me` context restricts an API call to the user the token belongs to
          // This helps make calls to user-specific endpoints instead of storing the userID

          request
            .get(ZOOM.USER_URL, (error, response, getBody) => {
              if (error) {
                console.log("API Response Error: ", error);
              } else {
                const getBodyParam = JSON.parse(getBody);
                // Display response in console
                console.log("API call ", getBodyParam);
                // Display response in browser
                const JSONResponse = jsonResponse(getBodyParam);
                res.send(authResponse(getBodyParam, JSONResponse));
              }
            })
            .auth(null, null, true, getBodyParam.access_token);
        } else {
          // Handle errors, something's gone wrong!
        }
      })
      .auth(process.env.clientID, process.env.clientSecret);

    return;
  }

  // Step 2:
  // If no authorization code is available, redirect to Zoom OAuth to authorize
  res.redirect(ZOOM.REDIRECT_URL);
});

module.exports = router;
