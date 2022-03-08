// split - rozbijanie liter w osobne tablice
// reverse - odwracanie kolejności w tablicy z literkami
// join - łączenie elementów tablicy w całość

// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// reverseString("Akademia108");

// console.log(reverseString("Akademia108"));
// console.log(reverseString("alimaK"));

let h1 = document.querySelector("h1");
const btn = document.querySelector("button");

function reverseString(str) {
  return str.split("").reverse().join("");
}

btn.addEventListener("click", function () {
  h1.innerText = reverseString(h1.innerText);
});
