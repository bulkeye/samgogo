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
var filename = '//home//sammy//NetBeansProjects//SAMGOGO//bin//test.txt';
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
    
    if (err)
    {
        console.log("error: " + err);
    }else
    {
        console.log("response: " + res.a);
    }
    
});





/* ES6 */
const isMomHappy = true;

// Promise
const willIGetNewPhone = new Promise(
    (resolve, reject) => { // fat arrow
        if (isMomHappy) {
            const phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone);
        } else {
            const reason = new Error('mom is not happy');
            reject(reason);
        }

    }
);

const showOff = function (phone) {
    const message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';
    return Promise.resolve(message);
};

// call our promise
const askMom = function () {
    willIGetNewPhone
        .then(showOff)
        .then(fulfilled => console.log(fulfilled)) // fat arrow
        .catch(error => console.log(error.message)); // fat arrow
};

askMom();


// using a resolved promise, the 'then' block will be triggered instantly, but its handlers will be triggered asynchronously as demonstrated by the console.logs
var resolvedProm = Promise.resolve(33);

var thenProm = resolvedProm.then(function(value){
    console.log("this gets called after the end of the main stack. the value received and returned is: " + value);
    return value;
});
// instantly logging the value of thenProm
console.log(thenProm);

// using setTimeout we can postpone the execution of a function to the moment the stack is empty
setTimeout(function(){
    console.log(thenProm);
});



var maybePromise = Math.random() > 0.5 ? 10 : Promise.resolve(10);
var definitelyPromise = Promise.resolve(maybePromise);
// equivalent to
var definitelyPromise = new Promise(function (fulfill, reject) {
  if (isPromise(maybePromise)) {
    maybePromise.then(fulfill, reject);
  } else {
    fulfill(maybePromise);
  }
});




function delay(time) {
  return new Promise(function (fulfill) {
    setTimeout(fulfill, time);
  });
}
function timeout(promise, time) {
  return new Promise(function (fulfill, reject) {
    // race promise against delay
    promise.then(fulfill, reject);
    delay(time).done(function () {
      reject(new Error('Operation timed out'));
    });
  });
}

function timeout1(promise, time) {
  return Promise.race([promise, delay(time).then(function () {
    throw new Error('Operation timed out1');
  })]);
}


let test = function(){
    timeout(delay(5000),10000)
            
            .then(fulfil => console.log("tested! " + fulfil))
            .catch(error => console.log(error + ", shit!, error occured."));
    
    
            
    timeout1(delay(1000),100)
            .then(fulfil => console.log("tested1!  " + fulfil))
            .catch(error => console.log(error + ", shit!,1 error occured."));
    
    
};




test();