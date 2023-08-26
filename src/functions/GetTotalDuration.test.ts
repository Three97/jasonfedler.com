import IDuration from "../interfaces/IDuration";
import GetTotalDuration from "./GetTotalDuration";

test("Input with 27 hours total returns proper result", () => {
  const input: IDuration[] = [
    { hours: 12, minutes: 20 },
    { hours: 12, minutes: 20 },
    { hours: 2, minutes: 20 },
  ];

  expect(GetTotalDuration(input)).toBe("nearly 30 hours");
});

test("Input with 24 hours total returns proper result", () => {
  const input: IDuration[] = [
    { hours: 12, minutes: 30 },
    { hours: 11, minutes: 30 },
  ];

  expect(GetTotalDuration(input)).toBe("over 20 hours");
});

test("Input with 29.75 hours total returns proper result", () => {
  const input: IDuration[] = [
    { hours: 12, minutes: 30 },
    { hours: 11, minutes: 30 },
    { hours: 4, minutes: 30 },
    { hours: 1, minutes: 15 },
  ];

  expect(GetTotalDuration(input)).toBe("nearly 30 hours");
});

test("Input with 20 hours total returns proper result", () => {
  const input: IDuration[] = [
    { hours: 5, minutes: 30 },
    { hours: 5, minutes: 30 },
    { hours: 4, minutes: 30 },
    { hours: 4, minutes: 30 },
  ];

  expect(GetTotalDuration(input)).toBe("over 20 hours");
});
