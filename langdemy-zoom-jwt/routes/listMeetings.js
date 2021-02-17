var express = require('express');
var router = express.Router();
const rp = require('request-promise');

//Make Zoom API call
var options = {
  uri: `https://api.zoom.us/v2/users/volcite.yuki.takano@gmail.com/meetings`,
  qs: {
      status: 'active' // -> uri + '?status=active'
  },
  auth: {
    //Provide your token here
      'bearer': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6IkJzWTZGLWR6UkJ1d291ZE50WDY1clEiLCJleHAiOjE2MTM4OTA0MzksImlhdCI6MTYxMzI4NTYzOX0.yBAqA3BsvryKFPqUwDbgkI02uFVTEK9_uCsKi0X2pp0'
  },
  headers: {
      'User-Agent': 'Zoom-Jwt-Request',
      'content-type': 'application/json'
  },
  json: true // Automatically parses the JSON string in the response
};

rp(options)
  .then(function (response) {
      let url = [];
      for(let i = 0; i < response.meetings.length; i++){
        url = url.concat(response.meetings[i].join_url);
      }
      router.get('/', function(req, res, next) {
        res.render('listMeetings', { url: url });
      })
      
  })
  .catch(function (err) {
      // API call failed...
      console.log('API call failed, reason ', err);
  });

module.exports = router;
