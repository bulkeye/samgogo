/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Save data to sessionStorage
localStorage.setItem('_isLoggedin', 'true');
// Get saved data from sessionStorage
var data = localStorage.getItem('_isLoggedin');

alert(data);
