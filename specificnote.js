  /*************************
  
      SPECIFIC NOTE (GET)
  
  *************************/
  
 var settings = {
    "url": "http://programmingtest.dwufzcnqaj.us-east-1.elasticbeanstalk.com/note/6cfb2dfa-bb5e-4af4-984d-d3a94fecb57b",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkYXZpZCIsImV4cCI6MTYxNTA0NzIxMX0.KC12pZu1to0ilh2I-qdVhYZP-GlhiFiEEdWqUCCVBggb03yivX66EyYDng9AmcN4QVfB2TH9lKxSSgil7HlZ1w"
    },
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });