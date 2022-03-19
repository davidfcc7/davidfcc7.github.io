var express = require ("express");
var app = express();

app.get ("/", inicio);
function inicio (req, res){
    res.send("libreria cargada");
}

app.listen(8080);

