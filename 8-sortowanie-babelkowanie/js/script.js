/////////////// implementing function with array by bubble sort ///////////////

const bubbleSort = (numbersArr) => {
  const lenghtArray = numbersArr.length;

  for (let i = 0; i < lenghtArray; i++) {
    for (let j = 0; j < lenghtArray; j++) {
      //
      // Check if current number is greater than the next number
      if (numbersArr[j] > numbersArr[j + 1]) {
        let currentNumber = numbersArr[j];
        numbersArr[j] = numbersArr[j + 1];
        numbersArr[j + 1] = currentNumber;
      }
    }
  }

  return numbersArr;
};

// numbersArray
const numbers = [
  12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1,
];

console.log(bubbleSort(numbers));
