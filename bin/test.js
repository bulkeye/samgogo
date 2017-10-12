/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var dt_date = new Date();
console.log(dt_date.toLocaleDateString());
console.log(dt_date.toLocaleTimeString());

var a = {"a":"b"};
a['c'] = 'd';
console.log(a.c)


console.log(Object.keys({}));

var express = require('express');
var app = express();
app.set('test',__dirname)
console.log(app.get('views'));






class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
class Square extends Polygon {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }
  get area() {
    return this.height * this.width;
  }
  set sideLength(newLength) {
    this.height = newLength;
    this.width = newLength;
  }
}

var square = new Square(2);
square.sideLength = 3;

console.log(square.height);
console.log(square.area);


var materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

materials.map(function(material) { 
  return material.length; 
}); // [8, 6, 7, 9]

console.log(
materials.map((material) => {
  return material.length;
})
)
console.log(
materials.map(material => material.length)
)




var Promise = require('promise');
var filename = 'D:\\Works\\FARSHARE\\OUTPUT\\test.txt';
var readFile = Promise.denodeify(require('fs').readFile);
// now `readFile` will return a promise rather than
// expecting a callback

function readJSON(filename, callback){
  // If a callback is provided, call it with error as the
  // first argument and result as the second argument,
  // then return `undefined`. If no callback is provided,
  // just return the promise.
  console.log(filename);
  return readFile(filename, 'utf8')
    .then(JSON.parse)
    .nodeify(callback);
}

readJSON(filename,function(err,res){
    console.log(err instanceof Object);
    if (err !== 'null')
    {
        console.log(res);
    }else
    {
        console.log(err);
    }
    
});

