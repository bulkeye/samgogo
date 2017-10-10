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