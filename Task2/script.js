//Задание 1 из семинара
let userage = prompt("Напишите, пожалуйста, Ваш возраст");
alert(`Вам ${userage} лет`);
let username = prompt("Напишите, пожалуйста, Ваше имя");
alert(`добро пожаловать на сайт ${username}`);

//Задание 2 из семинара
let a = 13;
let b = 5;
console.log(a % b);
//let a;
alert(a);
alert('abc' * 3);
alert(1 / 0);
alert(-1 / 0);
alert('2' * '3');

//Задание 3 из семинара
let aa = '2';
let bb = '3';
console.log(parseInt(aa) + parseInt(b));
let userAa = parseInt(prompt("Напишите, пожалуйста, первое число"));
let userBb = parseInt(prompt("Напишите, пожалуйста, второе  число"));
console.log(`Сумма чисел равна ${userAa+userBb}`);
console.log(`Разность чисел равна ${userAa-userBb}`);
console.log(`Произведение чисел равно ${userAa*userBb}`);
console.log(`Частное чисел равно ${userAa/userBb}`);
console.log(`Остаток от деления равен ${userAa%userBb}`);

//Задание 4 из семинара
console.log(String(true));
console.log('a' + true);
console.log(Number(true));
console.log(true + 1);
console.log(true + true);
console.log(true - true);
console.log(String(true) + Number(true));


//Задание 5 из семинара
let userX = Number(prompt("Напишите, пожалуйста, число"));

if (userX > 5) { console.log(`Число больше ${userX}`); } else
if (userX < 5) { console.log(`Число меньше ${userX}`); } else { console.log(`Число равно ${userX}`); }

//Задание 6 из семинара
let test1 = parseInt(prompt("Напишите, пожалуйста, первое число"));
let test2 = parseInt(prompt("Напишите, пожалуйста, второе  число"));
if (test1 > test2) { console.log(`${test1} больше ${test2}`); } else
if (test1 < test2) { console.log(`${test1} меньше ${test2}`); } else { console.log(`${test1} равно ${test2}`); }

//Задание 6 из семинара
let test3 = parseInt(prompt("Напишите, пожалуйста, число от 0 до 15"));
if (test3 < 15 && test3 > 0) { console.log(`Число ${test3} принадлежит диапозону от 0 до 15`); } else { console.log(`Число ${test3} не принадлежит диапозону от 0 до 15`); }