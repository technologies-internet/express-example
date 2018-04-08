var $ = require("jquery");

setInterval(function(){ 
        $("#time").html("La date est: <mark>" + new Date()+"</mark>");
      }, 1000);
