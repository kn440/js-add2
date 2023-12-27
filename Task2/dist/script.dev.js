"use strict";

//Задание 1 из семинара
var userage = prompt("Напишите, пожалуйста, Ваш возраст");
alert("\u0412\u0430\u043C ".concat(userage, " \u043B\u0435\u0442"));
var username = prompt("Напишите, пожалуйста, Ваше имя");
alert("\u0434\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u043D\u0430 \u0441\u0430\u0439\u0442 ".concat(username)); //Задание 2 из семинара

var a = 13;
var b = 5;
console.log(a % b); //let a;

alert(a);
alert('abc' * 3);
alert(1 / 0);
alert(-1 / 0);
alert('2' * '3'); //Задание 3 из семинара

var aa = '2';
var bb = '3';
console.log(parseInt(aa) + parseInt(b));
var userAa = parseInt(prompt("Напишите, пожалуйста, первое число"));
var userBb = parseInt(prompt("Напишите, пожалуйста, второе  число"));
console.log("\u0421\u0443\u043C\u043C\u0430 \u0447\u0438\u0441\u0435\u043B \u0440\u0430\u0432\u043D\u0430 ".concat(userAa + userBb));
console.log("\u0420\u0430\u0437\u043D\u043E\u0441\u0442\u044C \u0447\u0438\u0441\u0435\u043B \u0440\u0430\u0432\u043D\u0430 ".concat(userAa - userBb));
console.log("\u041F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0447\u0438\u0441\u0435\u043B \u0440\u0430\u0432\u043D\u043E ".concat(userAa * userBb));
console.log("\u0427\u0430\u0441\u0442\u043D\u043E\u0435 \u0447\u0438\u0441\u0435\u043B \u0440\u0430\u0432\u043D\u043E ".concat(userAa / userBb));
console.log("\u041E\u0441\u0442\u0430\u0442\u043E\u043A \u043E\u0442 \u0434\u0435\u043B\u0435\u043D\u0438\u044F \u0440\u0430\u0432\u0435\u043D ".concat(userAa % userBb)); //Задание 4 из семинара

console.log(String(true));
console.log('a' + true);
console.log(Number(true));
console.log(true + 1);
console.log(true + true);
console.log(true - true);
console.log(String(true) + Number(true)); //Задание 5 из семинара

var userX = Number(prompt("Напишите, пожалуйста, число"));

if (userX > 5) {
  console.log("\u0427\u0438\u0441\u043B\u043E \u0431\u043E\u043B\u044C\u0448\u0435 ".concat(userX));
} else if (userX < 5) {
  console.log("\u0427\u0438\u0441\u043B\u043E \u043C\u0435\u043D\u044C\u0448\u0435 ".concat(userX));
} else {
  console.log("\u0427\u0438\u0441\u043B\u043E \u0440\u0430\u0432\u043D\u043E ".concat(userX));
} //Задание 6 из семинара


var test1 = parseInt(prompt("Напишите, пожалуйста, первое число"));
var test2 = parseInt(prompt("Напишите, пожалуйста, второе  число"));

if (test1 > test2) {
  console.log("".concat(test1, " \u0431\u043E\u043B\u044C\u0448\u0435 ").concat(test2));
} else if (test1 < test2) {
  console.log("".concat(test1, " \u043C\u0435\u043D\u044C\u0448\u0435 ").concat(test2));
} else {
  console.log("".concat(test1, " \u0440\u0430\u0432\u043D\u043E ").concat(test2));
} //Задание 6 из семинара


var test3 = parseInt(prompt("Напишите, пожалуйста, число от 0 до 15"));

if (test3 < 15 && test3 > 0) {
  console.log("\u0427\u0438\u0441\u043B\u043E ".concat(test3, " \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u0438\u0442 \u0434\u0438\u0430\u043F\u043E\u0437\u043E\u043D\u0443 \u043E\u0442 0 \u0434\u043E 15"));
} else {
  console.log("\u0427\u0438\u0441\u043B\u043E ".concat(test3, " \u043D\u0435 \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u0438\u0442 \u0434\u0438\u0430\u043F\u043E\u0437\u043E\u043D\u0443 \u043E\u0442 0 \u0434\u043E 15"));
}