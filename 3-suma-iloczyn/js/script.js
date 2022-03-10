let numbers = [1, 2, 3, 4, 5, 6];

function sumAndProduct(arr) {
  let sumResult = 0;
  let multiplicationResult = 1;

  numbers.forEach(function (num) {
    sumResult += num;
    multiplicationResult *= num;
  });

  console.log(sumResult);
  console.log(multiplicationResult);
}

sumAndProduct(numbers);
