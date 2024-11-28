import _ from "lodash";
console.log("Hello, Hexlet!");
console.log(_.intersection([2, 1, 5, 3, 6], [7, 2, 10, 6, 3, 1]));
console.log(_.capitalize("hello my friend!"));
const capitalizeFirstChar = (string = "") => {
  if (!string) return "";
  let result;
  const capitalizeChar = string[0].toUpperCase();
  return (result = capitalizeChar + string.slice(1));
};
console.log(capitalizeFirstChar("привет!"));
console.log(_.last(["one", "two"]));
