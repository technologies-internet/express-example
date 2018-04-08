var express = require("express");

var app = express();

app.get("/", function(req,res) {
    res.render("home.pug");
})

app.get("/one", function(req,res) {
    var html = [
        '<htm><head><meta charenc="utf8"/></head>',
        '  <body><h1>Page "/one"</h1><div>générée comme une chaine de caractères...</div>',
        '    <div> Seulement le fichier "./index.js" est utilisé: <pre>  app.get("/one", ... </pre>',
        '</div></body></html>'
    ].join("\n");
    res.send(html);
});

app.get("/two/:name", function(req,res) {
    res.render("two.pug",{name: req.params.name});
});

app.get("/three", function(req,res) {
    res.render("three.pug");
});

app.get("/four", function(req,res) {
    res.render("four.pug");
});

app.use(express.static("./static"));

app.listen(8991, function(){
    console.log("Application is running: <http://localhost:8991/>");
});
