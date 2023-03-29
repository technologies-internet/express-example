const express = require("express");
const app = express();

app.get("/", (req, res) => res.render("home.pug"));
app.locals.pretty = true;

app.get("/one", (req, res) => {
  const html = `
<html>
  <head><meta charenc="utf8"/></head>
  <body>
    <h1>Page "/one"</h1>
    <div>générée comme une chaine de caractères...</div>
    <div> Seulement le fichier "./index.js" est utilisé: 
      <pre> app.get("/one", (req, res) => res.send("<html> ... </html>"); </pre>
    </div>
  </body>
</html>
`;
  res.send(html);
});

app.get("/two/:name", (req, res) =>
  res.render("two.pug", { name: req.params.name })
);

app.get("/three", (req, res) => res.render("three.pug"));

app.get("/four", (req, res) => res.render("four.pug"));

app.use(express.static("./static"));

app.listen(8991, () =>
  console.log("Application is running: <http://localhost:8991/>")
);
