  /*************************

    LOGIN (POST)

*************************/

var settings = {
    "url": "http://programmingtest.dwufzcnqaj.us-east-1.elasticbeanstalk.com/login",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json"
    },
    "data": JSON.stringify({"username":"david","password":"#fT3es3Ymm37"}),
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });