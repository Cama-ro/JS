// split - rozbijanie liter w osobne tablice

function lettersFromString(str) {
  return str.split("").sort().join("");
}

lettersFromString("Akademia108");
console.log(lettersFromString("Akademia108"));
