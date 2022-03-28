let numbers = [0, 1, 2, 3, 4, 5];

const arrayPowAndSum = (n) => {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += Math.pow(numbers[i], 2);
  }

  return sum;
};

console.log(arrayPowAndSum(numbers));
