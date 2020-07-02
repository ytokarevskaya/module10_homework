// let str = prompt();
// let arr = str.split("");
// arr = arr.reverse();
// str = arr.join("");
// alert(str);

// Всё верно, единственный момент - в задании было написано вывести результат в консоль. Но это мелочь) Можно записать чуть короче:

const string = "Hello";
const reverseString = string.split("").reverse().join("");
console.log(reverseString);