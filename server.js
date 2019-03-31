var User = require("./user.js");

var http = require('http');
const MongoClient = require('mongodb');
const url = 'mongodb://localhost:27017/profile';

http.createServer(function (req, res) {
  if(req.url=="/login") {
    var content = "";

    req.on('data', function (chunk) {
      content += chunk;
    });

    req.on('end', function () {
      var a = content.split('&');
      var wherestr = {'username': a[1], 'password': a[0]};

      User.find(wherestr, function (err, resp) {
        if (err) {
          console.log("Error:" + err);
        }
        else {
          if (resp.toString() !== '') {
            console.log("Res:" + resp);
            res.writeHead(200, {"Content-Type": "text/plain", "Access-Control-Allow-Origin": 'http://localhost:4200'});
            res.write("yes");
            res.end();
          }
          else {
            res.writeHead(200, {"Content-Type": "text/plain", "Access-Control-Allow-Origin": 'http://localhost:4200'});
            res.write("no");
            res.end();
          }
        }
      })
    });
  }
  if(req.url=="/signup"){
    var content = "";

    req.on('data', function (chunk) {
      content += chunk;
    });

    req.on('end', function () {
      var a=content.split('&');

      var wherestr = {'username' : a[1]};

      User.find(wherestr, function(err, resp){
        if (err) {
          console.log("Error:" + err);
        }
        else {
          if(resp.toString()!==''){
            console.log("Res:" + resp);
            res.writeHead(200, {"Content-Type": "text/plain","Access-Control-Allow-Origin": 'http://localhost:4200'});
            res.write("no");
            res.end();}
          else{
            MongoClient.connect(url, function(err, db) {
              if (err) { throw err; }
              const dbo = db.db('profile');
              const myobj = { username: a[1], password: a[0] };
              dbo.collection('users').insertOne(myobj, function(err, responed) {
                if (err) { throw err; }
                console.log('1 user inserted');
                db.close();
              });
            });
            res.writeHead(200, {"Content-Type": "text/plain","Access-Control-Allow-Origin": 'http://localhost:4200'});
            res.write("yes");
            res.end();
          }
        }
      })
    });
  }
}).listen(1337);


// http.createServer(function (req, res) {
//   var content = "";
//
//   req.on('data', function (chunk) {
//     content += chunk;
//   });
//
//   req.on('end', function () {
//     var a=content.split('&');
//
//     var wherestr = {'username' : a[1]};
//
//     User.find(wherestr, function(err, resp){
//       if (err) {
//         console.log("Error:" + err);
//       }
//       else {
//         if(resp.toString()!==''){
//           console.log("Res:" + resp);
//           res.writeHead(200, {"Content-Type": "text/plain","Access-Control-Allow-Origin": 'http://localhost:4200'});
//           res.write("no");
//           res.end();}
//         else{
//           MongoClient.connect(url, function(err, db) {
//             if (err) { throw err; }
//             const dbo = db.db('profile');
//             const myobj = { username: a[1], password: a[0] };
//             dbo.collection('users').insertOne(myobj, function(err, responed) {
//               if (err) { throw err; }
//               console.log('1 user inserted');
//               db.close();
//             });
//           });
//           res.writeHead(200, {"Content-Type": "text/plain","Access-Control-Allow-Origin": 'http://localhost:4200'});
//           res.write("yes");
//           res.end();
//         }
//       }
//     })
//
//
//
//
//
//
//   });
//
// }).listen(9999);
