/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



/*
 
 class Triple {
 static triple(n) {
 if (n === undefined) {
 n = 1;
 }
 return n * 3;
 }
 }
 
 class BiggerTriple extends Triple {
 static triple(n) {
 return super.triple(n) * super.triple(n);
 }
 }
 
 console.log(Triple.triple());        // 3
 console.log(Triple.triple(6));       // 18
 
 var tp = new Triple();
 
 console.log(BiggerTriple.triple(3));
 // 81 (not affected by parent's instantiation)
 
 console.log(tp.triple());
 // 'tp.triple is not a function'.
 
 
 class StaticMethodCall {
 constructor() {
 console.log(StaticMethodCall.staticMethod()); 
 // 'static method has been called.' 
 
 console.log(this.constructor.staticMethod()); 
 // 'static method has been called.' 
 }
 
 static staticMethod() {
 return 'static method has been called.';
 }
 }
 
 class StaticMethodCall {
 static staticMethod() {
 return 'Static method has been called';
 }
 static anotherStaticMethod() {
 return this.staticMethod() + ' from another static method';
 }
 }
 StaticMethodCall.staticMethod(); 
 // 'Static method has been called'
 
 StaticMethodCall.anotherStaticMethod(); 
 // 'Static method has been called from another static method'
 
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
 
 console.log(square.area);
 console.log(square.height);
 
 
 
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
 }
 
 
 
 let myFirstPromise = new Promise((resolve, reject) => {
 // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
 // In this example, we use setTimeout(...) to simulate async code. 
 // In reality, you will probably be using something like XHR or an HTML5 API.
 setTimeout(function(){
 resolve("Success!"); // Yay! Everything went well!
 }, 3000);
 });
 
 
 
 /*
 
 
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
 
 
 
 function myFunction(x, y, z) { throw new UserException('InvalidMonthNo');}
 var args = [0, 1, 2];
 myFunction.apply(null, args);
 
 function myFunction(x, y, z) { throw 'error';}
 var args = [0, 1, 2];
 myFunction.apply(null, args);
 
 
 
 (function iife() {
 var bar = function () {console.log('bar');};
 var baz = function () {console.log('baz');};
 var foo = function () {
 bar();
 baz();
 };
 var biz = function () {};
 
 foo();
 biz();
 }());
 
 
 void function iife() {
 var bar = function () {console.log('bar');};
 var baz = function () {console.log('baz');};
 var foo = function () {
 bar();
 baz();
 };
 var biz = function () {};
 
 foo();
 biz();
 }();
 
 
 function makeIterator(array) {
 let nextIndex = 0;
 
 return {
 next: function() {
 return nextIndex < array.length ?
 {value: array[nextIndex++], done: false} :
 {done: true};
 }
 };
 }
 let mIt1 = makeIterator(['sf',4]);
 console.log(mIt1.next().value);
 console.log(mIt1.next().value);
 console.log(mIt1.next().done);
 
 function* idMaker() {
 var index = 0;
 while(true)
 yield index++;
 }
 
 var gen = idMaker();
 
 console.log(gen.next().value); // 0
 console.log(gen.next().value); // 1
 console.log(gen.next().value); // 2
 
 
 
 
 let myIterable = {};
 myIterable[Symbol.iterator] = function* () {
 yield 1;
 yield 2;
 yield 3;
 };
 
 for (let key of myIterable) { 
 console.log(key); 
 }
 
 console.log([...'abc']);
 
 
 function* gen1() {
 yield* ['a', 'b', 'c'];
 }
 
 let ig = gen1();
 
 for (let x of ig){
 console.log(x);
 
 }
 

function* g1() {
    yield 2;
    yield 3;
    yield 4;
}

function* g2() {
    yield '1';

    yield* g1();
    yield 5;
    return 6;
    yield 7;
    throw 'error';
}

let iterator = g2();


console.log(iterator.next().value); // {value: 1, done: false}
console.log(iterator.next("no").value); // {value: 4, done: false}
console.log(iterator.next().value); // {value: 3, done: false}
console.log(iterator.next().value); // {value: 4, done: false}
console.log(iterator.next().value); // {value: 4, done: false}
console.log(iterator.next().value); // {value: 4, done: false}

var myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};

var it = makeIterator(['yo', 'ya']);
console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done);  // true



function* g3() {
  yield* [1, 2];
  yield* '34';
  yield* Array.from(arguments);
}

var iterator1 = g3(5, 6);

console.log(iterator1.next()); // {value: 1, done: false}
console.log(iterator1.next()); // {value: 2, done: false}
console.log(iterator1.next()); // {value: "3", done: false}
console.log(iterator1.next()); // {value: "4", done: false}
console.log(iterator1.next()); // {value: 5, done: false}
console.log(iterator1.next()); // {value: 6, done: false}
console.log(iterator1.next()); // {value: undefined, done: true}


 
function* fibonacci() {
    var fn1 = 0;
    var fn2 = 1;
    while (true) {
        var current = fn1;
        fn1 = fn2;
        fn2 = current + fn1;
        var reset = yield current;
        if (reset) {
            fn1 = 0;
            fn2 = 1;
        }
    }
}

var sequence = fibonacci();
console.log(sequence.next().value);     // 0
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 2
console.log(sequence.next().value);     // 3
console.log(sequence.next().value);     // 5
console.log(sequence.next().value);     // 8
console.log(sequence.next(true).value); // 0
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 2


var person = {
    name: 'Jack',
    age: 34
}

console.log(person.age || 'unemployed');
// 'unemployed'

let pg_queries = require('./pg_queries');

console.log(pg_queries);





function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}


async function add1(x) {
    const a = await resolveAfter2Seconds(20);
    const b = await resolveAfter2Seconds(30);
    return x + a + b;
}

add1(10).then(v => {
    console.log(v);  // prints 60 after 4 seconds.
});


async function add2(x) {
    const p_a = resolveAfter2Seconds(20);
    const p_b = resolveAfter2Seconds(30);
    return x + await p_a + await p_b;
}

add2(20).then(v => {
    console.log(v);  // prints 60 after 2 seconds.
});


async function getResult(cb) {
const reslt = await pg_queries.isLoginSuccessful('qiuf_51@yahoo.com.au', '123456')
        .then((rslt) => { return  rslt;})
        .catch((error) => {console.log("error is: " + error);});
a = reslt;

};

console.log(a);

*/

var fs = require('fs');
var XLSX = require('xlsx');
function process_RS(stream/*:ReadStream*/, cb/*:(wb:Workbook)=>void*/)/*:void*/{
  var buffers = [];
  stream.on('data', function(data) { buffers.push(data); });
  stream.on('end', function() {
    var buffer = Buffer.concat(buffers);
    var workbook = XLSX.read(buffer, {type:"buffer"});
 
    /* DO SOMETHING WITH workbook IN THE CALLBACK */
    cb(workbook);
  });
}
//D:\\Works\\AWLQ\\My Job\\INPUT\THANKQ IMPORT FILE v19 raw.xlsx
var obj_fs = fs.FileReadStream("D:\\Works\\AWLQ\\My Job\\INPUT\\THANKQ IMPORT FILE v19 raw.xlsx");

process_RS(obj_fs, (wb)=>{
    //console.log(wb);
   //console.log(wb["Strings"][0]);
   var arr = wb["Strings"];
   arr.forEach((data)=>{console.log(data);});
    //console.log(wb.Workbook);
    
}) ;


a = function(){};
var a;