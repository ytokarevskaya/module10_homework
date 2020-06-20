let anyValue = [];
switch (typeof anyValue) {
  case "string":
    console.log("String!");
    break;
  case "number":
    console.log("Number!");
    break;
  case "boolean":
    console.log("Boolean!");
    break;
  default:
    console.log("I don't know!");
    break;
}
