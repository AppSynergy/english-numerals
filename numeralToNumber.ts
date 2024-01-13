export const numeralToNumber = (str: string): number => {
  // Converts any string to an integer from 0 to 1 million.
  // Note: numbers higher than this range will clamp to 1 million.
  // Note: negative integers are treated as if positive. 
  // If the string cannot be converted to a number then NaN is returned.

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
      // anything with a million in is clamped to a million.
      answer = 1000000;
    }

    if (lowerWord == "thousand") {
      // i.e. append three zeros
      answer += answer * 999;
    }

    if (lowerWord == "hundred") {
      // i.e. append two zeros
      answer += lastFoundNumber * 99;
    }

    // search for 0-19
    const foundSmallNumber = earlyNumbers.indexOf(lowerWord);
    if (foundSmallNumber >= 0) {
      foundAnyNumbers = true;
      lastFoundNumber = foundSmallNumber;
      answer += foundSmallNumber;
    }

    // search for 20,30,40...
    const foundTensNumber = tensNumbers.indexOf(lowerWord);
    if (foundTensNumber >= 0) {
      foundAnyNumbers = true;
      lastFoundNumber = (foundTensNumber + 2) * 10;
      answer += (foundTensNumber + 2) * 10;
    }
  })

  return foundAnyNumbers ? answer : NaN;
};




