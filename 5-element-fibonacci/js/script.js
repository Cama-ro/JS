// Funkcja, która zwraca wartość n-tego elementu ciągu fibbonaciego.
// Parametrem funkcji jest n - czyli n - ty element ciągu fibbonaciego.

const fibonacci = (n) => {
  let sum = [0, 1];

  for (let i = 2; i <= n; i++) {
    let num1 = sum[i - 1];
    let num2 = sum[i - 2];

    sum.push(num1 + num2);
  }
  return sum[n];
};

console.log(fibonacci(0));
console.log(fibonacci(3));
console.log(fibonacci(6));
