var mongoclient = require("mongodb").MongoClient;
var express = require("express");
var cors = require("cors");

var connectionString = "mongodb://127.0.0.1:27017";

var app = express();
app.use(cors());
app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());


app.get("/getadmin", function(req,res){
    mongoclient.connect(connectionString,function(err,clientObject){
        if(!err){
            var dbo = clientObject.db("RIRMdb");
              dbo.collection("tbladmin").find({}).toArray(function(err,documents){
                  if(!err){
                      res.send(documents);
                  }
              })
        }
    })
})
app.listen(8080);
console.log('Server Started : http://127.0.0.1:8080');