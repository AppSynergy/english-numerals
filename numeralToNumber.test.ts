import { numeralToNumber } from "./numeralToNumber";

test("Should return a number", () => {
  const result = numeralToNumber("");

  expect(typeof result).toBe("number");
});

test("Should identify non valid numbers", () => {
  expect(numeralToNumber("I'm not a number")).toBe(NaN);
});

test("Note that behaviour is misleading for negative numbers", () => {
  expect(numeralToNumber("minus Six")).toBe(6);
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
  expect(numeralToNumber("Eight hundred and twelve")).toBe(812);
  expect(numeralToNumber("nine-hundred and ninety-nine")).toBe(999);
});