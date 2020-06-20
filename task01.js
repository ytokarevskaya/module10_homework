let promptValue = prompt("Введите число: ");
if (isNaN(+promptValue)) {
  console.log("Oops, you are wrong!");
} else {
  let textInConsole;
  textInConsole = +promptValue % 2 == 0 ? "EVEN!" : "ODD!";
  console.log(textInConsole);
}
