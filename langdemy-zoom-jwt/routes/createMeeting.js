var express = require('express');
var router = express.Router();
const rp = require('request-promise');

router.get('/:startTime/:duration', function(req, res, next) {
//Make Zoom API call
const resp = res;
const startTime = req.params.startTime;
const duration = req.params.duration;

var options = {
  method: 'POST',
  uri: `https://api.zoom.us/v2/users/volcite.yuki.takano@gmail.com/meetings`,
  body: {
        "topic":"",
        "type": 2,
        "start_time": `${startTime}`,
        "duration": `${duration}`,
        "timezone": "Asia/Tokyo",
        "password": "",
        "agenda": "",
        "settings": {
            "host_video": "false",
            "participant_video": "false",
            "cn_meeting": "false",
            "in_meeting": "false",
            "join_before_host": "false",
            "mute_upon_entry": "false",
            "watermark": "false",
            "use_pmi": "false",
            "approval_type": 0,
            "registration_type": 1,
            "audio": "both",
            "auto_recording": "local",
            "enforce_login": "false",
            "enforce_login_domains": "",
            "alternative_hosts": "",
            "global_dial_in_countries": [
                ""
            ],
            "registrants_email_notification": "false"
        }
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
    //logic for your response
      //console.log('User has', response);
      const url = response.join_url;
      resp.render('createMeeting', { url: url });
      
  })
  .catch(function (err) {
      // API call failed...
      console.log('API call failed, reason ', err);
  });
})

module.exports = router;