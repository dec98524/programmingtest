 /*************************
  
      ALL NOTES (GET)
  
  *************************/
  
 var settings = {
    "url": "http://programmingtest.dwufzcnqaj.us-east-1.elasticbeanstalk.com/note",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkYXZpZCIsImV4cCI6MTYxNTA0NzIxMX0.KC12pZu1to0ilh2I-qdVhYZP-GlhiFiEEdWqUCCVBggb03yivX66EyYDng9AmcN4QVfB2TH9lKxSSgil7HlZ1w"
    },
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });