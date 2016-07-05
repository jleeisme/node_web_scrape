var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

request("http://substack.net/images/", function(error, response, body){
  if(error){
    console.log("Error:" + error);
  }
  console.log(body);
})