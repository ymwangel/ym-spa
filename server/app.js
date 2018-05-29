const express = require('express'),
  path = require('path'),
  assert = require('assert')
  MongoClient = require('mongodb').MongoClient,
  // # 数据库为 testDb
  DB_CONN_STR = 'mongodb://localhost:27017/testDb';
  const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = require('bluebird');

const app = express();
app.get('/',function (req,res) {
  res.send('Hello Node.js')
})

app.listen(3000, () => {
  console.log('app listening on port 3000.')
})


var selectData = function(db, callback) {  
  //连接到user表  
  var collection = db.collection('user');
  //查询数据
  var whereStr = {"userName":'lisa'};
  collection.find(whereStr).toArray(function(err, result) {
    if(err)
    {
      console.log('Error:'+ err);
      return;
    }     
    callback(result);
  });
}
 
MongoClient.connect(DB_CONN_STR, function(err, db) {
  assert.equal(null,err)
  console.log(err)
  console.log(db)
  console.log("连接成功！");
  // selectData(db, function(result) {
  //   console.log(result);
  //   db.close();
  // });
});

// mongoose.connect('mongodb://localhost:27017/database')