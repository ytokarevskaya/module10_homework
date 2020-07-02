// const someArray = [
//   1,
//   "1",
//   2,
//   3,
//   4,
//   5,
//   "abc",
//   [1, "a"],
//   true,
//   null,
//   0,
//   undefined,
//   NaN,
//   Infinity,
// ];
// someArray.forEach((elem) => {
//   if (typeof elem === "number" && isFinite(elem)) {
//     if (elem == 0) {
//       console.log("It's a 0");
//     } else if (elem % 2 == 0) {
//       console.log("Element " + elem + " is EVEN");
//     } else {
//       console.log("Element " + elem + " is ODD");
//     }
//   }
// });


// Не совсем верно понято задание. Нужно вывести суммарное кол-во элементов в массиве, т.е. сколько суммарно четных, нечетных и нулей. Остальные элементы игнорируются. Верный вариант решения:

const arr = [0, null, NaN, 0, 1, 2, 4, "str"]

let even = 0, odd = 0, zero = 0;

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number" && !isNaN(arr[i])) {
    if (arr[i] === 0) {
      zero += 1;
    } else if (arr[i] % 2 === 0) {
      even += 1;
    } else {
      odd += 1;
    }
  }
}

console.log("четных элементов: ", even)
console.log("нечетных элементов: ", odd)
console.log("нулей: ", zero)
