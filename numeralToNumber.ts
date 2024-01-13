export const numeralToNumber = (str: string): number => {
  // convert any string to a number from 0 to 1 million
  // note that numbers outside this range will not work correctly - maybe should return NaN for these too?
  // if the string cannot be converted to a number then NaN is returned

  const words: string[] = str.split(/[\s,-]+/);
  
  const earlyNumbers = ["zero", "one", "two", "three",
    "four", "five", "six", "seven",
    "eight", "nine", "ten", "eleven",
    "twelve", "thirteen", "fourteen", "fifteen",
    "sixteen", "seventeen", "eighteen", "nineteen"]

  const tensNumbers = ["twenty", "thirty", "forty",
    "fifty", "sixty", "seventy", "eighty", "ninety"];

  let answer = 0;
  let lastFoundNumber = 0;
  let foundAnyNumbers = false;

  words.map((word) => {
    const lowerWord = word.toLowerCase();
    if (lowerWord == "million") {
      answer += answer * 999999;
    }

    if (lowerWord == "thousand") {
      answer += answer * 999;
    }

    if (lowerWord == "hundred") {
      answer += lastFoundNumber * 99;
    }

    const foundSmallNumber = earlyNumbers.indexOf(lowerWord);
    if (foundSmallNumber >= 0) {
      foundAnyNumbers = true;
      lastFoundNumber = foundSmallNumber;
      answer += foundSmallNumber;
    }

    const foundTensNumber = tensNumbers.indexOf(lowerWord);
    if (foundTensNumber >= 0) {
      foundAnyNumbers = true;
      lastFoundNumber = (foundTensNumber + 2) * 10;
      answer += (foundTensNumber + 2) * 10;
    }
  })

  return foundAnyNumbers ? answer : NaN;
};




