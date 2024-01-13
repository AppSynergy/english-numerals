import { numeralToNumber } from "./numeralToNumber";

test("Should return a number", () => {
  const result = numeralToNumber("");

  expect(typeof result).toBe("number");
});

test("Should identify non valid numbers", () => {
  expect(numeralToNumber("I'm not a number")).toBe(NaN);
});

test("Should identify 1 digit numbers", () => {
  expect(numeralToNumber("zero")).toBe(0);
  expect(numeralToNumber("one")).toBe(1);
  expect(numeralToNumber("three")).toBe(3);
  expect(numeralToNumber("seven")).toBe(7);
});

test("Should identify 2 digit numbers", () => {
  expect(numeralToNumber("Twenty-four")).toBe(24);
  expect(numeralToNumber("thirty seven")).toBe(37);
  expect(numeralToNumber("eighty eight")).toBe(88);
  expect(numeralToNumber("ninety-one")).toBe(91);
});

test("Should identify 3 digit numbers", () => {
  expect(numeralToNumber("two hundred")).toBe(200);
  expect(numeralToNumber("Eight hundred and twelve")).toBe(812);
  expect(numeralToNumber("nine-hundred and ninety-nine")).toBe(999);
});

test("Should identify 4 digit numbers", () => {
  expect(numeralToNumber("twelve hundred")).toBe(1200);
  expect(numeralToNumber("one thousand and six")).toBe(1006);
  expect(numeralToNumber("four thousand and twenty-five")).toBe(4025);
  expect(numeralToNumber("nine thousand, nine hundred and sixty")).toBe(9960);
});

test("Should identify 5 digit numbers", () => {
  expect(numeralToNumber("forty thousand")).toBe(40000);
  expect(numeralToNumber("sixty thousand, two hundred and forty three")).toBe(60243);
});

test("Should identify 6 digit numbers", () => {
  expect(numeralToNumber("three hundred thousand")).toBe(300000);
  expect(numeralToNumber("three hundred thousand and one")).toBe(300001);
  expect(numeralToNumber("three hundred thousand, nine hundred and one")).toBe(300901);
  expect(numeralToNumber("five hundred four thousand and sixty two")).toBe(504062);
  expect(numeralToNumber("Seven hundred and forty nine thousand, five hundred and eighty one")).toBe(749581);
});

test("Should identify simple millions", () => {
  expect(numeralToNumber("one million")).toBe(1000000);
  expect(numeralToNumber("twelve million")).toBe(12000000);
});

test("Note more complex use of millions does not give the correct answer", () => {
  expect(numeralToNumber("twelve million, twenty four thousand")).not.toBe(12024000);
});

test("Note that negative numbers do not give the correct answer", () => {
  expect(numeralToNumber("minus Six")).toBe(6);
});