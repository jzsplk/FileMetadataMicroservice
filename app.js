//basic required import for NodeJs
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var multer = require('multer');
var upload = multer({dest: 'uploads/'});

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors())
app.use(express.static(__dirname + '/public'));

app.post('/upload', upload.single('file'), (req, res, next) => {
  return res.json(req.file.size);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("everything is working")
});


