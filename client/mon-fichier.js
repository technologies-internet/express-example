const $ = require("jquery");

setInterval( () =>
  $("#time").html("La date est: <mark>" + new Date() + "</mark>")
, 1000);
