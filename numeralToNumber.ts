export const numeralToNumber = (str: string): number => {

  const words: string[] = str.split(/[\s,-]+/);

  // convert any string to a number from 0 to 1 million
  const earlyNumbers = ["zero", "one", "two", "three",
    "four", "five", "six", "seven",
    "eight", "nine", "ten", "eleven",
    "twelve", "thirteen", "fourteen", "fifteen",
    "sixteen", "seventeen", "eighteen", "nineteen"]

  const tensNumbers = ["twenty", "thirty", "forty",
    "fifty", "sixty", "seventy", "eighty", "ninety"];

  const digitNumbers = ["one", "two", "three", "four",
    "five", "six", "seven", "eight", "nine"]

  let answer = 0;
  let foundAnyNumbers = false;

  words.map((word) => {
    const foundSmallNumber = earlyNumbers.indexOf(word.toLowerCase());
    if (foundSmallNumber >= 0) {
      foundAnyNumbers = true;
      answer += foundSmallNumber;
    }

    const foundTensNumber = tensNumbers.indexOf(word.toLowerCase());
    if (foundTensNumber >= 0) {
      foundAnyNumbers = true;
      answer += (foundTensNumber + 2) * 10;
    }
  })

  return foundAnyNumbers ? answer : NaN;
};




